import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { GestureHandlerGestureEvent } from 'react-native-gesture-handler';

interface AddToCartProps {
    title: string;
    onPress: (e: GestureHandlerGestureEvent) => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const AddToCart = (props: AddToCartProps) => {
    const {
        style,
        title,
        onPress,
        textStyle,
        disabled,
    } = props;

  return (
    <TouchableOpacity
      style = {[
        styles.button_root, 
        { opacity: disabled ? 0.5 : 1 },
        style]}
      onPress = {onPress}
      activeOpacity = {0.5}
      disabled = {disabled}
    >
      <Text style = {[styles.title_txt, textStyle]}> {title} </Text>
    </TouchableOpacity>
  )
}

export default AddToCart;