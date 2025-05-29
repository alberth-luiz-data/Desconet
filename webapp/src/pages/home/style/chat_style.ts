import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#3b82f6',
      paddingTop: 48,
      paddingBottom: 16,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    headerTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    subHeader: {
      color: 'white',
      fontSize: 14,
      marginTop: 4,
    },
    messageWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    sentAlign: {
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
    },
    receivedAlign: {
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
    },
    messageContainer: {
      padding: 10,
      borderRadius: 12,
      maxWidth: '75%',
    },
    sent: {
      backgroundColor: '#DCF8C6',
    },
    received: {
      backgroundColor: '#f1f1f1',
    },
    sender: {
      fontWeight: 'bold',
      marginBottom: 2,
    },
    avatarTop: {
      width: 32,
      height: 32,
      borderRadius: 16,
      marginHorizontal: 8,
      marginTop: 4,
    },
    timestamp: {
      fontSize: 10,
      color: '#777',
      marginTop: 4,
      alignSelf: 'flex-end'
    },
    inputArea: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      padding: 10,
      borderRadius: 20,
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: '#3b82f6',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 20,
    },
  });
export default styles;  