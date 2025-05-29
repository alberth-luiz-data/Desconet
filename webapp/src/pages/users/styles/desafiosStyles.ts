import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    card: {
      backgroundColor: "#f9f9f9",
      padding: 16,
      marginBottom: 12,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    titulo: {
      fontSize: 18,
      fontWeight: "bold",
    },
    descricao: {
      marginTop: 8,
      fontSize: 14,
    },
    data: {
      marginTop: 8,
      fontSize: 12,
      color: "#666",
    },
  });
  export default styles;