import {StyleSheet} from 'react-native';
import {Colors} from './constants';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  headerTitle: {
    fontWeight: '600',
    color: Colors.black,
    fontSize: 22,
    marginBottom: 10,
  },
  lableStyle: {
    fontSize: 16,
    marginBottom: 0,
    color: Colors.black,
    fontWeight: '500',
  },
  textStyle: {
    color: Colors.black,
  },
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  wrapper: {
    paddingHorizontal: 16,
  },
  shadowStyle: {
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: Colors.green,
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});
