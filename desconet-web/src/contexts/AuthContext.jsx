import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'; // Adicionado useCallback
import { auth, db } from '../firebaseConfig'; 
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore'; // Adicionado doc, getDoc
import { 
  saveUserToLocalStorage, 
  clearUserFromLocalStorage, 
  getUserFromLocalStorage 
} from '../utils/userDataLocalStorage'; 

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) { 
    throw new Error('useAuth must be used within an AuthProvider. Make sure your component is a descendant of AuthProvider.');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    return getUserFromLocalStorage();
  });
  const [loading, setLoading] = useState(true); 

  const fetchAndSetUser = useCallback(async (firebaseUser) => {
    if (!firebaseUser) {
      clearUserFromLocalStorage();
      setCurrentUser(null);
      setLoading(false);
      return;
    }
    try {
      // Tenta buscar pelo UID, que é o mais comum para a coleção 'usuarios'
      // Se o ID do documento for diferente do UID, esta lógica precisa ser ajustada
      // ou você precisa garantir que o documento 'usuarios' tenha o ID igual ao UID do auth.
      // A lógica original usava uma query, o que é mais flexível se o ID do doc não é o UID.
      // Vamos manter a query por enquanto para consistência com a lógica anterior.
      const usuariosRef = collection(db, "usuarios");
      const q = query(usuariosRef, where("uid", "==", firebaseUser.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDataFromFirestore = userDoc.data();
        const fullUserData = { 
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          docId: userDoc.id, // Salvar o ID do documento do Firestore
          ...userDataFromFirestore, // Inclui photoURL, coverPhotoURL, nome, etc.
        };
        
        setCurrentUser(fullUserData);
        saveUserToLocalStorage(fullUserData);
      } else {
        console.warn("Usuário autenticado no Firebase mas não encontrado no Firestore. Deslogando.");
        await firebaseSignOut(auth); 
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário do Firestore:", error);
      await firebaseSignOut(auth); 
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true); // Define loading como true ao iniciar a verificação/busca
      fetchAndSetUser(user);
    });
    return () => unsubscribe(); 
  }, [fetchAndSetUser]); 

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      
    }
  };

  const refreshCurrentUser = useCallback(async () => {
    if (auth.currentUser) {
      setLoading(true);
      await fetchAndSetUser(auth.currentUser);
    }
  }, [fetchAndSetUser]);

  const value = {
    currentUser,
    loading,
    logout,
    refreshCurrentUser, // Adicionar a nova função ao contexto
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
