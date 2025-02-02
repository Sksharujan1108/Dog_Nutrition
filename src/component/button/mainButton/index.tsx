import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface MainButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const MainButton = (props: MainButtonProps) => {
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

export default MainButton;