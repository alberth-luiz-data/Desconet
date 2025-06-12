import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Certifique-se que este caminho está correto
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { 
  saveUserToLocalStorage, 
  clearUserFromLocalStorage, 
  getUserFromLocalStorage 
} from '../utils/userDataLocalStorage'; // Certifique-se que este caminho está correto
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Tenta carregar o usuário do localStorage na montagem inicial
    const cachedUser = getUserFromLocalStorage();
    if (cachedUser) {
      setCurrentUser(cachedUser);
    }
    // setLoading(true) é o estado inicial. O listener abaixo definirá para false.

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Usuário está logado no Firebase
        // Verifica se os dados já estão no estado e são consistentes para evitar buscas repetidas
        if (currentUser && currentUser.uid === user.uid && currentUser.nome) { // Adicionada verificação de 'nome' como exemplo de dado do Firestore
          setLoading(false);
          return; 
        }
        
        try {
          const usuariosRef = collection(db, "usuarios");
          const q = query(usuariosRef, where("uid", "==", user.uid));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userDataFromFirestore = querySnapshot.docs[0].data();
            // Combina dados do Auth (user.uid, user.email etc.) com dados do Firestore
            const fullUserData = { 
              uid: user.uid, // UID do Firebase Auth
              email: user.email, // Email do Firebase Auth (se disponível)
              ...userDataFromFirestore, // Dados do Firestore (nome, fotoURL, etc.)
              id: querySnapshot.docs[0].id // ID do documento no Firestore
            };
            
            setCurrentUser(fullUserData);
            saveUserToLocalStorage(fullUserData);
          } else {
            // Usuário autenticado no Firebase, mas sem registro correspondente no Firestore.
            // Isso pode ser um erro de fluxo de registro ou dados inconsistentes.
            console.warn("Usuário autenticado no Firebase mas não encontrado no Firestore. Deslogando.");
            await firebaseSignOut(auth); // Força o logout para evitar estado inconsistente
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário do Firestore:", error);
          // Em caso de erro ao buscar dados, deslogar para evitar estado inconsistente.
          await firebaseSignOut(auth);
        }
      } else {
        // Usuário não está logado no Firebase
        clearUserFromLocalStorage();
        setCurrentUser(null);
      }
      setLoading(false);
    });

    // Cleanup da subscrição ao desmontar o componente
    return () => unsubscribe();
  // A dependência de `currentUser` aqui pode ser delicada.
  // O objetivo é revalidar se o `currentUser` mudar por fora, mas a lógica principal
  // é acionada pelo `user` do `onAuthStateChanged`.
  // Se causar loops, pode ser necessário remover `currentUser` ou refinar a condição interna.
  }, [currentUser]); 

  const logout = async () => {
    setLoading(true); 
    try {
      await firebaseSignOut(auth);
      // O listener onAuthStateChanged cuidará de limpar currentUser, localStorage,
      // e o ProtectedRoute cuidará do redirecionamento.
      // navigate('/'); // Opcional: redirecionar explicitamente para Welcome após logout
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // Mesmo se o logout do Firebase falhar, limpa o estado local como precaução
      clearUserFromLocalStorage();
      setCurrentUser(null);
      setLoading(false); // Garante que loading seja false em caso de erro no logout
    }
  };

  const value = {
    currentUser,
    loading,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
