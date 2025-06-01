import { StyleSheet, Dimensions } from "react-native";
const HEADER_HEIGHT = 60;
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 100,
  },
  menuIconContainer: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 28,
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  menuItem: {
    marginHorizontal: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
export default styles;