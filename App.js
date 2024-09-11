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
      <NavigationContainer>
        <AppTab />
      </NavigationContainer>
    </NavigationContainer>
  );
};

export default App;
