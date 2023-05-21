import React from 'react';
import {StyleSheet, View} from 'react-native';
import globalStyles from '../config/globalStyles';
import {Colors} from '../config/constants';
import HomeCalendar from '../components/Home/homeCalendar';
import UserName from '../components/Common/userName';

const fileStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
export default function Home() {
  return (
    <View
      style={[fileStyle.container, globalStyles.flex1, globalStyles.wrapper]}>
      <UserName />
      <HomeCalendar />
    </View>
  );
}
