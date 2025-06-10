import axios from 'axios';

const API_CONFIG = {
  baseURL: 'https://desconet-n8n-webhook.go6msu.easypanel.host',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/plain',
    'Connection': 'keep-alive'
  },
  validateStatus: (status) => status >= 200 && status < 500
};

const WEBHOOK_ENDPOINT = '/webhook/b4699172-483c-46d5-a560-aa4ac22baa1e';

const api = axios.create(API_CONFIG);

// Função para gerar ID de usuário aleatório aleatório 
const generateUserId = () => {
  return 'user_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

// Função para gerar ID de sessão aleatório tbm
const generateSessionId = () => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

api.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Erro:', error.message);
    return Promise.reject(error);
  }
);

export const sendMessageToN8N = async (message, sessionId, userName = "Will", userId, isInitial = false) => {
  const requestData = {
    name: userName,
    userId: userId || generateUserId(),
    message: isInitial ? "inicio" : message,
    timestamp: new Date().toISOString(),
    sessionID: sessionId || generateSessionId()
  };

  const response = await api.post(WEBHOOK_ENDPOINT, requestData);
  
  if (!response.data) {
    throw new Error('Resposta vazia do servidor');
  }
  
  return response.data;
};

export const getErrorMessage = (error) => {
  const errorMessages = {
    'ECONNABORTED': "Timeout - O servidor demorou para responder",
    'NETWORK_ERROR': "Erro de conexão - Verifique sua internet",
    '404': "Serviço não encontrado",
    '500': "Erro interno do servidor"
  };

  if (axios.isAxiosError(error)) {
    return errorMessages[error.code] || 
           errorMessages[error.response?.status] || 
           "Algo deu errado. Tente novamente.";
  }
  
  return "Algo deu errado. Tente novamente.";
};

export { generateUserId, generateSessionId };
