import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative"
  },
  headerImageContainer: {
    width: "100%",
    height: 250,
    position:"absolute",
    zIndex: 2
  },
  pages:{
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 60,
    paddingHorizontal: 20,
    position:"relative",
    zIndex: 3,
    top: "15%"
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },
  profileLeft: {
    flexDirection: "row",
  },
  profileTextContainer: {
    marginLeft: 15,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  performance: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  statsText: {
    fontSize: 13,
    color: "#555",
    marginRight: 10,
  },
  editButton: {
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  editButtonText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 12,
  },
  tabsContainer: {
    width:"100%",
    height:"100%",
    position:"relative",
    zIndex: 3,
    top: "15%"
  },
})