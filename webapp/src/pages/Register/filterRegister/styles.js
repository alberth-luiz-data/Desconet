import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    headerContainer: {
    backgroundColor: "white",
    width: "100%",
  },
  header: {
    backgroundColor: "#3B82F6",
    width: "50%",
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 100,
  },
    counterContainer: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  counterText: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  container: {
    flex: 2,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    color: "#3B82F6",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    gap: 10,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: "white",
  },
  chipSelected: {
    backgroundColor: "#3B82F6",
  },
  chipText: {
    color: "#3B82F6",
    fontWeight: "bold",
  },
  chipTextSelected: {
    color: "white",
  },
  footer: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  nextButton: {
    height: 64,
    width: 64,
    backgroundColor: "#3B82F6",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
})