import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdEdit, MdAppRegistration } from "react-icons/md";

import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src="../../public/Logo.png" alt="Logo" className={styles.logoImage} />
      </div>

      <div className={styles.loginSection}>
        <h1 className={styles.loginTitle}>Entrar</h1>
        <p className={styles.loginSubtitle}>Faça seu login</p>

        <button
          className={styles.emailButton}
          onClick={() => navigate("/login")}
          type="button"
        >
          <MdEmail size={20} color="#2563eb" />
          Continue com email
        </button>

        <button
          className={styles.registerButton}
          onClick={() => navigate("/register")}
          type="button"
        >
          <MdAppRegistration size={20} color="#2563eb" />
          Cadastrar-se
        </button>
      </div>
    </div>
  );
}
