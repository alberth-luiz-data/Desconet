import React, { useState } from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logoDefault from "../assets/react.svg"; // Renomeado para clareza, ajuste o caminho se necessário
import { useNavigate } from "react-router-dom"; // Para navegação

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Inicializar useNavigate

  // Define o nome do usuário e foto a serem exibidos
  // Mostra "Carregando..." se o AuthContext ainda estiver em loading
  const userName = "Usuário"; // Valor fixo como no arquivo original fornecido
  const userProfilePic = logoDefault; // Valor fixo como no arquivo original fornecido

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = async () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
    // Lógica de logout original (se houver) ou a ser implementada separadamente
    // Por enquanto, apenas navega para a página inicial como exemplo,
    // já que a lógica de autenticação não deve ser alterada aqui.
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
        <button className="close-btn" onClick={toggleSidebar}>×</button>

        <div className="sidebar-header text-center my-3">
          <img 
            src={userProfilePic} 
            alt="User Avatar" 
            className="logo-img" 
            style={{ borderRadius: '50%', width: '60px', height: '60px', objectFit: 'cover', marginBottom: '10px', border: '2px solid white'}}
            onError={(e) => { e.target.onerror = null; e.target.src = logoDefault; }} // Fallback se a fotoURL falhar
          />
          <div className="user-info mt-2">
            <span className="ms-2" style={{ color: 'white', fontWeight: 'bold' }}>{userName}</span>
          </div>
        </div>

        <ul className="menu-list">
          <li><a href="#" onClick={() => navigateTo('/home')}><span>🏠</span> Início</a></li>
          <li><a href="#" onClick={() => navigateTo('/chat')}><span>💬</span> Conversas</a></li>
          <li><a href="#" onClick={() => navigateTo('/community')}><span>👥</span> Comunidade</a></li>
          <li><a href="#" onClick={() => navigateTo('/profile')}><span>🙍‍♂️</span> Perfil</a></li>
        </ul>

        <hr className="mx-3 text-white" />

        <ul className="menu-list">
          {/* <li><a href="#"><span>⚙️</span> Configurações</a></li> */}
          <li><button className="logout-button-sidebar" onClick={handleLogout}><span>🚪</span> Sair</button></li>
        </ul>

        <div className="sidebar-footer text-center text-white mt-auto mb-2 small">
          Versão 1.0.0
        </div>
      </div>

      <nav className="custom-navbar d-flex justify-content-between align-items-center px-3">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="search-box flex-grow-1 mx-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar..."
          />
        </div>
        {/* Modificado para usar navigateTo('/profile') */}
        <div className="profile-icon" onClick={() => navigateTo('/profile')} style={{cursor: 'pointer'}}> 
          <img 
            src={userProfilePic} 
            alt="Profile" 
            style={{width: "32px", height: "32px", borderRadius: "50%", objectFit: 'cover', border: '1px solid white'}}
            onError={(e) => { e.target.onerror = null; e.target.src = logoDefault; }} // Fallback se a fotoURL falhar
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
