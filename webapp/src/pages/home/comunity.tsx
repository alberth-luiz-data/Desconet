import React, { useState } from 'react';
import styles from './style/comunity_style';

import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

const { width } = Dimensions.get('window');
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Comunidade">;


const allPosts = [
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 1}`,
    user: 'Conexão de verdade',
    username: '@conectV',
    message: `Postagem ${i + 1} sobre desconectar e se reconectar com a vida real. ver mais`,
    category: 'Vida Offline',
    avatar: `https://randomuser.me/api/portraits/women/${(i % 10) + 1}.jpg`,
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 11}`,
    user: 'Dicas Desconet',
    username: '@desconetdicas',
    message: `Dica ${i + 1}: 5 ideias para curtir a semana sem celular. ver mais`,
    category: 'Dicas',
    avatar: `https://randomuser.me/api/portraits/men/${(i % 10) + 1}.jpg`,
  })),
];

const categories = ['Todos', 'Vida Offline', 'Dicas'];

export default function CommunityFeedEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [commentingPost, setCommentingPost] = useState(null);
  const [commentText, setCommentText] = useState('');

  const filteredPosts =
    selectedCategory === 'Todos'
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.user}>
          <Text style={{ fontWeight: 'bold' }}>{item.user}</Text> {item.username}
        </Text>
      </View>
      <Text style={styles.message}>{item.message}</Text>
      <View style={styles.actionsRow}>
        <Text style={styles.actionIcon}>❤️ 120</Text>
        <Text style={styles.actionIcon}>🔁 10</Text>
        <Text style={styles.actionIcon}>💬 6</Text>
        <TouchableOpacity onPress={() => setCommentingPost(item.id)}>
          <Text style={styles.actionIcon}>💬 Comentar</Text>
        </TouchableOpacity>
      </View>
      {commentingPost === item.id && (
        <View style={styles.commentBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu comentário..."
            value={commentText}
            onChangeText={setCommentText}
          />
          <TouchableOpacity onPress={() => {
            console.log('Comentou:', commentText);
            setCommentText('');
            setCommentingPost(null);
          }}>
            <Text style={styles.sendBtn}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <FontAwesome name="bars" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comunidade desconet</Text>
      </View>

      <View style={styles.filterRow}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.filterButton,
              selectedCategory === cat && styles.filterButtonActive,
            ]}>
            <Text
              style={{
                color: selectedCategory === cat ? 'white' : '#3b82f6',
                fontWeight: 'bold',
              }}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

