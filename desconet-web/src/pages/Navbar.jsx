import React, { useState } from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logoDefault from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const userName = "Usuário";
  const userProfilePic = logoDefault;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = async () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
    navigate('/');
  };

  const navigateTo = (path) => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
    navigate(path);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button 
          className="close-btn" 
          onClick={toggleSidebar}
          aria-label="Fechar menu"
        >
          ×
        </button>

        <div className="sidebar-header">
          <img 
            src={userProfilePic} 
            alt="Avatar do usuário" 
            className="logo-img" 
            onError={(e) => { e.target.onerror = null; e.target.src = logoDefault; }}
          />
          <div className="user-info">
            <span>{userName}</span>
          </div>
        </div>

        <ul className="menu-list">
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('/home'); }}
              aria-label="Ir para página inicial"
            >
              <span>🏠</span> Início
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('/chat'); }}
              aria-label="Ir para conversas"
            >
              <span>💬</span> Conversas
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('/community'); }}
              aria-label="Ir para comunidade"
            >
              <span>👥</span> Comunidade
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('/profile'); }}
              aria-label="Ir para perfil"
            >
              <span>🙍‍♂️</span> Perfil
            </a>
          </li>
        </ul>

        <hr className="mx-3 text-white" />

        <ul className="menu-list">
          <li>
            <button 
              className="logout-button-sidebar" 
              onClick={handleLogout}
              aria-label="Fazer logout"
            >
              <span>🚪</span> Sair
            </button>
          </li>
        </ul>

        <div className="sidebar-footer">
          <div>Versão 1.0.0</div>
          <div style={{ fontSize: '10px', marginTop: '4px', opacity: '0.8' }}>
            © Desconect
          </div>
        </div>
      </div>

      <nav className="custom-navbar d-flex justify-content-between align-items-center px-3">
        <button 
          className="menu-btn" 
          onClick={toggleSidebar}
          aria-label="Abrir menu"
        >
          ☰
        </button>
        
        <div className="search-box flex-grow-1 mx-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar..."
            aria-label="Campo de pesquisa"
          />
        </div>
        
        <div 
          className="profile-icon" 
          onClick={() => navigateTo('/profile')} 
          role="button"
          tabIndex={0}
          aria-label="Ir para perfil"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigateTo('/profile');
            }
          }}
        > 
          <img 
            src={userProfilePic} 
            alt="Foto do perfil" 
            onError={(e) => { e.target.onerror = null; e.target.src = logoDefault; }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
