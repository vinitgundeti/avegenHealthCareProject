import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../config/constants';

const fileStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 60,
  },
  emojiStyle: {
    fontSize: 50,
    color: Colors.black,
    opacity: 0.5,
  },
  moodText: {
    textAlign: 'center',
    color: Colors.black,
  },
});
export default function MoodSelectorCard({
  emoji,
  mood,
  isDisable,
  onSelect,
  isSelected,
}) {
  return (
    <TouchableOpacity
      style={fileStyle.container}
      onPress={onSelect}
      disabled={isDisable}>
      <Text style={[fileStyle.emojiStyle, isSelected && {opacity: 1}]}>
        {emoji}
      </Text>
      <Text style={fileStyle.moodText}>{mood}</Text>
    </TouchableOpacity>
  );
}
