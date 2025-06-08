import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#3B82F6",
    width: "50%",
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 9999,
  },
  headerText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 30,
    margin:18,
    backgroundColor: "#fff",
    borderColor: "#3B82F6",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    color: "#000",
    marginBottom: 8,
    fontWeight: "600",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#3B82F6",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  list: {
    marginTop: 20,
    margin:18
  },
  item: {
    backgroundColor: "#3B82F6",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    marginRight: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  code: {
    color: "#fff",
    fontSize: 12,
  },
  buttonNext: {
    backgroundColor: "#3B82F6",
    width: 60,
    height: 60,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});
