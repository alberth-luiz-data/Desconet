import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { fetchDesafios } from "../../services/api"; 
import styles from "./styles/desafiosStyles"; 
interface Desafio {
  id: string;
  nome: string;
  descricao: string;
  data_criacao: string; // agora vem como string do backend
}

export default function Desafios() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await fetchDesafios();
        setDesafios(data);
      } catch (error) {
        console.error("Erro ao buscar desafios:", error);
      }
    }

    carregar();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {desafios.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.titulo}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
          <Text style={styles.data}>
            Criado em: {new Date(item.data_criacao).toLocaleDateString()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}


