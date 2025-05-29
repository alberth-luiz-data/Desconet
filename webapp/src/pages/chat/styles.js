import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Esse arquivo ta gigante, mas ta funcionando, depois eu vou refatorar

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#3b82f6',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 4,
  },

  messagesContainer: {
    padding: 16,
    flexGrow: 1,
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
  avatarBot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    marginTop: 4,
  },
  typingWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  incomingBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  outgoingBubble: {
    backgroundColor: '#3b82f6',
    borderBottomRightRadius: 8,
  },
  messageTimestamp: {
    fontSize: 10,
    color: '#6c757d',
    marginTop: 4,
    fontWeight: '400',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
  },
  incomingText: {
    color: '#212529',
  },
  outgoingText: {
    color: '#ffffff',
  },

  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
  codeText: {
    fontFamily: 'monospace',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 13,
  },
  h1Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  h2Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  h3Text: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 2,
  },
  listItemText: {
    marginLeft: 8,
    lineHeight: 22,
  },

  typingIndicatorContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingText: {
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic',
    marginRight: 8,
  },
  typingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#adb5bd',
    marginHorizontal: 2,
  },

  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 6,
    minHeight: 48,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
    color: '#374151',
    maxHeight: 120,
  },
  emojiButton: {
    padding: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  sendButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  emojiModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
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