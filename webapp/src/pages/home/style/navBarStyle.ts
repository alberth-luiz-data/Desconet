import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
iconeRowFixed: {
    position: "absolute",
    bottom: 20,
    width: width * 0.5, 
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3b82f6",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconeBotao: {
    backgroundColor: "transparent", 
    padding: 1,
    borderRadius: 999,
  },
});
export default styles;  