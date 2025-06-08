import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    width:"100%"
  },
  containerForm:{
    width:"100",
    
    display: "flex",
    justifyContent:"space-evenly"
  },
  header: {
    width: "100%",
    backgroundColor: "white",
  },
  headerBox: {
    backgroundColor: "#3B82F6",
    width: "50%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 100,
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  form: {
    flex: 1,
    justifyContent:"space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    marginTop: 20,
  },
  inputBox: {
    width: "100%",
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
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 12,
    padding: 10,
    backgroundColor: "white",
    height: 60,
    justifyContent:"center",
    color: "#3B82F6"
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3B82F6",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
})