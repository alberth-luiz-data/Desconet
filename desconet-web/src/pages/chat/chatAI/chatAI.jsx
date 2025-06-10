import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSend } from 'react-icons/md';
import { sendMessageToN8N, getErrorMessage, generateUserId, generateSessionId } from '../../../services/apiAI';
import { styles } from './styles';

const ChatAI = () => {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionId] = useState(() => generateSessionId());
  const [userId] = useState(() => generateUserId());
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    
    initializeChat();
  }, []);
  
  const initializeChat = async () => {
    try {
      setIsLoading(true);
      const response = await sendMessageToN8N('', sessionId, 'Will', userId, true);
      
      setMessages([{
        id: Date.now(),
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError('');
    
    try {
      const response = await sendMessageToN8N(inputMessage, sessionId, 'Will', userId, false);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={() => navigate('/')}
          title="Voltar"
        >
          <MdArrowBack />
        </button>
        <h1 style={styles.headerTitle}>Chat AI - Desconet</h1>
      </div>
      
      <div style={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              ...styles.message,
              ...(message.isUser ? styles.userMessage : styles.botMessage)
            }}
          >
            <div>{message.text}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem' }}>
              {message.timestamp}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div style={styles.loadingMessage}>
            Digitando...
          </div>
        )}
        
        {error && (
          <div style={styles.errorMessage}>
            {error}
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          style={styles.input}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isLoading}
          style={{
            ...styles.sendButton,
            ...((!inputMessage.trim() || isLoading) ? styles.sendButtonDisabled : {})
          }}
        >
          <MdSend size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatAI;
