import 'react-native-get-random-values';
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Removendo a importação do global.css para evitar o erro de renderização de texto
// import "./src/styles/global.css";

import Routes from "./src/routes/index";
import { AuthProvider } from "./src/contexts/AuthContext";
import Chat from './src/pages/chat';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#1b86ea" barStyle="light-content" />
        <Chat />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
