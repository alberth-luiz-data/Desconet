import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

const validarEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};


const handleLogin = () => {
  if (email.trim() === "" || senha.trim() === "") {
    Alert.alert("Atenção", "Preencha o e-mail e a senha.");
    return;
  }

  if (!validarEmail(email)) {
    Alert.alert("E-mail inválido", "Digite um e-mail válido.");
    return;
  }


  navigation.navigate("Home");
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/img/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        {/*  E-mail */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>E-mail</Text>
        </View>

        {/* Senha */}
        <View style={styles.inputBox}>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <AntDesign
                name={mostrarSenha ? "eye" : "eyeo"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Senha</Text>
        </View>

        {/* Botão */}
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.txtBtnLogin}>Login</Text>
        </TouchableOpacity>

        {/* Botão */}
        <Text>Não tem conta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Crie sua conta</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
</KeyboardAvoidingView>
  );
}
