import React, { useState } from "react";
import "../styles/family.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import robo from "/Mascote.png";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FamilyHomeScreen() {
  const currentUser = { displayName: "Usuário", photoURL: "" };
  const nomeAjudado = "Luizinho";
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const totalHoras = 24;
  const horasOffline = 10;
  const horasOnline = totalHoras - horasOffline;
  const mediaDiaria = "8h30";
  const metaSemanal = "50h";

  const offlineData = {
    labels: ["Offline", "Online"],
    datasets: [
      {
        label: "Tempo em horas",
        data: [horasOffline, horasOnline],
        backgroundColor: ["#0ea5e9", "#e2e8f0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="family-container">
      <div className="scroll-content">
        <div className="header">
          <p>
            Olá, <strong>{currentUser.displayName.split(" ")[0]}</strong>! Acompanhe o progresso de <strong>{nomeAjudado}</strong> hoje e envie algo que motive ele a continuar desconectado.
          </p>
        </div>

        <div className="robo-assistente">
          <img src={robo} alt="Assistente Desconet" />
        </div>

        <div className="profile-box">
          <img
            src={currentUser.photoURL || "https://randomuser.me/api/portraits/women/1.jpg"}
            alt="avatar"
            className="avatar"
          />
          <div>
            <p className="username">{currentUser.displayName}</p>
            <p className="subtitle">Ajudando {nomeAjudado}</p>
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
          <p className="progress-text">1h 20 offline agora</p>
        </div>

        <h3 className="section-title">Atividades sugeridas</h3>
        <div className="dica-card">
          <p>🌳 Passeio no parque</p>
          <span className="autor-dica">Enviado por: @ana_pet</span>
        </div>
        <div className="dica-card">
          <p>📖 Leia um capítulo do seu livro</p>
          <span className="autor-dica">Enviado por: @livros_lia</span>
        </div>

        <button className="new-suggestion-btn" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
          + Enviar nova sugestão
        </button>

        {mostrarFormulario && (
          <div className="suggestion-form">
            <input type="text" placeholder="Título da sugestão" />
            <textarea placeholder="Descrição detalhada" rows={4}></textarea>
            <select>
              <option value="">Enviar para...</option>
              <option value="luizinho">Luizinho</option>
            </select>
            <button>Enviar sugestão</button>
          </div>
        )}

        <h3 className="section-title">Acompanhe Luizinho - offline</h3>
        <div className="grafico-card">
          <div className="info-boxes">
            <div className="info-box">
              <div className="info-label">Hoje</div>
              <div className="info-value">{horasOffline}h</div>
            </div>
            <div className="info-box">
              <div className="info-label">Média diária</div>
              <div className="info-value">{mediaDiaria}</div>
            </div>
            <div className="info-box">
              <div className="info-label">Meta semanal</div>
              <div className="info-value">{metaSemanal}</div>
            </div>
          </div>
          <Pie
            data={offlineData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const label = context.label || "";
                      const value = context.raw;
                      return `${label}: ${value}h`;
                    },
                  },
                },
              },
            }}
          />
        </div>

        <h3 className="section-title">Atividade</h3>
        <div className="reward-box">
          <p><strong>{nomeAjudado}</strong> completou 3h offline! 👌</p>
        </div>
        <div className="reward-box">
          <p>Você sugeriu: Passeio no parque 🌳 <span className="accepted">Aceito!</span></p>
        </div>
      </div>
    </div>
  );
}
