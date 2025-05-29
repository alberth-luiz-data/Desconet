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
    groupCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#f4f4f4',
      borderRadius: 16,
      marginHorizontal: 16,
      marginVertical: 8,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 12,
      borderColor: '#3b82f6',
      borderWidth: 2,
    },
    groupName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    groupDesc: {
      color: '#555',
      fontSize: 13,
      marginBottom: 2,
    },
    lastMessage: {
      fontSize: 12,
      color: '#333',
      fontStyle: 'italic',
    },
    memberCount: {
      fontSize: 12,
      color: '#666',
    },
    unreadBadge: {
      backgroundColor: '#3b82f6',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 999,
    },
    unreadText: {
      color: 'white',
      fontWeight: 'bold',
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
