import React, { useState } from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../assets/react.svg"; // ajuste o caminho se necessário

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const userName = "Usuário"; 

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>

        {/* LOGO + Nome */}
        <div className="sidebar-header text-center my-3">
          <img src={logo} alt="Desconect Logo" className="logo-img" />
          <div className="user-info mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 14c5.33 0 8 2.667 8 4v2H4v-2c0-1.333 2.67-4 8-4z" />
            </svg>
            <span className="ms-2">{userName}</span>
          </div>
        </div>

        <ul className="menu-list">
          <li><a href="#"><span>🏠</span> Início</a></li>
          <li><a href="#"><span>💬</span> Conversas</a></li>
          <li><a href="#"><span>👥</span> Comunidade</a></li>
          <li><a href="#"><span>🙍‍♂️</span> Perfil</a></li>
        </ul>

        <hr className="mx-3 text-white" />

        <ul className="menu-list">
          {/* <li><a href="#"><span>⚙️</span> Configurações</a></li> */}
          <li><a href="#"><span>🚪</span> Sair</a></li>
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
        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
            <path d="M12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 14c5.33 0 8 2.667 8 4v2H4v-2c0-1.333 2.67-4 8-4z" />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
