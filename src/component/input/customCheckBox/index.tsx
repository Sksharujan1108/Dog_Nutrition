import React, { useState } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // You can import icons from any library you prefer
import { styles } from './styles';

interface MobileSelectCustomBoxProps {
    isChecked?: boolean; // optional isChecked prop
    setIsChecked?: (value: boolean) => void; // function to toggle checkbox
}

const MobileSelectCustomBox = (props: MobileSelectCustomBoxProps) => {
  const { isChecked, setIsChecked } = props;

  const toggleCheck = (event: GestureResponderEvent) => {
    if (setIsChecked) {
      setIsChecked(!isChecked);
    }
  };

  return (
      <TouchableOpacity
        style={[styles.icon2Container, isChecked ? null : styles.emptyicon]}
        onPress={toggleCheck}
      >
        <FontAwesome5 name='check' size={10} color='white' />
      </TouchableOpacity>
  );
}

export default MobileSelectCustomBox;
