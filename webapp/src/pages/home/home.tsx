import React, { useRef } from "react";
import styles from "./style/home_style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import CustomHeader, { HeaderHandle } from "../components/headerCustom";
import { useAuth } from "../../contexts/AuthContext";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const { currentUser } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  const headerRef = useRef<HeaderHandle>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    headerRef.current?.onScroll(scrollY);
  };

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

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader ref={headerRef} />

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, { paddingTop: 60 }]} // espaço para o Header
        onScroll={handleScroll}
        scrollEventThrottle={16}
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
            Olá,{" "}
            <Text style={styles.nome}>
              {currentUser?.displayName || "Usuário"}
            </Text>
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
      </Animated.ScrollView>
    </View>
  );
}
