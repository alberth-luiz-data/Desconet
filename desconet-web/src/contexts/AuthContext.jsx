import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig'; 
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
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
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const usuariosRef = collection(db, "usuarios");
          const q = query(usuariosRef, where("uid", "==", user.uid));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userDataFromFirestore = querySnapshot.docs[0].data();
            const fullUserData = { 
              uid: user.uid,
              email: user.email,
              ...userDataFromFirestore,
              id: querySnapshot.docs[0].id
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
        }
      } else {
        clearUserFromLocalStorage();
        setCurrentUser(null);
      }
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, []); 

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      
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
