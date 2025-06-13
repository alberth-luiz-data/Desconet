import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/group.css";
import { FaArrowLeft, FaStar, FaBell, FaSearch, FaPlus, FaUsers, FaUser } from "react-icons/fa";

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
    type: "group"
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
    type: "group"
  },
];

const initialConversations = [
  {
    id: "c1",
    name: "João Silva",
    description: "Online agora",
    lastMessage: "Vamos conversar mais tarde?",
    members: 2,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    unread: 0,
    favorite: false,
    notify: true,
    type: "chat"
  },
  {
    id: "c2",
    name: "Maria Souza",
    description: "Última vez online: 10h",
    lastMessage: "Ok, obrigada!",
    members: 2,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    unread: 3,
    favorite: true,
    notify: true,
    type: "chat"
  },
];

export default function ChatScreen() {
  const [groups, setGroups] = useState(initialGroups);
  const [conversations, setConversations] = useState(initialConversations);
  const [search, setSearch] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: "", description: "" });
  const [activeTab, setActiveTab] = useState("group");
  const navigate = useNavigate();

  const toggleFavorite = (id, type) => {
    const update = (list, setList) =>
      setList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, favorite: !item.favorite } : item
        )
      );

    type === "group"
      ? update(groups, setGroups)
      : update(conversations, setConversations);
  };

  const toggleNotify = (id, type) => {
    const update = (list, setList) =>
      setList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, notify: !item.notify } : item
        )
      );

    type === "group"
      ? update(groups, setGroups)
      : update(conversations, setConversations);
  };

  const filteredList = (activeTab === "group" ? groups : conversations).filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateGroup = () => {
    if (newGroup.name) {
      setGroups([
        ...groups,
        {
          ...newGroup,
          id: String(groups.length + 1),
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          members: 1,
          lastMessage: "Novo grupo criado",
          unread: 0,
          favorite: false,
          notify: true,
          type: "group"
        },
      ]);
      setNewGroup({ name: "", description: "" });
      setShowCreateModal(false);
    }
  };

  return (
    <div className="group-page">
      <header className="group-header">
        <button onClick={() => navigate(-1)} className="group-menu-btn">
          <FaArrowLeft size={20} color="#fff" />
        </button>
        <h2 className="group-title">Conversas</h2>
        {activeTab === "group" && (
          <button onClick={() => setShowCreateModal(true)} className="group-create-btn">
            <FaPlus size={16} color="#fff" />
          </button>
        )}
      </header>

      <div className="chat-tabs">
        <button
          className={activeTab === "group" ? "active" : ""}
          onClick={() => setActiveTab("group")}
        >
          <FaUsers /> Grupos
        </button>
        <button
          className={activeTab === "chat" ? "active" : ""}
          onClick={() => setActiveTab("chat")}
        >
          <FaUser /> Conversas
        </button>
      </div>

      <div className="group-search">
        <FaSearch />
        <input
          type="text"
          placeholder={`Buscar ${activeTab === "group" ? "grupo" : "conversa"}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="group-list">
        {filteredList.map((item) => (
          <div
            className="group-card"
            key={item.id}
            onClick={() => navigate(item.type === "group" ? "/chatGroup" : "/chat")}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.avatar} alt="avatar" className="group-avatar" />
            <div className="group-info">
              <h3 className="group-name">{item.name}</h3>
              <p className="group-desc">{item.description}</p>
              <p className="group-last">{item.lastMessage}</p>
              <span className="group-members">{item.members} membros</span>
            </div>
            <div className="group-actions">
              <button onClick={() => toggleFavorite(item.id, item.type)}>
                <FaStar color={item.favorite ? "#facc15" : "#cbd5e1"} />
              </button>
              <button onClick={() => toggleNotify(item.id, item.type)}>
                <FaBell color={item.notify ? "#60a5fa" : "#cbd5e1"} />
              </button>
              {item.unread > 0 && <span className="group-unread">{item.unread}</span>}
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
