import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '@/screen/app/search';
import { SearchStackParamList } from '@/navigation/navigation_Models/app_Models/search/search_Models';

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'SearchScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "SearchScreen" component = {Search} />
    </Stack.Navigator>
  )
}

export default SearchStack;