import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import styles from "./styles";
import Constants from "expo-constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const statusBarHeight = Constants.statusBarHeight;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Register() {
  const navigation = useNavigation<NavigationProp>();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const today = new Date();
  
  const maxDate = new Date(
    today.getFullYear() - 14,
    today.getMonth(),
    today.getDate()
  );

  const handleRegister = () => {
    if (!nome || !email || !senha || !confirmarSenha || !nascimento) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    navigation.navigate("SearchRegister");
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    setNascimento(`${day}/${month}/${year}`);
    hideDatePicker();
  };

  const handleWebDateChange = (e: any) => {
    const isoDate = e.target.value;
    const [year, month, day] = isoDate.split("-");
    setNascimento(`${day}/${month}/${year}`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>Cadastro</Text>
          </View>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          {/** Nome */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
              value={nome}
              onChangeText={setNome}
            />
            <Text style={styles.label}>Nome</Text>
          </View>

          {/** Email */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
            <Text style={styles.label}>E-mail</Text>
          </View>

          {/** Senha */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <Text style={styles.label}>Senha</Text>
          </View>

          {/** Confirmar Senha */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
            <Text style={styles.label}>Confirmar Senha</Text>
          </View>

          {/** Data de Nascimento */}

          <View style={styles.inputBox}>
            {Platform.OS === "web" ? (
              <input
                style={{
                  width: "100%",
                  padding: 12,
                  fontSize: 16,
                  borderColor: "#3B82F6",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: 8,
                  marginBottom: 20,
                }}
                value={
                  nascimento
                    ? nascimento.split("/").reverse().join("-") // dd/mm/yyyy → yyyy-mm-dd
                    : ""
                }
                onChange={handleWebDateChange}
                type="date"
                max={maxDate.toISOString().split("T")[0]}
              />
            ) : (
              <>
                <TouchableOpacity
                  onPress={showDatePicker}
                  style={styles.input}
                >
                  <Text style={{ color: nascimento ? "#3B82F6" : "#aaa" }}>
                    {nascimento ? nascimento : "Selecione a data"}
                  </Text>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  maximumDate={maxDate } 
                  locale="pt-BR" 
                  textColor="#3B82F6"
                />
              </>
            )}
            <Text style={styles.label}>Data de nascimento</Text>
          </View>
        </View>

        {/* Botão */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleRegister}>
            <View style={styles.button}>
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
