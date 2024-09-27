import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GuideStackParamList } from '@/navigation/navigation_Models/app_Models/guide/guide_Models';
import Guide from '@/screen/app/guide';

const Stack = createNativeStackNavigator<GuideStackParamList>();

const GuideStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'GuideScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "GuideScreen" component = {Guide} />
    </Stack.Navigator>
  )
}

export default GuideStack;