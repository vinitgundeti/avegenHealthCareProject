import React, {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../../config/globalStyles';
import {Colors} from '../../config/constants';
import {useContext} from 'react';
import AuthContext from '../../config/AuthContext';

const fileStyle = StyleSheet.create({
  card: {
    // width: '100%',
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
});

export default function UserCard({user}) {
  const context = useContext(AuthContext);
  const setUserInContext = () => {
    context.setUser(user);
  };
  return (
    <TouchableOpacity
      style={[fileStyle.card, globalStyles.shadowStyle]}
      onPress={setUserInContext}>
      <Image
        source={{
          uri: user.img,
        }}
        style={fileStyle.avatar}
      />
      <Text style={fileStyle.name}>{user.name}</Text>
    </TouchableOpacity>
  );
}
