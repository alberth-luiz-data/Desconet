import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
