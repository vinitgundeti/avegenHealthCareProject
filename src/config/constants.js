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
