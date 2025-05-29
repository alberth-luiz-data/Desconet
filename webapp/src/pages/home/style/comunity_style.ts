import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#3b82f6',
      paddingTop: 48,
      paddingBottom: 20,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    headerTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 12,
    },
    menuIcon: {
      alignSelf: 'flex-start',
      padding: 4,
    },
    post: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 12,
      borderColor: '#3b82f6',
      borderWidth: 2,
    },
    user: { fontSize: 14 },
    message: { fontSize: 13, color: '#333', marginVertical: 6 },
    actionsRow: { flexDirection: 'row', gap: 16 },
    actionIcon: { fontSize: 12, color: '#444' },
    commentBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      gap: 8,
    },
    input: {
      flex: 1,
      backgroundColor: '#f1f5f9',
      borderRadius: 8,
      padding: 8,
    },
    sendBtn: {
      color: '#3b82f6',
      fontWeight: 'bold',
    },
    filterRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      padding: 12,
      justifyContent: 'center',
    },
    filterButton: {
      borderColor: '#3b82f6',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
    filterButtonActive: {
      backgroundColor: '#3b82f6',
    },
    footerIcons: {
      position: 'absolute',
      bottom: 20,
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    iconButton: {
      backgroundColor: '#3b82f6',
      padding: 16,
      borderRadius: 999,
    },
  });
export default styles;  