import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@/navigation/navigation_Models/app_Models/home/home_Models';
import { ProfileStackParamList } from '@/navigation/navigation_Models/app_Models/profile/profile_Models';
import Profile from '@/screen/app/profile';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'ProfileScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "ProfileScreen" component = {Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack;