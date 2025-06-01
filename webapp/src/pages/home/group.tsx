import React from 'react';
import styles from './style/group_style';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Comunidade">;

const { width } = Dimensions.get('window');

const groups = [
  {
    id: '1',
    name: 'Grupo da família',
    description: 'Saída ao cinema',
    lastMessage: 'Vamos no shopping às 19h?',
    members: 5,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    unread: 1,
  },
  {
    id: '2',
    name: 'Grupo da faculdade',
    description: 'Atividade em grupo',
    lastMessage: 'Enviei o PDF no e-mail!',
    members: 4,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    unread: 2,
  },
  {
    id: '3',
    name: 'Grupo de amigos',
    description: 'Passeio de skate',
    lastMessage: 'Partiu pista sábado?',
    members: 6,
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    unread: 1,
  },
  {
    id: '4',
    name: 'Grupo da academia',
    description: 'Treino da semana',
    lastMessage: 'Hoje é dia de perna! 🦵',
    members: 3,
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    unread: 2,
  },
  {
    id: '5',
    name: 'Grupo de leitura',
    description: 'Terminar Percy Jackson',
    lastMessage: 'Capítulo 8 foi muito bom!',
    members: 5,
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    unread: 1,
  },
];

export default function GroupScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.groupCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupDesc}>{item.description}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        <Text style={styles.memberCount}>{item.members} membros</Text>
      </View>
      <View style={styles.unreadBadge}>
        <Text style={styles.unreadText}>{item.unread}</Text>
      </View>
    </TouchableOpacity>
  );
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <FontAwesome name="bars" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grupos</Text>
      </View>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
     
    </View>
  );
}

