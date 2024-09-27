import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Picture from '@/assets/svg/home/image.svg'
import Cart from '@/assets/svg/home/cart.svg'
import { styles } from './styles';

interface HomeHeaderProps {
  name?: string;
  location?: string;
  onPress?: ((e: GestureResponderEvent) => void);
}
const HomeHeader = (props: HomeHeaderProps) => {
  const { name, location, onPress } = props
  return (
    <View style = {styles.container}>
      {/* row */}
      <View style = {styles.row_container}>
      {/* image */}
      <View style = {styles.image_view}>
        <Picture/>
      </View>
      <View style = {styles.text_container}>
        <Text style = {styles.name_text}> {'Hi,'}{name} </Text>
        <Text style = {styles.location_text}> {location} </Text>
      </View>
      </View>
      {/* cart */}
      <TouchableOpacity
        onPress = {onPress}
        activeOpacity={0.4}
      >
        <Cart/>
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader;