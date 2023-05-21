import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../containers/home';
import User from '../containers/user';
import Tracker from '../containers/tracker';
import {Image} from 'react-native';
import globalStyles from './globalStyles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/Home_Enable.png')
                  : require('../assets/images/Home_Disable.png')
              }
              style={globalStyles.menuIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/Profile_Enable.png')
                  : require('../assets/images/Profile_Disable.png')
              }
              style={globalStyles.menuIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs">
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Tracker" component={Tracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
