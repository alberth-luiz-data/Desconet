import React, { useState } from "react";
import "../styles/community.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaStar, FaBell, FaSearch, FaPlus, FaUsers, FaUser, FaThumbsUp, FaComment } from "react-icons/fa";

const initialCommunities = [
  {
    id: "1",
    name: "Desconectando Juntos",
    description: "Compartilhe dicas e histórias sobre como desconectar da tecnologia!",
    lastMessage: "Qual foi a melhor atividade offline que você já fez?",
    members: 30,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    unread: 1,
    favorite: false,
    notify: true,
    posts: [
      {
        id: "p1",
        title: "Desconectando do celular por um dia!",
        content: "Passei um dia sem celular e foi incrível! Recomendo todos a tentarem.",
        likes: 10,
        comments: [
          { id: "c1", user: "João", comment: "Muito interessante! Vou tentar também." },
          { id: "c2", user: "Maria", comment: "Eu já fiz isso, é libertador!" },
        ],
      },
      {
        id: "p2",
        title: "Como fazer uma caminhada ao ar livre sem interrupções",
        content: "Tirei um dia para caminhar sem olhar para o celular. A natureza é revigorante.",
        likes: 5,
        comments: [
          { id: "c3", user: "Ana", comment: "Preciso tentar isso!" },
        ],
      },
    ],
    type: "community"
  },
  {
    id: "2",
    name: "Off-Line Livre",
    description: "Encontre atividades para desconectar da rotina digital.",
    lastMessage: "A próxima atividade offline será uma noite de jogos de tabuleiro!",
    members: 25,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    unread: 2,
    favorite: false,
    notify: true,
    posts: [
      {
        id: "p3",
        title: "Noite sem internet: O desafio!",
        content: "Passamos uma noite sem internet e a experiência foi surreal.",
        likes: 8,
        comments: [
          { id: "c4", user: "Carlos", comment: "Eu adoraria participar da próxima!" },
        ],
      },
    ],
    type: "community"
  },
  {
    id: "3",
    name: "Desintoxicação Digital",
    description: "Compartilhe sua jornada de desintoxicação da internet.",
    lastMessage: "Quem está pronto para o desafio de 48 horas offline?",
    members: 15,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    unread: 0,
    favorite: false,
    notify: true,
    posts: [
      {
        id: "p4",
        title: "Desafio: 48 horas offline",
        content: "Quem topa fazer um desafio de 48 horas sem redes sociais?",
        likes: 12,
        comments: [
          { id: "c5", user: "Fernanda", comment: "Desafio aceito!" },
        ],
      },
    ],
    type: "community"
  },
];

export default function CommunityScreen() {
  const [communities, setCommunities] = useState(initialCommunities);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("community"); // "community"
  const [newComment, setNewComment] = useState(""); // State for new comment input
  const [commentPosted, setCommentPosted] = useState(false); // State to handle comment post
  const navigate = useNavigate();


  const filteredList = communities.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {
    setCommunities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const handleLikePost = (communityId, postId) => {
    setCommunities((prev) =>
      prev.map((community) =>
        community.id === communityId
          ? {
              ...community,
              posts: community.posts.map((post) =>
                post.id === postId ? { ...post, likes: post.likes + 1 } : post
              ),
            }
          : community
      )
    );
  };

  const handleCommentPost = (communityId, postId) => {
    if (newComment.trim()) {
      setCommunities((prev) =>
        prev.map((community) =>
          community.id === communityId
            ? {
                ...community,
                posts: community.posts.map((post) =>
                  post.id === postId
                    ? {
                        ...post,
                        comments: [
                          ...post.comments,
                          { id: String(post.comments.length + 1), user: "Você", comment: newComment },
                        ],
                      }
                    : post
                ),
              }
            : community
        )
      );
      setNewComment(""); // Reset the input after commenting
      setCommentPosted(true); // Mark as posted
    }
  };

  return (
    <div className="community-page" style={{
      WebkitOverflowScrolling: 'touch',
      touchAction: 'pan-y'
    }}>
      <header className="community-header">
        <button onClick={() => navigate("../../home")}
          className="community-menu-btn">
          <FaArrowLeft size={20} color="#fff" />
        </button>
        <h2 className="community-title"></h2>
      </header>

      <div className="chat-tabs">
        <button
          className={activeTab === "community" ? "active" : ""}
          onClick={() => setActiveTab("community")}
        >
          <FaUsers /> Comunidades
        </button>
      </div>

      <div className="community-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Buscar comunidade..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="community-list">
        {filteredList.map((community) => (
          <div className="community-card" key={community.id}>
            <img src={community.avatar} alt="avatar" className="community-avatar" />
            <div className="community-info">
              <h3 className="community-name">{community.name}</h3>
              <p className="community-desc">{community.description}</p>
              <span className="community-members">{community.members} membros</span>
            </div>
            <div className="community-actions">
              <button 
                onClick={() => toggleFavorite(community.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaStar 
                  size={20}
                  color={community.favorite ? "#facc15" : "#cbd5e1"} 
                  style={{
                    transition: 'color 0.2s ease'
                  }}
                />
              </button>
            </div>
            <div className="community-posts">
              {community.posts.map((post) => (
                <div className="community-post" key={post.id}>
                  <h4 className="post-title">{post.title}</h4>
                  <p className="post-content">{post.content}</p>
                  <div className="post-actions">
                    <button onClick={() => handleLikePost(community.id, post.id)}>
                      <FaThumbsUp /> {post.likes} Likes
                    </button>
                    <button onClick={() => handleCommentPost(community.id, post.id)}>
                      <FaComment /> {post.comments.length} Comentários
                    </button>
                  </div>
                  <div className="comments-section">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="comment">
                        <strong>{comment.user}: </strong>
                        <span>{comment.comment}</span>
                      </div>
                    ))}
                    <div className="comment-input">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Adicione um comentário..."
                      />
                      <button
                        className="comment-submit"
                        onClick={() => handleCommentPost(community.id, post.id)}
                      >
                        Enviar
                      </button>
                    </div>
                    {commentPosted && <div className="comment-confirmation">Comentário enviado!</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
