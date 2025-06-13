import React, { useState, useEffect } from "react";
import styles from "../styles/Profile.module.css";
// ImageUploading será substituído por inputs de arquivo manuais para melhor controle com Firebase
// import ImageUploading from "react-images-uploading"; 
import Desempenho from "./Desempenho";
import Tarefas from "./Tarefas";
import Compromisso from "./Compromisso";
import Post from "./Post";
import { useAuth } from "../contexts/AuthContext"; // Ajuste o caminho se necessário
import { useNavigate } from "react-router-dom";
import {
  uploadImageAndGetURL,
  updateUserProfileImageInFirestore,
  updateUserCoverImageInFirestore,
  updateUserProfileDetailsInFirestore,
} from "../utils/firebaseUtils"; // Ajuste o caminho se necessário

// Defina caminhos para imagens padrão ou use strings de URL diretamente
const defaultAvatarSrc = "/Logo.png"; 
const defaultCoverSrc = "/assets/capa.png"; // Caminho atualizado para a nova imagem de capa padrão

export default function Profile() {
  const { currentUser, refreshCurrentUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  
  // Estados para os arquivos selecionados
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);

  // Estados para as URLs das imagens exibidas
  const [displayProfileImage, setDisplayProfileImage] = useState(defaultAvatarSrc);
  const [displayCoverImage, setDisplayCoverImage] = useState(defaultCoverSrc);
  
  // Estados para os dados do perfil editáveis
  const [name, setName] = useState(""); // Removido valor inicial "Luizinho"
  const [username, setUsername] = useState(""); // Removido valor inicial "alberth-luiz"
  
  const [activeTab, setActiveTab] = useState("Tarefas");
  
  // Estados para feedback de upload/salvamento
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!authLoading && currentUser) {
      setName(currentUser.nome || "");
      setUsername(currentUser.username || "");
      setDisplayProfileImage(currentUser.photoURL || defaultAvatarSrc);
      setDisplayCoverImage(currentUser.coverPhotoURL || defaultCoverSrc);
    } else if (!authLoading && !currentUser) {
      navigate("/login"); // Redireciona se não estiver logado e o carregamento terminou
    }
  }, [currentUser, authLoading, navigate]);

  const handleFileChange = (setter, displaySetter) => (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setter(file);
      if (displaySetter) { // Opcional: preview local imediato
        const reader = new FileReader();
        reader.onloadend = () => {
          displaySetter(reader.result);
        };
        reader.readAsDataURL(file);
      }
      setError("");
      setSuccessMessage("");
    }
  };

  const handleSaveChanges = async () => {
    if (!currentUser) {
      setError("Usuário não autenticado.");
      return;
    }
    setIsProcessing(true);
    setError("");
    setSuccessMessage("");

    try {
      const userIdentifier = currentUser.docId || currentUser.uid; 
      if (!userIdentifier) {
        throw new Error("Identificador do usuário (docId ou uid) não encontrado no currentUser.");
      }

      const detailsToUpdate = {};
      // Verifica se o nome foi alterado antes de adicionar ao objeto de atualização
      if (name !== (currentUser.nome || "")) {
        detailsToUpdate.nome = name;
      }
      // Verifica se o username foi alterado
      if (username !== (currentUser.username || "")) {
        detailsToUpdate.username = username; // Certifique-se que o campo é 'username' no Firestore
      }

      if (Object.keys(detailsToUpdate).length > 0) {
        await updateUserProfileDetailsInFirestore(userIdentifier, detailsToUpdate);
      }

      if (profileImageFile) {
        const profileImagePath = `user_photos/${currentUser.uid}/profile_${Date.now()}_${profileImageFile.name}`;
        const downloadURL = await uploadImageAndGetURL(profileImageFile, profileImagePath);
        await updateUserProfileImageInFirestore(userIdentifier, downloadURL);
        setProfileImageFile(null); // Limpa o arquivo selecionado
      }

      if (coverImageFile) {
        const coverImagePath = `user_photos/${currentUser.uid}/cover_${Date.now()}_${coverImageFile.name}`;
        const downloadURL = await uploadImageAndGetURL(coverImageFile, coverImagePath);
        await updateUserCoverImageInFirestore(userIdentifier, downloadURL);
        setCoverImageFile(null); // Limpa o arquivo selecionado
      }

      await refreshCurrentUser(); // Recarrega os dados do usuário no contexto
      setSuccessMessage("Perfil atualizado com sucesso!");
      setIsEditing(false);
    } catch (err) {
      console.error("Erro ao salvar alterações:", err);
      setError(`Falha ao salvar alterações: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Tarefas":
        return (
          <div className={styles.tabContent}><Tarefas/></div>
        );
      case "Desempenho":
        return <div className={styles.tabContent}><Desempenho/></div>;
      case "Post":
        return <div className={styles.tabContent}><Post/></div>;
      case "Compromissos":
        return <div className={styles.tabContent}><Compromisso/></div>;
      default:
        return null;
    }
  };

  if (authLoading) {
    return <div className={styles.loadingState}>Carregando perfil...</div>; // Adicione uma classe para estilizar
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Wallpaper */}
        <div className={styles.headerImageWrapper}>
          <img
            src={displayCoverImage}
            alt="Wallpaper"
            className={styles.wallpaperImage}
          />
          {isEditing && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange(setCoverImageFile, setDisplayCoverImage)}
                id="wallpaper-upload-input"
                style={{ display: "none" }}
              />
              <label htmlFor="wallpaper-upload-input" className={styles.wallpaperEditButton}>
                Trocar imagem
              </label>
            </>
          )}
        </div>

        {/* Conteúdo */}
        <div className={styles.contentWrapper}>
          <div className={styles.profileContainer}>
            {/* Imagem de perfil */}
            <div className={styles.profileImageWrapper}>
              <img
                src={displayProfileImage}
                alt="Profile"
                className={styles.profilePicture}
              />
              {isEditing && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(setProfileImageFile, setDisplayProfileImage)}
                    id="profile-image-upload-input"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="profile-image-upload-input" className={styles.profileEditButton}>
                    Trocar
                  </label>
                </>
              )}
            </div>

            {/* Nome e username */}
            <div className={styles.profileInfo}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    placeholder="Nome"
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    placeholder="Nome de usuário"
                  />
                </>
              ) : (
                <>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.username}>@{username}</p>
                </>
              )}
              <p className={styles.performance}>Desempenho atual</p>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "60%" }}></div>
              </div>
              <div className={styles.statsRow}>
                <p>Conexões: 32</p>
                <p>Grupos: 5</p>
              </div>
            </div>

            {/* Botão Editar Perfil */}
            <button
              className={styles.editButton}
              onClick={() => {
                if (isEditing) {
                  handleSaveChanges();
                } else {
                  setIsEditing(true);
                  // Garante que os campos de edição reflitam os dados atuais ao entrar no modo de edição
                  if (currentUser) {
                    setName(currentUser.nome || "");
                    setUsername(currentUser.username || "");
                  }
                  setError(""); 
                  setSuccessMessage("");
                }
              }}
              disabled={isProcessing}
            >
              {isEditing ? (isProcessing ? "Salvando..." : "Salvar alterações") : "Editar perfil"}
            </button>
            {error && <p className={styles.errorMessage}>{error}</p>}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          </div>

          {/* Abas */}
          <div className={styles.tabsWrapper}>
            {['Tarefas', 'Desempenho', 'Post', 'Compromissos'].map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab ? styles.activeTabButton : styles.tabButton
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Conteúdo da aba */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
