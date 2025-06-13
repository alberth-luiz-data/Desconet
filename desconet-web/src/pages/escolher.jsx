import React from "react";
import styles from "../styles/escolher.module.css";
import { useNavigate } from "react-router-dom";

export default function EscolherPerfil() {
  const navigate = useNavigate();

  const handleNavigateFamily = () => {
    navigate("/family");
  };

  const handleNavigateHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img src="/Logo.png" alt="Logo Desconet" className={styles.logo} />
        <h1 className={styles.titulo}>Bem-vindo(a)!</h1>
        <p className={styles.subtitulo}>
          Para continuar, por favor, selecione o seu perfil de acesso:
        </p>

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.btnEscolha} ${styles.btnFamilia}`}
            onClick={handleNavigateFamily}
          >
            Família
          </button>
          <button
            className={`${styles.btnEscolha} ${styles.btnVitima}`}
            onClick={handleNavigateHome}
          >
            Vítima
          </button>
        </div>
      </div>
    </div>
  );
}
