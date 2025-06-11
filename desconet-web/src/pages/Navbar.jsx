import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar redesigned-navbar">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <div className="search-container">
          <input
            type="text"
            className="search-field"
            placeholder="Busque novas conexões ou comunidades"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">
            <FaSearch size={14} />
          </button>
        </div>

        <button
          className="profile-button"
          onClick={() => handleNavigate("/profile")}
        >
          <FaUserCircle size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="drawer">
          {[
            { label: "Home", path: "/" },
            { label: "Perfil", path: "/profile" },
            { label: "Tela Família", path: "/family" },
            { label: "Chat IA", path: "/ia" },
            { label: "Chat", path: "/chat" },
            { label: "Grupos", path: "/group" },
            { label: "Vítima", path: "/victim" },
            { label: "Desafios", path: "/desafios" },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className="drawer-item"
            >
              * {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
