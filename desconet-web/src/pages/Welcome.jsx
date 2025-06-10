import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdAppRegistration, MdChat } from "react-icons/md";

import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src="/Logo.png" alt="Logo" className={styles.logo} />

        <h1 className={styles.title}>Bem-vindo</h1>
        <p className={styles.subtitle}>Entre para continuar</p>

        <button
          className={styles.emailButton}
          onClick={() => navigate("/login")}
          type="button"
        >
          <MdEmail size={20} />
          Continuar com Email
        </button>

        <button
          className={styles.registerButton}
          onClick={() => navigate("/register")}
          type="button"
        >
          <MdAppRegistration size={20} />
          Cadastrar-se
        </button>

          {/* button abaixo só pra testes da IA, remover dps */}
        <button
          className={styles.emailButton}
          onClick={() => navigate("/chat")}
          type="button"
          style={{ marginTop: "1rem" }}
        >
          <MdChat size={20} />
          Testar Chat AI
        </button>
      </div>
    </div>
  );
}
