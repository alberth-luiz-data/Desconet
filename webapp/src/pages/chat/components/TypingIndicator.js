import React from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './TypingIndicator/styles';

const TypingIndicator = ({ typingAnimation }) => {
  return (
    <View style={styles.typingContainer}>
      <View style={styles.typingBubble}>
        <Text style={styles.typingText}>Desconet está digitando</Text>
        <View style={styles.typingDots}>
          {[0, 1, 2].map(i => (
            <Animated.View 
              key={i}
              style={[
                styles.typingDot,
                {
                  opacity: typingAnimation,
                  transform: [{
                    scale: typingAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1.2]
                    })
                  }]
                }
              ]} 
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default TypingIndicator;
