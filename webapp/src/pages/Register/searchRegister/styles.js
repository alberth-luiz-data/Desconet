import { StyleSheet } from 'react-native';



export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#fff",
  },
  headerBox: {
    backgroundColor: "#3b82f6",
    width: "50%",
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 100,
  },
  headerText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 2,
    paddingHorizontal: 32,
    backgroundColor: "#fff",
    width: "100%",
  },
  title: {
    color: "#3b82f6",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 12,
  },
  dropdown: {
    borderColor: "#3b82f6",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  dropdownContainer: {
    borderColor: "#3b82f6",
    borderWidth: 1,
    width: "100%",
  },
  placeholder: {
    color: "#aaa",
  },
  textStyle: {
    color: "#000",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  button: {
    height: 64,
    width: 64,
    backgroundColor: "#3b82f6",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
})