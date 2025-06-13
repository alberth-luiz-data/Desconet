import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Navbar from "../pages/Navbar";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useNavigate } from "react-router-dom";
import robo from "../assets/Mascote.png";
import { getUserNameFromLocalStorage } from "../utils/userDataLocalStorage";
import { useAuth } from "../contexts/AuthContext"; // Importar useAuth

const conexoes = [
  { nome: "Joana", status: "ruim", foto: "https://randomuser.me/api/portraits/women/1.jpg" },
  { nome: "Carlos", status: "bom", foto: "https://randomuser.me/api/portraits/men/2.jpg" },
  { nome: "Marcos", status: "ruim", foto: "https://randomuser.me/api/portraits/men/3.jpg" },
];

const dadosOffline = [
  { name: "Offline", value: 10 },
  { name: "Online", value: 14 },
];

const cores = ["#f2f2f2", "#38b6ff"];

const posts = [
  {
    tipo: "Conexão de verdade",
    autor: "https://randomuser.me/api/portraits/women/4.jpg",
    texto: "Saí com amigos hoje e foi ótimo!",
    curtidas: 3,
    comentarios: ["Muito bom!", "Que legal!"]
  },
  {
    tipo: "Vida fora dela",
    autor: "https://randomuser.me/api/portraits/men/5.jpg",
    texto: "Caminhei 40min e não senti falta do celular!",
    curtidas: 5,
    comentarios: ["Inspirador!", "Eu também fiz isso!"]
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { currentUser, loading: authLoading } = useAuth(); // Obter currentUser e loading do AuthContext
  const [comentando, setComentando] = useState(null);
  const [novoComentario, setNovoComentario] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhotoUrl, setUserPhotoUrl] = useState("https://randomuser.me/api/portraits/men/12.jpg"); // Imagem padrão

  useEffect(() => {
    // Só tenta definir o nome do usuário se o AuthContext não estiver carregando
    if (!authLoading) {
      const nameFromStorage = getUserNameFromLocalStorage();
      if (nameFromStorage) {
        setUserName(nameFromStorage);
      } else if (currentUser && (currentUser.nome || currentUser.username || currentUser.name)) {
        // Fallback para os dados do currentUser se o localStorage estiver vazio/desatualizado
        // mas o AuthContext já tem os dados do usuário.
        // A ordem de verificação (nome, username, name) deve ser consistente com getUserNameFromLocalStorage
        setUserName(currentUser.nome || currentUser.username || currentUser.name);
      } else {
        setUserName("Usuário"); // Fallback final se nenhum nome for encontrado
      }

      // Usa currentUser.photoURL se existir, senão a imagem padrão
      if (currentUser && currentUser.photoURL) {
        setUserPhotoUrl(currentUser.photoURL);
      } else {
        setUserPhotoUrl("https://randomuser.me/api/portraits/men/12.jpg"); 
      }
    }
    // Opcional: você pode adicionar um 'else' aqui para definir userName como "Carregando..."
    // se authLoading for true, caso deseje um feedback visual.
    // else { setUserName("Carregando..."); }
    
  }, [currentUser, authLoading]); // Re-executa quando currentUser ou authLoading mudam

  const handleComentar = (index) => {
    if (novoComentario) {
      posts[index].comentarios.push(novoComentario);
      setNovoComentario("");
      setComentando(null);
    }
  };

  const handleRoboClick = () => {
    navigate('/chatAI');
  };

  return (
    <div className="home-page">
      <Navbar />

      <div style={{ paddingTop: "60px" }} />

      <div className="family-header-box">
        <p>
          Olá, <strong>{userName}</strong>! Acompanhe seu progresso hoje e sua evolução para continuar desconectado.
        </p>
      </div>

      <div className="robo-assistente-home" onClick={handleRoboClick}>
        <img src={robo} alt="Assistente Desconet" className="robo-fixo" />
      </div>

      <div className="profile-box-home">
        <img
          src={userPhotoUrl} 
          alt="avatar"
          className="avatar"
        />
        <div>
          <p className="username">{userName}</p>
        </div>
      </div>

      <div className="progress-bar-containerr">
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%", backgroundColor: "#1b86ea" }}></div>
        </div>
        <p className="progress-text">2h 20 offline agora</p>
      </div>

      <section className="conexoes">
        <h3>Conexões</h3>
        <div className="lista-conexoes" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {conexoes.map((c, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img src={c.foto} alt={c.nome} className="foto-conexao" />
              <div style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
                {c.status === "bom" ? "✅" : "⚠️"} {c.nome}
              </div>
            </div>
          ))}
        </div>
      </section>

  
      <section>
        <h3 className="section-title">Atividades sugeridas</h3>
        <div className="dica-card">
          <p>🌳 Passeio no parque</p>
          <span className="autor-dica">Enviado por: @ana_pet</span>
        </div>
        <div className="dica-card">
          <p>📖 Leia um capítulo do seu livro</p>
          <span className="autor-dica">Enviado por: @livros_lia</span>
        </div>

     
      </section>
    <h3 className="section-title">Acompanhe seu tempo offline</h3>
      <div className="grafico-cardd">
        <div className="info-boxess">
          <div className="info-boxx">
            <div className="info-labell">Hoje</div>
            <div className="info-valuee">10h</div>
          </div>
          <div className="info-boxx">
            <div className="info-labell">Média diária</div>
            <div className="info-valuee">8h30</div>
          </div>
          <div className="info-boxx">
            <div className="info-labell">Meta semanal</div>
            <div className="info-valuee">50h</div>
          </div>
        </div>

        <PieChart width={250} height={250}>
          <Pie data={dadosOffline} dataKey="value" outerRadius={80} label>
            {dadosOffline.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={cores[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <section className="postagens">
        <h3>Postagens</h3>
        {posts.map((p, i) => (
          <div key={i} className="postagem-balao">
            <div className="post-header">
              <img src={p.autor} alt="autor" className="autor-foto" />
              <h4>{p.tipo}</h4>
            </div>
            <p className="post-texto">{p.texto}</p>

            <div className="acoes-post">
              <span>❤️ {p.curtidas}</span>
              <span
                onClick={() => setComentando(i)}
                style={{ cursor: "pointer" }}
              >
                💬 {p.comentarios.length}
              </span>
            </div>

            {comentando === i && (
              <div className="comentario-box">
                <input
                  type="text"
                  value={novoComentario}
                  placeholder="Digite um comentário..."
                  onChange={(e) => setNovoComentario(e.target.value)}
                />
                <button
                  onClick={() => handleComentar(i)}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "0.6rem 1rem",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Enviar
                </button>
              </div>
            )}

            {p.comentarios.length > 0 && (
              <div className="comentarios-lista">
                {p.comentarios.map((c, idx) => (
                  <p key={idx} className="comentario-item">
                    💬 {c}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
