import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RootStackParamList } from "../../../routes";
import styles from "./styles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;



export default function SearchRegister() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Ajudar um familiar ou amigo", value: "ajudar" },
    { label: "Me desconectar", value: "me_desconectar" },
    { label: "Buscar informações", value: "informacoes" },
  ]);

  const navigation = useNavigation<NavigationProp>();

  const handleNext = () => {
    if (!value) {
      Alert.alert("Atenção", "Por favor, selecione uma opção.");
      return;
    }
    navigation.navigate("FilterRegister", { searchOption: value });
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Cadastro</Text>
        </View>
      </View>

      {/* Conteúdo */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>O que você busca no Desconet</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione uma opção"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          placeholderStyle={styles.placeholder}
          textStyle={styles.textStyle}
        />
      </View>

      {/* Botão */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleNext}>
          <View style={styles.button}>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

