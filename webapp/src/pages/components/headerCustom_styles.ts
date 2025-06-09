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
    paddingHorizontal: 10,
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

  searchInput: {
  flex: 1,
  height: 40,
  marginHorizontal: 10,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: "#3b82f6",
  borderRadius: 8,
  backgroundColor: "#fff",
  color: "#3b82f6",
},

drawerOverlay: {
  position: "absolute",
  top: HEADER_HEIGHT,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  zIndex: 99,
},

drawer: {
  backgroundColor: "#fff",
  padding: 20,
  borderTopWidth: 2,
  borderTopColor: "#3b82f6",
  elevation: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
},

drawerItem: {
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: "#eee",
},

drawerText: {
  fontSize: 18,
  color: "#3b82f6",
  fontWeight: "600",
},

profileIconContainer: {
  padding: 10,
},

});


export default styles;
