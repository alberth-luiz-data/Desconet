import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { auth } from "../../services/firebaseConfig";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import styles from "./styles";
import { useGoogleAuthRequest } from "../../services/googleAuth";

WebBrowser.maybeCompleteAuthSession();

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export default function Welcome() {
  const navigation = useNavigation<NavigationProp>();

  const [request, response, promptAsync] = useGoogleAuthRequest();

  useEffect(() => {
    if (request) {
      console.log("Redirect URI gerado pelo Expo:", request.redirectUri);
    }
  }, [request]);

  useEffect(() => {
    if (response) {
      console.log(
        "Resposta completa do Google Auth Session:",
        JSON.stringify(response, null, 2)
      );
    }

    if (response?.type === "success") {
      console.log(
        "Detalhes de response.params:",
        JSON.stringify(response.params, null, 2)
      );
      if (response.authentication) {
        console.log(
          "Detalhes de response.authentication:",
          JSON.stringify(response.authentication, null, 2)
        );
      }

      let extractedIdToken: string | null = null;

      if (response.authentication?.idToken) {
        extractedIdToken = response.authentication.idToken;
      } else if (response.params?.id_token) {
        extractedIdToken = response.params.id_token;
      } else if (response.params?.idToken) {
        extractedIdToken = response.params.idToken;
      }

      if (extractedIdToken) {
        console.log("idToken obtido:", extractedIdToken);
        const credential = GoogleAuthProvider.credential(extractedIdToken);

        signInWithCredential(auth, credential)
          .then((userCredential) => {
            console.log("Login com Firebase bem-sucedido!", userCredential.user);
            navigation.navigate("Home");
          })
          .catch((err) => {
            console.error("Erro ao autenticar com Firebase:", err);
            console.error("idToken que causou o erro:", extractedIdToken);
            console.error("Código do Erro:", err.code);
            console.error("Mensagem do Erro:", err.message);
            Alert.alert(
              "Erro de Login",
              `Não foi possível fazer login com o Google. Detalhe: ${err.message}`
            );
          });
      } else {
        console.error(
          "idToken não encontrado na resposta. Verifique os logs de 'response.params' e 'response.authentication'."
        );
        Alert.alert(
          "Erro de Autenticação",
          "Não foi possível obter o token de ID do Google. Tente novamente."
        );
      }
    } else if (response?.type === "error") {
      console.error(
        "Erro na resposta do Google Auth Session:",
        response.error
      );
      Alert.alert(
        "Erro de Autenticação Google",
        "Ocorreu um erro durante a autenticação com o Google. Tente novamente."
      );
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Image
          source={require("../../assets/img/Logo.png")}
          style={styles.logoImage}
        />
        
      </View>
      <View style={styles.loginSection}>
        <Text style={styles.loginTitle}>Entrar</Text>
        <Text style={styles.loginSubtitle}>Faça seu login</Text>

        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={styles.emailIconContainer}>
            <MaterialIcons name="email" size={24} color="white" />
          </View>
          <Text style={styles.emailButtonText}>Continue com email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <View style={styles.emailIconContainer}>
            <MaterialIcons name="email" size={24} color="white" />
          </View>
          <Text style={styles.registerButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => promptAsync()}
        >
          <View style={styles.googleIconContainer}>
            <AntDesign name="googleplus" size={20} color="#1b86ea" />
          </View>
          <Text style={styles.googleButtonText}>Login com o Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
