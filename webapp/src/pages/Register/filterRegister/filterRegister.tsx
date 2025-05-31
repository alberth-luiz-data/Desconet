import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { useState } from "react";
import { RootStackParamList } from "../../../routes";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";



type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function FilterRegister() {
  const items: string[] = [
    "Academia",
    "Filmes",
    "Yoga",
    "Séries",
    "Corrida",
    "Bicicleta",
    "Parques",
    "Futebol",
    "Cinema",
    "Música",
    "Dança",
    "Animais",
    "Caminhada",
    "Comer",
    "Shows",
    "Bares",
  ];

  const [selected, setSelected] = useState<string[]>([]);

const toggleSelect = (item: string) => {
  if (selected.includes(item)) {
    setSelected(selected.filter((i) => i !== item));
  } else if (selected.length < 5) {
    setSelected([...selected, item]);
  }
};

const handleNext = () => {
  if (selected.length < 5) {
    Alert.alert("Por favor, selecione 5 atividades para continuar.");
    return;
  }

  navigation.navigate("Login"); 
};

  

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1}}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastro</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.container}>
        <Text style={styles.title}>
          Me conte mais sobre as atividades que você gosta.
        </Text>

          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{selected.length}/5 selecionados</Text>
          </View>
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={(item) => item}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.chip,
                selected.includes(item) && styles.chipSelected,
              ]}
              onPress={() => toggleSelect(item)}
            >
              <Text
                style={[
                  styles.chipText,
                  selected.includes(item) && styles.chipTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleNext}>
          <View style={styles.nextButton}>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
