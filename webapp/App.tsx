import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "./src/styles/global.css";

import Routes from "./src/routes/index";
import Profile from "./src/pages/Profile";
import HomeScreen from "./src/pages/home/home";
import ChatIA from "./src/pages/chat";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5e17eb" barStyle="light-content" />
      <ChatIA />
    </NavigationContainer>
  );
};

export default App;