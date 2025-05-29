import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import styles from '../style/navBarStyle'; 
import { RootStackParamList } from "../../../routes";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FloatingNavBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.iconeRowFixed}>
      <TouchableOpacity
        style={styles.iconeBotao}
        onPress={() => navigation.navigate('Comunidade')}
      >
        <FontAwesome name="users" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconeBotao}
        onPress={() => navigation.navigate('Grupo')}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconeBotao}
        onPress={() => navigation.navigate('ChatIA')}
      >
        <FontAwesome name="comment" size={20} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.iconeBotao}
        onPress={() => navigation.navigate('FamilyHomeScreen')}
      >
        <FontAwesome name="cloud" size={20} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.iconeBotao}
        onPress={() => navigation.navigate('Desafio')}
      >
        <FontAwesome name="battery-half" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingNavBar;
