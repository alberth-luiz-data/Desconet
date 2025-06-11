import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig"; // importando juntos
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Observa o estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUsuario(docSnap.data());
            localStorage.setItem("uid", user.uid);
          } else {
            alert("Dados do usuário não encontrados.");
            auth.signOut();
            navigate("/");
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          alert("Erro ao carregar dados do usuário.");
        }
      } else {
        alert("Usuário não autenticado. Faça login.");
        localStorage.removeItem("uid");
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const formatarData = (dataStr) => {
    const partes = dataStr.split("/");
    if (partes.length === 3) return dataStr;
    if (dataStr.length === 8) {
      return `${dataStr.slice(6, 8)}/${dataStr.slice(4, 6)}/${dataStr.slice(0, 4)}`;
    }
    return dataStr;
  };

  if (!usuario) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo(a), {usuario.nome}!</h1>

      <div className={styles.card}>
        <p><strong>E-mail:</strong> {usuario.email}</p>
        <p><strong>Nascimento:</strong> {formatarData(usuario.nascimento)}</p>
        <p><strong>Telefone:</strong> {usuario.telefone}</p>
        <p><strong>Status:</strong> {usuario.status}</p>
        <p><strong>Objetivo:</strong> {usuario.objetivo}</p>
        <p><strong>Atividades:</strong> {usuario.atividades?.join(", ") || "Nenhuma selecionada"}</p>
      </div>

      <button
        className={styles.logoutBtn}
        onClick={() => {
          localStorage.removeItem("uid");
          auth.signOut();
          navigate("/");
        }}
      >
        Sair
      </button>
    </div>
  );
}
