import React from 'react';
import { View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import styles from '../styles/chatBubbleStyles';

const MessageBubble = ({ message }) => {
  const isOwnMessage = message.sender === 'user';

  return (
    <View>
      {isOwnMessage ? (
        <Text style={[styles.messageText, styles.outgoingText]}>
          {message.text}
        </Text>
      ) : (
        <Markdown 
          style={{
            body: {...styles.messageText, ...styles.incomingText},
            strong: styles.boldText,
            em: styles.italicText,
            heading1: styles.h1Text,
            heading2: styles.h2Text,
            heading3: styles.h3Text,
            bullet_list_icon: { color: styles.incomingText.color },
            code_block: {...styles.codeText, padding: 8},
            code_inline: styles.codeText,
            listItem: styles.listItemText,
          }}
        >
          {message.text}
        </Markdown>
      )}
      
      {message.timestamp && (
        <Text style={styles.messageTimestamp}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      )}
    </View>
  );
};

export default MessageBubble;
