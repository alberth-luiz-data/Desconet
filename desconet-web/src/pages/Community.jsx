import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Community.css';

const Community = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate(-1);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Previne que o clique no menu trigger o header
    console.log('Menu clicked');
  };

  return (
    <div className="community-page">
      <div className="community-header" onClick={handleHeaderClick}>
        <h1 className="community-title">Comunidade</h1>
        <button 
          className="community-menu-btn"
          onClick={handleMenuClick}
          aria-label="Abrir menu"
        >
          {/* Ícone do menu aqui */}
          ☰
        </button>
      </div>
      
      <div className="community-search">
        <input type="text" placeholder="Pesquisar na comunidade..." />
      </div>

      <div className="community-list">
        <div className="community-card">
          <img src="avatar1.jpg" alt="Avatar" className="community-avatar" />
          <div className="community-info">
            <h2 className="community-name">Nome da Comunidade 1</h2>
            <p className="community-desc">Descrição da comunidade 1.</p>
            <div className="community-members">10 membros</div>
          </div>
          <div className="community-actions">
            <button>Participar</button>
            <button>Ver</button>
          </div>
        </div>

        <div className="community-card">
          <img src="avatar2.jpg" alt="Avatar" className="community-avatar" />
          <div className="community-info">
            <h2 className="community-name">Nome da Comunidade 2</h2>
            <p className="community-desc">Descrição da comunidade 2.</p>
            <div className="community-members">25 membros</div>
          </div>
          <div className="community-actions">
            <button>Participar</button>
            <button>Ver</button>
          </div>
        </div>

        {/* Mais comunidades */}
      </div>

      <div className="community-posts">
        <div className="community-post">
          <h3 className="post-title">Título do Post</h3>
          <p className="post-content">Conteúdo do post...</p>
          <div className="post-actions">
            <button>Curtir</button>
            <button>Comentar</button>
          </div>
        </div>

        <div className="community-post">
          <h3 className="post-title">Título do Post</h3>
          <p className="post-content">Conteúdo do post...</p>
          <div className="post-actions">
            <button>Curtir</button>
            <button>Comentar</button>
          </div>
        </div>

        {/* Mais posts */}
      </div>

      <div className="comments-section">
        <div className="comment">
          <p>Usuário: Este é um comentário.</p>
        </div>

        <div className="comment">
          <p>Usuário: Este é outro comentário.</p>
        </div>

        <div className="comment-input">
          <input type="text" placeholder="Escreva um comentário..." />
          <button className="comment-submit">Enviar</button>
        </div>

        <div className="comment-confirmation">
          Comentário enviado com sucesso!
        </div>
      </div>
    </div>
  );
};

export default Community;