import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  emojiSelectorContainer: {
    backgroundColor: '#fff',
    height: height * 0.7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  emojiModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  emojiModalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  categoriesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingVertical: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
  },
  categoryButtonActive: {
    backgroundColor: '#3b82f6',
  },
  categoryButtonText: {
    fontSize: 20,
    color: '#64748b',
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  emojiGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  emojiItem: {
    width: '12%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  emojiText: {
    fontSize: 24,
  },
});
