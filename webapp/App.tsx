import 'react-native-get-random-values';
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes/index";
import { AuthProvider } from "./src/contexts/AuthContext";
import './src/styles/global.css';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';



const App = () => {
    const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#1b86ea" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
