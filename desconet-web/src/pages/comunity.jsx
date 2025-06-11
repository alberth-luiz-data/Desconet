import React, { useState } from "react";
import "../styles/community.css";
import Navbar from "../pages/components/Navbar";

const initialPosts = Array.from({ length: 5 }).map((_, i) => ({
  id: `${i + 1}`,
  user: "Conexão de verdade",
  username: "@conectV",
  message: `Postagem ${i + 1} sobre desconectar. ver mais`,
  category: i % 2 === 0 ? "Vida Offline" : "Dicas",
  avatar: `https://randomuser.me/api/portraits/women/${i + 1}.jpg`,
  likes: 0,
  shares: 0,
  comments: [],
  favorite: false,
  timestamp: new Date().toISOString(),
}));

const categories = ["Todos", "Vida Offline", "Dicas"];

export default function CommunityFeed() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [posts, setPosts] = useState(initialPosts);
  const [commentText, setCommentText] = useState("");
  const [commentingPost, setCommentingPost] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newPost, setNewPost] = useState({
    user: "Você",
    message: "",
    category: "Vida Offline",
  });

  const filtered =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const handleLike = (id) => {
    setPosts((p) =>
      p.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, comment) => {
    setPosts((p) =>
      p.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
    setCommentingPost(null);
    setCommentText("");
  };

  const handleFavorite = (id) => {
    setPosts((p) =>
      p.map((post) =>
        post.id === id ? { ...post, favorite: !post.favorite } : post
      )
    );
  };

  const handleCreatePost = () => {
    if (newPost.message) {
      const created = {
        ...newPost,
        id: String(posts.length + 1),
        username: "@voce",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
        likes: 0,
        shares: 0,
        comments: [],
        favorite: false,
        timestamp: new Date().toISOString(),
      };
      setPosts([created, ...posts]);
      setNewPost({ user: "Você", message: "", category: "Vida Offline" });
      setShowCreate(false);
    }
  };

  return (
    <div className="community-page">
      <Navbar />

      <div className="filter-row">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="post-list">
        {filtered.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.avatar} alt="avatar" className="avatar" />
              <div>
                <strong>{post.user}</strong> <span>{post.username}</span>
              </div>
            </div>
            <p>{post.message}</p>
            <div className="post-actions">
              <span onClick={() => handleLike(post.id)}>❤️ {post.likes}</span>
              <span>🔁 {post.shares}</span>
              <span>💬 {post.comments.length}</span>
              <button onClick={() => setCommentingPost(post.id)}>
                Comentar
              </button>
              <button onClick={() => handleFavorite(post.id)}>
                {post.favorite ? "⭐ Salvo" : "☆ Salvar"}
              </button>
            </div>
            {commentingPost === post.id && (
              <div className="comment-box">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Digite seu comentário..."
                />
                <button onClick={() => handleComment(post.id, commentText)}>
                  Enviar
                </button>
              </div>
            )}
            {post.comments.length > 0 && (
              <div className="comments">
                {post.comments.map((c, i) => (
                  <p key={i}>
                    <strong>@voce:</strong> {c}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showCreate && (
        <div className="modal">
          <div className="modal-content">
            <h3>Nova postagem</h3>
            <textarea
              rows={4}
              placeholder="Escreva algo para a comunidade..."
              value={newPost.message}
              onChange={(e) =>
                setNewPost({ ...newPost, message: e.target.value })
              }
            />
            <select
              value={newPost.category}
              onChange={(e) =>
                setNewPost({ ...newPost, category: e.target.value })
              }
            >
              <option value="Vida Offline">Vida Offline</option>
              <option value="Dicas">Dicas</option>
            </select>
            <button onClick={handleCreatePost}>Publicar</button>
            <button onClick={() => setShowCreate(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
