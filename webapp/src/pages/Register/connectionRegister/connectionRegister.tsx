import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes";
import Constants from "expo-constants";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles"



type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function ConnectionRegister() {
    const navigation = useNavigation<NavigationProp>();

    const [search, setSearch] = useState("");


  const data = [
  { id: "1", name: "Joana Bezerra", code: "123" },
  { id: "2", name: "Carlos Silva", code: "456" },
  { id: "3", name: "Maria Oliveira", code: "789" },
  { id: "4", name: "Pedro Souza", code: "001" },
  { id: "5", name: "Ana Lima", code: "002" },
  { id: "6", name: "Lucas Rocha", code: "003" },
  { id: "7", name: "Fernanda Gomes", code: "004" },
  { id: "8", name: "Ricardo Almeida", code: "005" },
  { id: "9", name: "Juliana Mendes", code: "006" },
  { id: "10", name: "Marcos Vinícius", code: "007" },
  ];

 const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>


      <View style={styles.searchContainer}>
        <Text style={styles.label}>Estabeleça uma conexão</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Codigo da conta da vitima ex:123"
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={setSearch}
          />
          <Feather name="search" size={20} color="#3B82F6" />
        </View>
      </View>
    { search === "" ? (
        
        <View/>

    ) : ( <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.code}>Cod:{item.code}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhum resultado encontrado.
          </Text>
        )}
      />
    )}
      <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("Login")}>
        <Feather name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

