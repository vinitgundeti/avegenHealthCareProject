// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthStack from './src/config/AuthStack';
import globalStyles from './src/config/globalStyles';
function App() {
  return (
    <SafeAreaView style={globalStyles.flex1}>
      <AuthStack />
    </SafeAreaView>
  );
}
export default App;
