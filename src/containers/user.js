import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AuthContext from '../config/AuthContext';
import globalStyles from '../config/globalStyles';
import UserName from '../components/Common/userName';
import {Colors} from '../config/constants';

const fileStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    // marginBottom: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 10,
    marginBottom: 20,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function User() {
  const context = useContext(AuthContext);
  return (
    <View
      style={[fileStyle.container, globalStyles.wrapper, globalStyles.flex1]}>
      {/* <UserName /> */}
      <View style={fileStyle.bottomContent}>
        <Image
          source={{
            uri: context.user.img,
          }}
          style={fileStyle.avatar}
        />
        <Text style={fileStyle.name}>{context.user.name}</Text>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => context.logOut()}>
          <Text style={globalStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
