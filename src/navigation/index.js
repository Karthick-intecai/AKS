import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VerifeyScreen from '../screens/VerifeyScreen';
import MainScreen from '../screens/MainScreen';
import FirstHomeScreen from '../screens/FirstHomeScreen';
import Notification from '../components/Notification';
import FeaturesScreen from '../components/FeaturesScreen';
import FileITR from '../screens/FileITR';
import ITRFiling from '../screens/ITRFiling';
import UserProfile from '../components/UserProfile';
import Account from '../components/Account';
import Dashbord from '../screens/Dashbord';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
        <Stack.Screen name="FirstHome" component={FirstHomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verifey" component={VerifeyScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Features" component={FeaturesScreen} />
        <Stack.Screen name="ITR" component={FileITR} />
        <Stack.Screen name="ITRFiling" component={ITRFiling} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Dashbord" component={Dashbord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigation };
