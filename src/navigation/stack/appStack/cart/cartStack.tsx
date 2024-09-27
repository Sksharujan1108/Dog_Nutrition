import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartStackParamList } from '@/navigation/navigation_Models/app_Models/cart/cart_Models';
import Cart from '@/screen/app/cart';
import OrderSuccess from '@/screen/app/orderSuccess';

const Stack = createNativeStackNavigator<CartStackParamList>();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'CartScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "CartScreen" component = {Cart} />
        <Stack.Screen name = "OrderSuccessScreen" component = {OrderSuccess} />
    </Stack.Navigator>
  )
}

export default CartStack;