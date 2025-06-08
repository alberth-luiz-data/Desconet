import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Constants from "expo-constants";
import TabProfile from "../../routes/tabProfile";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/tabProfile";
import { useState } from "react";
import styles from "./styles";
import * as Progress from "react-native-progress";

const statusBarHeight = Constants.statusBarHeight;

export default function Profile() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.pages]}>
        {/* Header com imagem de fundo */}
        <View style={styles.headerImageContainer}>
          <Image
            source={require("../../assets/img/Wallpaper.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
        {/* Conteúdo branco com perfil */}
        <View style={styles.contentContainer}>
          {/* Perfil */}
          <View style={styles.profileContainer}>
            <View style={styles.profileLeft}>
              <Image
                source={require("../../assets/img/Profile.png")}
                style={{ width: 90, height: 90, borderRadius: 9999 }}
              />
              <View style={styles.profileTextContainer}>
                <Text style={styles.name}>Luizinho</Text>
                <Text style={styles.username}>@alberth-luiz</Text>
                <Text style={styles.performance}>Desempenho atual</Text>
                <Progress.Bar
                  progress={0.6}
                  width={120}
                  color="#22c55e"
                  unfilledColor="#ccc"
                  borderWidth={0}
                  height={10}
                  borderRadius={5}
                />
                <View style={styles.statsRow}>
                  <Text style={styles.statsText}>Conexões: 32</Text>
                  <Text style={styles.statsText}>Grupos: 5</Text>
                </View>
              </View>
            </View>

            {/* Botão Editar Perfil */}
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabsContainer}>
          <TabProfile />
        </View>
      </View>
    </View>
  );
}
