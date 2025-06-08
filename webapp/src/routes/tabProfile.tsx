import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Tarefas from "../pages/desafios/desafios";
import Desempenho from "../pages/Profile/desempenho/desempenho";
import Compromissos from "../pages/Profile/compromissos/compromissos";
import Post from "../pages/Profile/post/post";


export type RootStackParamList = {
  Tarefas: undefined;
  Desempenho: undefined;
  Compromissos: undefined;
  Post: undefined;
};

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function TabProfile() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen 
        name="Tarefas"
        component={Tarefas}
       />

      <Tab.Screen 
        name="Desempenho" 
        component={Desempenho} 
      />

      <Tab.Screen 
        name="Post" 
        component={Post} 
      />
      
      <Tab.Screen 
        name="Compromissos" 
        component={Compromissos} 
      />
    </Tab.Navigator>
  );
}
