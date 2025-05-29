import React from 'react';
import styles from './style/family_style';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';


export default function FamilyHomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Olá, Ana! Acompanhe o progresso do Luizinho hoje e envie algo que motive ele a continuar desconectado.</Text>
        </View>

        <View style={styles.profileBox}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>Luizinho</Text>
            <Text style={styles.subtitle}>Suu inhe pian</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '60%' }]} />
          </View>
          <Text style={styles.progressText}>1h 20 offline agora</Text>
        </View>

        <Text style={styles.sectionTitle}>Atividades sugeridas</Text>
        <View style={styles.suggestion}>
          <Text>🌳  Passeio no parque</Text>
        </View>
        <View style={styles.suggestion}>
          <Text>📖  Leia um capítulo do seu livro</Text>
        </View>

        <TouchableOpacity style={styles.newSuggestionBtn}>
          <Text style={styles.newSuggestionText}>+ Enviar nova sugestão</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Desempenho</Text>
        <Image
          source={{ uri: 'https://i.ibb.co/qrcDLdL/grafico-exemplo.png' }}
          style={styles.graph}
          resizeMode="contain"
        />

        <Text style={styles.sectionTitle}>Atividade</Text>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardText}><Text style={{ fontWeight: 'bold' }}>Luizinho</Text> completou 3h offline! 👌</Text>
        </View>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardText}>Você sugeriu: Passeio no parque 🌳 <Text style={{ color: '#22c55e', fontWeight: 'bold' }}>Aceito!</Text></Text>
        </View>
      </ScrollView>

      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="list" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="users" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


