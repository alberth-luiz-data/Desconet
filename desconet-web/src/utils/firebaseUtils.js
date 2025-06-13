import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { storage, db } from "../firebaseConfig"; // Certifique-se que este caminho está correto

/**
 * Faz upload de um arquivo para o Firebase Storage e retorna a URL de download.
 * @param {File} file - O arquivo a ser enviado.
 * @param {string} path - O caminho no Firebase Storage onde o arquivo será salvo (ex: `user_photos/${userId}/profile.jpg`).
 * @returns {Promise<string>} A URL de download do arquivo.
 */
export const uploadImageAndGetURL = async (file, path) => {
  if (!file) throw new Error("Nenhum arquivo fornecido para upload.");
  if (!path) throw new Error("Nenhum caminho de destino fornecido para upload.");

  const storageRef = ref(storage, path);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    throw error; // Re-throw para que o chamador possa lidar com isso
  }
};

/**
 * Atualiza a URL da foto de perfil do usuário no Firestore.
 * @param {string} userId - O UID do usuário.
 * @param {string} photoURL - A nova URL da foto de perfil.
 */
export const updateUserProfileImageInFirestore = async (userId, photoURL) => {
  if (!userId) throw new Error("UID do usuário não fornecido para atualizar foto de perfil.");
  const userDocRef = doc(db, "usuarios", userId); // Assumindo que o ID do documento é o UID do usuário
  try {
    await updateDoc(userDocRef, {
      photoURL: photoURL, // Certifique-se que este é o nome do campo no seu Firestore
    });
  } catch (error) {
    console.error("Erro ao atualizar foto de perfil no Firestore:", error);
    throw error;
  }
};

/**
 * Atualiza a URL da foto de capa do usuário no Firestore.
 * @param {string} userId - O UID do usuário.
 * @param {string} coverPhotoURL - A nova URL da foto de capa.
 */
export const updateUserCoverImageInFirestore = async (userId, coverPhotoURL) => {
  if (!userId) throw new Error("UID do usuário não fornecido para atualizar foto de capa.");
  const userDocRef = doc(db, "usuarios", userId); // Assumindo que o ID do documento é o UID do usuário
  try {
    await updateDoc(userDocRef, {
      coverPhotoURL: coverPhotoURL, // Certifique-se que este é o nome do campo no seu Firestore
    });
  } catch (error) {
    console.error("Erro ao atualizar foto de capa no Firestore:", error);
    throw error;
  }
};

/**
 * Atualiza detalhes do perfil do usuário (nome, username) no Firestore.
 * @param {string} userIdentifier - O ID do documento do usuário no Firestore.
 * @param {object} details - Objeto contendo os detalhes a serem atualizados (ex: { nome: "Novo Nome", username: "novouser" }).
 */
export const updateUserProfileDetailsInFirestore = async (userIdentifier, details) => {
  if (!userIdentifier) throw new Error("ID do documento do usuário não fornecido para atualizar detalhes do perfil.");
  if (!details || Object.keys(details).length === 0) {
    console.warn("Nenhum detalhe fornecido para atualização.");
    return;
  }
  const userDocRef = doc(db, "usuarios", userIdentifier);
  try {
    await updateDoc(userDocRef, details);
  } catch (error) {
    console.error("Erro ao atualizar detalhes do perfil no Firestore:", error);
    throw error;
  }
};
