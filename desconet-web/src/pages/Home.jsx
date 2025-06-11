import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Home() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;

          // Agora buscamos pelo campo uid usando uma query
          const usuariosRef = collection(db, "usuarios");
          const q = query(usuariosRef, where("uid", "==", uid));
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            throw new Error("Usuário não encontrado no Firestore");
          }

          const docData = querySnapshot.docs[0].data();
          setUsuario({ id: querySnapshot.docs[0].id, ...docData });
          localStorage.setItem("uid", uid);
          setErro(null);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
          setErro("Erro ao carregar dados do usuário. Você será redirecionado.");
          setTimeout(() => {
            auth.signOut();
            navigate("/");
          }, 3000);
        } finally {
          setLoading(false);
        }
      } else {
        localStorage.removeItem("uid");
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const formatarData = (dataStr) => {
    if (!dataStr) return "Não informado";
    const partes = dataStr.split("/");
    if (partes.length === 3) return dataStr;
    if (dataStr.length === 8) {
      return `${dataStr.slice(6, 8)}/${dataStr.slice(4, 6)}/${dataStr.slice(0, 4)}`;
    }
    return dataStr;
  };

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (erro) return <div className={styles.error}>{erro}</div>;
  if (!usuario) return <div className={styles.loading}>Carregando usuário...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo(a), {usuario.nome}!</h1>

      <div className={styles.card}>
        <p><strong>UID:</strong> {usuario.uid}</p>
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
