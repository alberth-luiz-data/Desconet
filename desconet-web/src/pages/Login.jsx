import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";

export default function Login({ onNavigateRegister }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  /*
  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    if (loading) return;

    if (!email.trim() || !senha.trim()) {
      alert("Preencha o e-mail e a senha.");
      return;
    }
    if (!validarEmail(email)) {
      alert("Digite um e-mail válido.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário autenticado:", user.uid);
      localStorage.setItem("uid", user.uid);
      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error.code);
      if (error.code === "auth/user-not-found") {
        alert("Usuário não encontrado.");
      } else if (error.code === "auth/wrong-password") {
        alert("Senha incorreta.");
      } else {
        alert("Erro ao fazer login.");
      }
    } finally {
      setLoading(false);
    }
  };
  */

const handleLogin = () => {
  console.log("Login clicado");
  navigate("/home");
};

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.topContainer}>
          <img src="/Logo.png" alt="Logo" className={styles.logo} loading="lazy" />
          <h1 className={styles.titulo}>Login</h1>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.inputBox}>
            <input
              ref={emailInputRef}
              type="email"
              placeholder="Digite seu e-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              autoComplete="username"
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
              disabled={loading}
              autoComplete="current-password"
            />
            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setMostrarSenha((v) => !v)}
              aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
              disabled={loading}
            >
              {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            <label className={styles.label}>Senha</label>
          </div>

          <button
            className={styles.btnLogin}
            onClick={handleLogin}
            disabled={loading}
          >
            Login
          </button>

          <p className={styles.registerPrompt}>
            Não tem conta?
            <button
              type="button"
              className={styles.link}
              onClick={onNavigateRegister}
              disabled={loading}
            >
              Crie sua conta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
