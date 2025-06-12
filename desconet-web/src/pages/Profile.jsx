import { useState } from "react";
import styles from "../styles/Profile.module.css";
import ImageUploading from "react-images-uploading";
import Desempenho from "./Desempenho";
import Tarefas from "./Tarefas";
import Compromisso from "./Compromisso";
import Post from "./Post";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState([]);
  const [wallpaperImage, setWallpaperImage] = useState([]);
  const [name, setName] = useState("Luizinho");
  const [username, setUsername] = useState("alberth-luiz");
  const [activeTab, setActiveTab] = useState("Tarefas");

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

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Wallpaper */}
        <div className={styles.headerImageWrapper}>
          <ImageUploading
            value={wallpaperImage}
            onChange={setWallpaperImage}
            dataURLKey="data_url"
            multiple={false}
          >
            {({ imageList, onImageUpload }) => (
              <div className={styles.wallpaperWrapper}>
                <img
                  src={imageList[0]?.data_url || "/Wallpaper.png"}
                  alt="Wallpaper"
                  className={styles.wallpaperImage}
                />
                {isEditing && (
                  <button
                    className={styles.wallpaperEditButton}
                    onClick={onImageUpload}
                  >
                    Trocar imagem
                  </button>
                )}
              </div>
            )}
          </ImageUploading>
        </div>

        {/* Conteúdo */}
        <div className={styles.contentWrapper}>
          <div className={styles.profileContainer}>
            {/* Imagem de perfil */}
            <ImageUploading
              value={profileImage}
              onChange={setProfileImage}
              dataURLKey="data_url"
              multiple={false}
            >
              {({ imageList, onImageUpload }) => (
                <div className={styles.profileImageWrapper}>
                  <img
                    src={imageList[0]?.data_url || "/Logo.png"}
                    alt="Profile"
                    className={styles.profilePicture}
                  />
                  {isEditing && (
                    <button
                      className={styles.profileEditButton}
                      onClick={onImageUpload}
                    >
                      Trocar
                    </button>
                  )}
                </div>
              )}
            </ImageUploading>

            {/* Nome e username */}
            <div className={styles.profileInfo}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
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
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? "Salvar alterações" : "Editar perfil"}
            </button>
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
