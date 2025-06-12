/**
 * Salva os dados do usuário no localStorage.
 * Remove quaisquer dados de usuário existentes antes de salvar os novos.
 * @param {object} userData - Os dados do usuário a serem salvos.
 */
export const saveUserToLocalStorage = (userData) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    // Remove dados antigos para garantir que estamos sempre com os mais recentes
    localStorage.removeItem('currentUserData');
    localStorage.removeItem('uid'); // Mantendo a remoção do 'uid' separadamente por consistência

    if (userData) {
      localStorage.setItem('currentUserData', JSON.stringify(userData));
      if (userData.uid) {
        localStorage.setItem('uid', userData.uid);
      }
    }
  } else {
    console.warn('localStorage não está disponível.');
  }
};

/**
 * Limpa os dados do usuário do localStorage.
 */
export const clearUserFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem('currentUserData');
    localStorage.removeItem('uid');
  } else {
    console.warn('localStorage não está disponível.');
  }
};

/**
 * Obtém os dados do usuário do localStorage.
 * @returns {object|null} Os dados do usuário ou null se não encontrados.
 */
export const getUserFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const userDataString = localStorage.getItem('currentUserData');
    if (userDataString) {
      try {
        return JSON.parse(userDataString);
      } catch (error) {
        console.error('Erro ao parsear dados do usuário do localStorage:', error);
        clearUserFromLocalStorage(); // Limpa dados inválidos
        return null;
      }
    }
  } else {
    console.warn('localStorage não está disponível.');
  }
  return null;
};
