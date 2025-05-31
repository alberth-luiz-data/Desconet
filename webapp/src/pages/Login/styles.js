import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: "100%",
    height: "90%",
    marginBottom: 20,
  },
  titulo: {
    color: "#007bff",
    fontSize: 32,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  inputBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 48,
    color: "#000",
    borderStyle:"dotted",
    width:"94%",
    borderColor: "transparent"
  },
  label: {
    position: "absolute",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    top: -10,
    left: 15,
    color: "#007bff",
    fontSize: 14,
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    width:"100%"
  },
  btnLogin: {
    width: "100%",
    height: 45,
    backgroundColor: "#007bff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtnLogin: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#007bff",
    marginTop: -10,
  },
})