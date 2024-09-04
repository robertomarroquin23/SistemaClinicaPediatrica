import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import LoginScreen from './frontend/src/screen/LoginScreen/loginScreen';
import HomeScreen from './frontend/src/screen/HomeScreen/HomeScreen';
import ProfileScreen from './frontend/src/screen/ProfileScreen/ProfileScreen';
import SettingScreen from './frontend/src/screen/SettingScreen/SettingScreen';
import DoctorScreen from './frontend/src/screen/DoctorScreen/DoctorScreen';
import HistoryScreen from './frontend/src/screen/HistoryScreen/HistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Doctor" component={DoctorScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
