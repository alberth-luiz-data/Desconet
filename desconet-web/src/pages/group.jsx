// Estrutura inicial para implementação de funcionalidades inteligentes e interativas na tela de grupos
import React, { useState } from "react";
import "../styles/group.css";
import { FaBars, FaStar, FaBell, FaSearch, FaPlus } from "react-icons/fa";

const initialGroups = [
  {
    id: "1",
    name: "Grupo da família",
    description: "Saída ao cinema",
    lastMessage: "Vamos no shopping às 19h?",
    members: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    unread: 1,
    favorite: false,
    notify: true,
  },
  {
    id: "2",
    name: "Grupo da faculdade",
    description: "Atividade em grupo",
    lastMessage: "Enviei o PDF no e-mail!",
    members: 4,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    unread: 2,
    favorite: false,
    notify: true,
  },
];

export default function GroupScreen() {
  const [groups, setGroups] = useState(initialGroups);
  const [search, setSearch] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: "", description: "" });

  const toggleFavorite = (id) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, favorite: !g.favorite } : g
      )
    );
  };

  const toggleNotify = (id) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, notify: !g.notify } : g
      )
    );
  };

  const filteredGroups = groups.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateGroup = () => {
    if (newGroup.name) {
      setGroups([
        ...groups,
        {
          ...newGroup,
          id: String(groups.length + 1),
          avatar: "https://randomuser.me/api/portraits/women/6.jpg",
          members: 1,
          lastMessage: "Novo grupo criado",
          unread: 0,
          favorite: false,
          notify: true,
        },
      ]);
      setNewGroup({ name: "", description: "" });
      setShowCreateModal(false);
    }
  };

  return (
    <div className="group-page">
      <header className="group-header">
        <button className="group-menu-btn">
          <FaBars size={20} color="#fff" />
        </button>
        <h2 className="group-title">Grupos</h2>
        <button onClick={() => setShowCreateModal(true)} className="group-create-btn">
          <FaPlus size={16} color="#fff" />
        </button>
      </header>

      <div className="group-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Buscar grupo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="group-list">
        {filteredGroups.map((group) => (
          <div className="group-card" key={group.id}>
            <img src={group.avatar} alt="avatar" className="group-avatar" />
            <div className="group-info">
              <h3 className="group-name">{group.name}</h3>
              <p className="group-desc">{group.description}</p>
              <p className="group-last">{group.lastMessage}</p>
              <span className="group-members">{group.members} membros</span>
            </div>
            <div className="group-actions">
              <button onClick={() => toggleFavorite(group.id)}>
                <FaStar color={group.favorite ? "#facc15" : "#cbd5e1"} />
              </button>
              <button onClick={() => toggleNotify(group.id)}>
                <FaBell color={group.notify ? "#60a5fa" : "#cbd5e1"} />
              </button>
              {group.unread > 0 && <span className="group-unread">{group.unread}</span>}
            </div>
          </div>
        ))}
      </div>

      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Criar novo grupo</h3>
            <input
              type="text"
              placeholder="Nome do grupo"
              value={newGroup.name}
              onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
            />
            <textarea
              placeholder="Descrição"
              value={newGroup.description}
              onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
            />
            <button onClick={handleCreateGroup}>Criar</button>
            <button onClick={() => setShowCreateModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
