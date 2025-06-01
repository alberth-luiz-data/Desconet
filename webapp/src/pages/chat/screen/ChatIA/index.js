import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Modal,
  SafeAreaView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { useChat } from '../../hooks/useChat';
import MessageBubble from '../../components/MessageBubble';
import TypingIndicator from '../../components/TypingIndicator';
import EmojiSelector from '../../components/EmojiSelector';
import ChatBubble from '../../components/ChatBubble'; 
import { useAuth } from '../../../../contexts/AuthContext';

export default function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const flatListRef = useRef();
  const { currentUser } = useAuth();
  
  const { messages, isTyping, sendMessage } = useChat();

  const [localMessages] = useState([
    {
      id: 'welcome-message',
      sender: 'bot',
      text: 'Olá! Sou o Assistente Desconet. Como posso ajudá-lo hoje?',
      timestamp: Date.now(),
      isLocal: true
    }
  ]);

  const allMessages = [...localMessages, ...messages];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter' && !nativeEvent.shiftKey) {
      handleSendMessage();
    }
  };

  const handleEmojiSelected = (emoji) => {
    setInputMessage(prevMessage => prevMessage + emoji);
    setShowEmojiSelector(false);
  };

  const renderMessage = ({ item }) => (
    <ChatBubble
      message={item}
      isOwnMessage={item.sender === 'user'}
      showAvatar={true}
      avatar={
        item.sender === 'bot' 
          ? require('../../../../assets/img/Logo.png') 
          : (currentUser?.photoURL ? { uri: currentUser.photoURL } : null)
      }
    >
      <MessageBubble message={item} />
    </ChatBubble>
  );

  const renderFooter = () => {
    if (isTyping) {
      return (
        <ChatBubble
          message={{ sender: 'bot' }}
          isOwnMessage={false}
          showAvatar={true}
          avatar={require('../../../../assets/img/Logo.png')}
        >
          <View style={styles.typingIndicatorContent}>
            <Text style={styles.typingText}>Digitando</Text>
            <View style={styles.typingDots}>
              <View style={styles.typingDot} />
              <View style={styles.typingDot} />
              <View style={styles.typingDot} />
            </View>
          </View>
        </ChatBubble>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Assistente Desconet</Text>
          <Text style={styles.subHeader}>Chat com IA</Text>
        </View>

        <FlatList
          ref={flatListRef}
          data={allMessages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />

        {/* Input de digitação */}

        <View style={styles.inputArea}>
          <TouchableOpacity 
            style={styles.emojiButton}
            onPress={() => setShowEmojiSelector(true)}
          >
            <Feather name="smile" size={20} color="#64748b" />
          </TouchableOpacity>
          
          <TextInput
            style={styles.input}
            value={inputMessage}
            onChangeText={setInputMessage}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#999"
            multiline={true}
            maxLength={1000}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            blurOnSubmit={false}
            onSubmitEditing={handleSendMessage}
            onKeyPress={handleKeyPress}
          />
          
          <TouchableOpacity 
            style={[
              styles.sendButton,
              !inputMessage.trim() && styles.sendButtonDisabled
            ]} 
            onPress={handleSendMessage}
            disabled={!inputMessage.trim()}
          >
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showEmojiSelector}
          onRequestClose={() => setShowEmojiSelector(false)}
        >
          <View style={styles.emojiModalContainer}>
            <EmojiSelector
              onEmojiSelected={handleEmojiSelected}
              onClose={() => setShowEmojiSelector(false)}
            />
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}