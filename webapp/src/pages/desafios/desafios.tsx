import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { fetchDesafios, createDesafio } from "../../services/api";
import styles from "./styles/desafiosStyles";

interface Desafio {
  id: string;
  nome: string;
  descricao: string;
  data_criacao: string;
}

export default function Desafios() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const data = await fetchDesafios();
      setDesafios(data);
    } catch (error) {
      console.error("Erro ao buscar desafios:", error);
    }
  }

  async function handleCriarDesafio() {
    if (!novoNome.trim() || !novaDescricao.trim()) {
      Alert.alert("Preencha todos os campos.");
      return;
    }

    try {
      await createDesafio({ nome: novoNome, descricao: novaDescricao });
      setModalVisible(false);
      setNovoNome("");
      setNovaDescricao("");
      await carregar();
    } catch (error) {
      console.error("Erro ao criar desafio:", error);
      Alert.alert("Erro ao criar desafio.");
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoCriar}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textoBotao}>Criar Novo Desafio</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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

      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalWrapper}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitulo}>Novo Desafio</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={novoNome}
              onChangeText={setNovoNome}
            />
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: "top" }]}
              placeholder="Descrição"
              value={novaDescricao}
              onChangeText={setNovaDescricao}
              multiline
            />

            <TouchableOpacity style={styles.botaoSalvar} onPress={handleCriarDesafio}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.botaoSalvar, { backgroundColor: "#aaa" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    
    </View>
  );
}
