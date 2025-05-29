export const createMessage = (text, isOutgoing = false) => ({
  id: `msg-${Date.now()}-${Math.random()}`,
  text,
  isOutgoing,
  timestamp: new Date().toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
});

export const generateSessionId = () => {
  return `sid-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
};
