import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Ícones

export default function Login({ onLogin, onNavigateRegister }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (email.trim() === "" || senha.trim() === "") {
      alert("Preencha o e-mail e a senha.");
      return false;
    }
    if (!validarEmail(email)) {
      alert("Digite um e-mail válido.");
      return false;
    }
    if (onLogin) onLogin({ email, senha });
    return true;
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.topContainer}>
          <img
            src="/Logo.png"
            alt="Logo"
            className={styles.logo}
            loading="lazy"
          />
          <h1 className={styles.titulo}>Login</h1>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.label}>E-mail</label>
          </div>

          <div className={styles.inputBox}>
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Digite sua senha"
              className={styles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setMostrarSenha((v) => !v)}
              aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
            >
              {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            <label className={styles.label}>Senha</label>
          </div>

          <button
            className={styles.btnLogin}
            onClick={() => {
              const success = handleLogin();
              if (success) {
                navigate("/home");
              }
            }}
          >
            Login
          </button>

          <p className={styles.registerPrompt}>
            Não tem conta?
            <button
              type="button"
              className={styles.link}
              onClick={onNavigateRegister}
            >
              Crie sua conta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
