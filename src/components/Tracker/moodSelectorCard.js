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
  },
  moodText: {
    textAlign: 'center',
    color: Colors.black,
  },
});
export default function MoodSelectorCard({emoji, mood, onSelect}) {
  return (
    <TouchableOpacity style={fileStyle.container}>
      <Text style={fileStyle.emojiStyle}>{emoji}</Text>
      <Text style={fileStyle.moodText}>{mood}</Text>
    </TouchableOpacity>
  );
}
