import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ChatBubble({ 
  message, 
  isOwnMessage = false, 
  showAvatar = true, 
  avatar = null,
  children 
}) {
  return (
    <View style={[
      styles.messageWrapper,
      isOwnMessage ? styles.sentAlign : styles.receivedAlign,
    ]}>
      {!isOwnMessage && showAvatar && avatar && (
        <Image source={avatar} style={[styles.avatarBot, { marginLeft: 0 }]} />
      )}
      
      <View style={[
        styles.messageBubble,
        isOwnMessage ? styles.outgoingBubble : styles.incomingBubble,
      ]}>
        {children}
      </View>

      {isOwnMessage && showAvatar && avatar && (
        <Image source={avatar} style={[styles.avatarBot, { marginRight: 0 }]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
    marginHorizontal: 16,
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
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8, 
    marginLeft: 8,  
    marginBottom: 4,
  },
  messageBubble: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    maxWidth: '88%',
    minWidth: '40%',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  incomingBubble: {
    backgroundColor: '#f8f9fa',
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  outgoingBubble: {
    backgroundColor: '#007bff',
    borderBottomRightRadius: 8,
    marginLeft: 'auto',
  },
});
