import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Edit from '@/assets/svg/Edit.svg'
import { styles } from './styles'

interface ProfileImagePickerProps {
    
}

const ProfileImagePicker = () => {
  return (
    <View style = {styles.container}>
      {/* Image */}
      <Image
        style = {styles.image}
        source = {require('@/assets/image/profile/profile.webp')}
      />
      {/* Edit */}
      <TouchableOpacity
        style = {styles.edit_button}
        onPress={() => {}}
      >
        <Edit/>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileImagePicker;