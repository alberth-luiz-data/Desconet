import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import styles from "../home/style/headerCustom_styles";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HEADER_HEIGHT = 60;

export type HeaderHandle = {
  onScroll: (scrollY: number) => void;
};

const Header = forwardRef<HeaderHandle>((_, ref) => {
  const navigation = useNavigation<NavigationProp>();
  const [menuOpen, setMenuOpen] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);

  // Expor método onScroll para o componente pai
  useImperativeHandle(ref, () => ({
    onScroll: (scrollY: number) => {
      if (scrollY > lastScrollY.current && scrollY > HEADER_HEIGHT) {
        // Scroll para baixo - esconde
        Animated.timing(translateY, {
          toValue: -HEADER_HEIGHT,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setMenuOpen(false);
      } else if (scrollY < lastScrollY.current) {
        // Scroll para cima - mostra
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
      lastScrollY.current = scrollY;
    },
  }));

  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      {!menuOpen && (
        <Pressable
          onPress={() => setMenuOpen(true)}
          style={styles.menuIconContainer}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </Pressable>
      )}

      {menuOpen && (
        <View style={styles.menuContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Perfil</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("FamilyHomeScreen");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Tela Familia</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("ChatIA");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Chat IA</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Chat");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Chat</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Grupo");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Grupos</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Vitima");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Vitima</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Desafio");
              setMenuOpen(false);
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Desafios</Text>
          </Pressable>
          <Pressable
            onPress={() => setMenuOpen(false)}
            style={[styles.menuItem, { marginLeft: 20 }]}
          >
            <Text style={styles.menuText}>×</Text>
          </Pressable>
          
        </View>
      )}
    </Animated.View>
  );
});



export default Header;
