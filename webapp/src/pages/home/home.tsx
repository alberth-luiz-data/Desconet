import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

import styles from "./style/home_style";
const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  
  const conexoes = [
    {
      id: 1,
      nome: "Ana",
      online: true,
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      nome: "Bruna",
      online: false,
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      nome: "Carla",
      online: false,
      img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      nome: "Duda",
      online: true,
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      nome: "Eva",
      online: true,
      img: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  const posts = [
    {
      id: 1,
      nome: "Conexão de verdade",
      usuario: "@conectEV",
      mensagem:
        "Ei, pessoal! A galera da Conexão de verdade está organizando uma tarde muito especial para você sair da rotina virtual. Ver mais",
    },
    {
      id: 2,
      nome: "Vida fora de tela",
      usuario: "@VFtela",
      mensagem:
        "Olá rede, o grupo da vida fora de tela está organizando uma corrida de 15km pelas ruas do Recife. Venham participar! Ver mais",
    },
  ];
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.topContainer}>
          <View style={styles.searchRow}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <TextInput
              placeholder="Busque novas conexões ou comunidades"
              placeholderTextColor="#ccc"
              style={styles.input}
            />
          </View>
          <Text style={styles.saudacao}>
            Olá, <Text style={styles.nome}>Luizinho</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.titulo}>Conexões</Text>
          <View style={styles.conexoes}>
            {conexoes.map((pessoa) => (
              <View key={pessoa.id} style={styles.conexaoItem}>
                <Image source={{ uri: pessoa.img }} style={styles.foto} />
                <View
                  style={[
                    styles.status,
                    { backgroundColor: pessoa.online ? "#22c55e" : "#ef4444" },
                  ]}
                />
              </View>
            ))}
          </View>

          <Text style={styles.titulo}>Dicas do dia</Text>
          {[
            "Faça um passeio com seu pet",
            "Leia um capítulo do seu livro",
            "Faça uma corrida matinal",
          ].map((dica, i) => (
            <TouchableOpacity key={i} style={styles.card}>
              <Text style={styles.cardTexto}>{dica}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.cardCinza}>
            <Text style={styles.cardCinzaTitulo}>
              Acompanhe seu tempo offline
            </Text>
            <Text style={styles.cardLink}>10 horas</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 32 }}>
            {posts.map((post) => (
              <View
                key={post.id}
                style={{ flexDirection: "row", marginBottom: 20 }}
              >
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/1.jpg",
                  }}
                  style={styles.fotoPost}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {post.nome}{" "}
                    <Text style={{ color: "#555" }}>{post.usuario}</Text>
                  </Text>
                  <Text style={{ color: "#333", marginTop: 4, fontSize: 13 }}>
                    {post.mensagem}
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 6, gap: 16 }}>
                    <Text style={{ fontSize: 12 }}>❤ 123</Text>
                    <Text style={{ fontSize: 12 }}>🔁 78</Text>
                    <Text style={{ fontSize: 12 }}>💬 19</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.iconeRowFixed}>
        <TouchableOpacity style={styles.iconeBotao}
        onPress={() => navigation.navigate("Comunidade")}>
          <FontAwesome name="users" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconeBotao}onPress={() => navigation.navigate("Grupo")}>
          <Text style={{ color: "white", fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconeBotao} onPress={() => navigation.navigate("Chat")}>
        
        <FontAwesome name="comment" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

