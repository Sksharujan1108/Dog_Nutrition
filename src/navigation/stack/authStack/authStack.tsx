import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '@/screen/auth/register';
import OnBoarding from '@/screen/auth/onBoarding';
import { AuthStackParamList } from '@/navigation/navigation_Models/auth_Models/authModels';
import AppBottomTop from '@/navigation/tabs/mobile_bottom_tab';
import LogIn from '@/screen/auth/login';


const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'OnBoardingScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "OnBoardingScreen" component = {OnBoarding} />
        <Stack.Screen name = "LogInScreen" component = {LogIn} />
        <Stack.Screen name = "RegisterScreen" component = {Register} />
        {/* Add the Bottom Stack */}
        <Stack.Screen name = "AppBottomTopScreen" component = {AppBottomTop} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})