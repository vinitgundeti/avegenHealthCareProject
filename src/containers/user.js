import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AuthContext from '../config/AuthContext';
import globalStyles from '../config/globalStyles';
import UserName from '../components/Common/userName';

export default function User() {
  const context = useContext(AuthContext);
  return (
    <View style={globalStyles.wrapper}>
      <UserName />
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => context.logOut()}>
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
