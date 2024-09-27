import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react';
import { styles } from './styles';

interface TextButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean | undefined;
  testID?: string | undefined;
}

const TextButton = (props: TextButtonProps) => {
    const {
        onPress,
        title,
        style,
        textStyle,
        disabled
    } = props

  return (
    <TouchableOpacity
      onPress = {onPress}
      activeOpacity = {0.4}
      disabled = {disabled}
      style = {
        [
            styles.ButtonContainer,
            style
        ]
      }
    >
      <Text 
        style = {
            [
                styles.txt_style,
                disabled && {opacity: 0.5},
                textStyle
            ]
        }
            
      > {title} </Text>
    </TouchableOpacity>
  )
}

export default TextButton;