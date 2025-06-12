import React, { useState } from "react";
import styles from '../styles/Register.module.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";  
import { auth, db } from "../firebaseConfig"; 


export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [atividadesSelecionadas, setAtividadesSelecionadas] = useState([]);
  

  const atividades = [
    "Academia", "Filmes", "Yoga", "Séries", "Corrida", "Bicicleta", "Parques", "Futebol",
    "Cinema", "Música", "Dança", "Animais", "Caminhada", "Comer", "Shows", "Bares"
  ];

  const toggleAtividade = (atividade) => {
    setAtividadesSelecionadas((prev) =>
      prev.includes(atividade)
        ? prev.filter((a) => a !== atividade)
        : [...prev, atividade]
    );
  };



  const validarTelefone = (tel) => /^\d{10,11}$/.test(tel.replace(/\D/g, ""));
  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const maxDate = new Date().toISOString().split("T")[0];

 const handleRegister = async () => {
  if (!nome || !email || !senha || !confirmarSenha || !nascimento || !objetivo || !telefone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("E-mail inválido.");
    return;
  }

  if (!validarTelefone(telefone)) {
    alert("Telefone inválido. Digite apenas números com DDD.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  const nascimentoFormatado = new Date(nascimento).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "usuarios", uid), {
      uid,
      nome,
      email,
      nascimento: nascimentoFormatado,
      telefone,
      status: "ativo",
      objetivo,
      atividades: atividadesSelecionadas,
    });

    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    console.error("Erro no cadastro:", error);
    alert("Erro ao cadastrar: " + error.message);
  }
};

  return (
    <div 
      className={styles.pageWrapper}
      style={{
        minHeight: '100vh',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingTop: '60px'  // compensa a navbar fixa
      }}
    >
      <div className={styles.card}>
        <div className={styles.header}>
          <img src="Logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.headerText}>Cadastro</h1>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputBox}>
              <label className={styles.label}>Nome Completo</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.label}>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.label}>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.label}>Confirmar Senha</label>
              <input
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.label}>Data de Nascimento</label>
              <input
                type="date"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                className={styles.input}
                max={maxDate}
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.label}>Telefone</label>
              <input
                type="tel"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.label}>Objetivo</label>
              <select
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                className={styles.input}
              >
                <option value="">Selecione um objetivo</option>
                <option value="desconectar">Me desconectar</option>
                <option value="ajudar">Ajudar um amigo</option>
                <option value="informacoes">Buscar informações</option>
              </select>
            </div>
          </form>

          <div>
            <div className={styles.subTitle}>
              Me conte mais sobre as atividades que você gosta.
            </div>
            <div className={styles.atividadesGrid}>
              {atividades.map((atividade) => (
                <button
                  type="button"
                  key={atividade}
                  onClick={() => toggleAtividade(atividade)}
                  className={`${styles.atividadeBtn} ${
                    atividadesSelecionadas.includes(atividade) ? styles.selected : ""
                  }`}
                >
                  {atividade}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button} onClick={handleRegister}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );

};