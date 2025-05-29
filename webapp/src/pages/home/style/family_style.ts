import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    scrollView: { flex: 1, backgroundColor: '#fff' },
    content: { paddingBottom: 120 },
    header: { backgroundColor: '#3b82f6', padding: 20, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
    headerText: { color: 'white', fontSize: 16, lineHeight: 22 },
    profileBox: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
    avatar: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#3b82f6' },
    username: { fontWeight: 'bold', fontSize: 18 },
    subtitle: { color: '#555' },
    progressBarContainer: { paddingHorizontal: 16 },
    progressBar: { backgroundColor: '#e5e7eb', height: 8, borderRadius: 999, overflow: 'hidden', marginTop: 4 },
    progress: { backgroundColor: '#3b82f6', height: '100%' },
    progressText: { marginTop: 6, fontSize: 12 },
    sectionTitle: { fontWeight: 'bold', fontSize: 16, marginHorizontal: 16, marginTop: 24, marginBottom: 8 },
    suggestion: { borderColor: '#3b82f6', borderWidth: 1, borderRadius: 12, padding: 12, marginHorizontal: 16, marginBottom: 8 },
    newSuggestionBtn: { backgroundColor: '#3b82f6', borderRadius: 12, margin: 16, paddingVertical: 12, alignItems: 'center' },
    newSuggestionText: { color: 'white', fontWeight: 'bold' },
    graph: { width: width - 32, height: 160, marginHorizontal: 16, marginBottom: 16 },
    rewardBox: { backgroundColor: '#f1f5f9', marginHorizontal: 16, padding: 12, borderRadius: 12, marginBottom: 8 },
    rewardText: { fontSize: 13 },
    footerIcons: {
      position: 'absolute',
      bottom: 20,
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    iconButton: { backgroundColor: '#3b82f6', padding: 16, borderRadius: 999 },
  });
  
  export default styles;