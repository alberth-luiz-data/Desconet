import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/chatBubbleStyles';

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
