import React, { useState } from 'react';
import styles from './style/chat_style';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export default function GroupChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'Ana',
      text: 'Oi pessoal! Tudo pronto para o passeio?',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
      timestamp: formatTime(new Date())
    },
    {
      id: '2',
      sender: 'Luizinho',
      text: 'Sim! Saímos às 15h?',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      timestamp: formatTime(new Date())
    },
    {
      id: '3',
      sender: 'Clara',
      text: 'Perfeito! Já estou animada 😄',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      timestamp: formatTime(new Date())
    },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMsg = {
      id: String(Date.now()),
      sender: 'Você',
      text: input.trim(),
      avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
      timestamp: formatTime(new Date())
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Grupo da família</Text>
        <Text style={styles.subHeader}>Passeio ao cinema</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageWrapper,
              item.sender === 'Você' ? styles.sentAlign : styles.receivedAlign,
            ]}>
            {item.sender !== 'Você' && (
              <Image source={{ uri: item.avatar }} style={styles.avatarTop} />
            )}
            <View
              style={[
                styles.messageContainer,
                item.sender === 'Você' ? styles.sent : styles.received,
              ]}>
              <Text style={styles.sender}>{item.sender}:</Text>
              <Text>{item.text}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            {item.sender === 'Você' && (
              <Image source={{ uri: item.avatar }} style={styles.avatarTop} />
            )}
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.inputArea}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{ color: 'white' }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

