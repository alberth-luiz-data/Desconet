import { StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/home/home";
import SearchRegister from "../pages/Register/searchRegister";
import FilterRegister from "../pages/Register/filterRegister";
import FamilyHomeScreen from "../pages/home/family";
import Comunidade from "../pages/home/comunity";
import Chat from "../pages/home/chat";
import Grupo from "../pages/home/group";
import Vitima from "../pages/home/vitima";
import Desafios from "../pages/users/desafios";
import ChatIA from "../pages/chat";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
  Tarefas: undefined;
  Desempenho: undefined;
  SearchRegister: undefined;
  FilterRegister: undefined;
  FamilyHomeScreen: undefined;
  Comunidade: undefined;
  Chat: undefined;  
  Grupo: undefined;
  Vitima: undefined;
  Desafio: undefined;
  ChatIA: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="SearchRegister"
        component={SearchRegister}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="FilterRegister"
        component={FilterRegister}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="FamilyHomeScreen"
        component={FamilyHomeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Comunidade"
        component={Comunidade}
        options={{ headerShown: true }}
        />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: true }}
        />
      <Stack.Screen 
        name="Grupo"
        component={Grupo}
        options={{ headerShown: true }}/>
      <Stack.Screen
        name="Vitima"
        component={Vitima}
        options={{ headerShown: true }}/>
      <Stack.Screen
        name="Desafio"
        component={Desafios}
        options={{ headerShown: true }}/>
        
        <Stack.Screen
        name="ChatIA"
        component={ChatIA}
        options={{ headerShown: false }}
      />
       
    </Stack.Navigator>
  );
}
