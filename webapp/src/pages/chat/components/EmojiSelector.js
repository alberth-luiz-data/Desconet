import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EMOJI_CATEGORIES } from '../utils/emojiData';
import styles from '../styles';

const EmojiSelector = ({ onEmojiSelected, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('smileys');

  const renderEmoji = ({ item }) => (
    <TouchableOpacity
      style={styles.emojiItem}
      onPress={() => onEmojiSelected(item)}
    >
      <Text style={styles.emojiText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCategoryButton = (categoryKey, category) => (
    <TouchableOpacity
      key={categoryKey}
      style={[
        styles.categoryButton,
        selectedCategory === categoryKey && styles.categoryButtonActive
      ]}
      onPress={() => setSelectedCategory(categoryKey)}
    >
      <Text style={[
        styles.categoryButtonText,
        selectedCategory === categoryKey && styles.categoryButtonTextActive
      ]}>
        {category.title.split(' ')[0]}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.emojiSelectorContainer}>
      {/* Header */}
      <View style={styles.emojiModalHeader}>
        <Text style={styles.emojiModalTitle}>Escolha um emoji</Text>
        <TouchableOpacity onPress={onClose}>
          <Feather name="x" size={24} color="#64748b" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {Object.entries(EMOJI_CATEGORIES).map(([key, category]) =>
          renderCategoryButton(key, category)
        )}
      </ScrollView>

      {/* Emojis Grid */}
      <FlatList
        data={EMOJI_CATEGORIES[selectedCategory].emojis}
        renderItem={renderEmoji}
        numColumns={8}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.emojiGrid}
      />
    </View>
  );
};

export default EmojiSelector;
