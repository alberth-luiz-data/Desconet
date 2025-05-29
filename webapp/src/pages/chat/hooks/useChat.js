import { useState, useCallback } from 'react';
import { sendMessageToN8N, getErrorMessage } from '../services/chatApi';
import { useAuth } from '../../../contexts/AuthContext';

export const useChat = () => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);

  const userName = currentUser?.displayName || "Usuário";
  const userId = currentUser?.uid || "anonymous";

  const sendMessage = useCallback(async (inputText) => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      text: inputText,
      sender: 'user',
      timestamp: Date.now(),
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    setIsTyping(true);

    try {
      const botResponseText = await sendMessageToN8N(inputText, sessionId, userName, userId);
      
      const botMessage = {
        id: `bot_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        text: typeof botResponseText === 'string' ? botResponseText : JSON.stringify(botResponseText),
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      
      const errorMessage = {
        id: `error_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        text: getErrorMessage(error),
        sender: 'bot',
        timestamp: Date.now(),
        isLocal: true,
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [sessionId, userName, userId]);

  return {
    messages,
    isTyping,
    sendMessage,
  };
};
