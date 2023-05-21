import {Platform} from 'react-native';

export const urls = {
  baseUrl:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3002'
      : 'http://localhost:3002',
};

export const Colors = {
  black: '#000',
  white: '#fff',
  green: 'green',
  gray: 'gray',
};

export const moodRatings = {
  'Very Unhappy': '😪',
  Unhappy: '😞',
  Neutral: '🙂',
  Happy: '😊',
  'Very Happy': '😁',
};

export const regexStrings = {
  bp: /^\d+\/\d+$/, //to check if entered string is starting and ending with number and '/' in between
};
