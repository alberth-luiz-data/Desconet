import 'react-native-get-random-values';
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  Animated,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../routes';
import styles from '../home/style/headerCustom_styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const HEADER_HEIGHT = 60;

export type HeaderHandle = {
  onScroll: (scrollY: number) => void;
};

const Header = forwardRef<HeaderHandle>((_, ref) => {
  const navigation = useNavigation<NavigationProp>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const translateY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);

  useImperativeHandle(ref, () => ({
    onScroll: (scrollY: number) => {
      if (scrollY > lastScrollY.current && scrollY > HEADER_HEIGHT) {
        Animated.timing(translateY, {
          toValue: -HEADER_HEIGHT,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setMenuOpen(false);
      } else if (scrollY < lastScrollY.current) {
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
    <>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY }] },
        ]}
      >
        <Pressable
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.menuIconContainer}
        >
          <Ionicons name={menuOpen ? 'close' : 'menu'} size={28} color="#3b82f6" />
        </Pressable>

        <TextInput
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
          placeholderTextColor="#999"
        />

        <Pressable
          onPress={() => navigation.navigate('Profile')}
          style={styles.profileIconContainer}
        >
          <Ionicons name="person-circle-outline" size={28} color="#3b82f6" />
        </Pressable>
      </Animated.View>

      {menuOpen && (
        <View style={styles.drawerOverlay}>
          <View style={styles.drawer}>
            {[
              { label: 'Home', route: 'Home' },
              { label: 'Perfil', route: 'Profile' },
              { label: 'Tela Família', route: 'FamilyHomeScreen' },
              { label: 'Chat IA', route: 'ChatIA' },
              { label: 'Chat', route: 'Chat' },
              { label: 'Grupos', route: 'Grupo' },
              { label: 'Vítima', route: 'Vitima' },
              { label: 'Desafios', route: 'Desafio' },
            ].map(({ label, route }) => (
              <Pressable
                key={route}
                onPress={() => {
                  navigation.navigate(route as keyof RootStackParamList);
                  setMenuOpen(false);
                }}
                style={styles.drawerItem}
              >
                <Ionicons name="chevron-forward-outline" size={18} color="#3b82f6" />
                <View style={{ marginLeft: 6 }}>
                  <Ionicons name="ellipse" size={10} color="#3b82f6" />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </>
  );
});

export default Header;
