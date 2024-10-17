import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Edit from '@/assets/svg/Edit.svg'
import { styles } from './styles'
import * as ImagePicker from 'expo-image-picker';
import { ErrorFlash } from '@/utlis/flashMessage';

interface ProfileImagePickerProps {
  disabled?: boolean;
  data?: string | undefined;
  onImageSelected?: (uri: string) => void;  // New prop to pass image data
}

const ProfileImagePicker = (props: ProfileImagePickerProps) => {
  const { disabled, data, onImageSelected } = props;

  console.log('data', data);
  

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(data || null);

   // Function to request media library permissions
   const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'We need access to your photo library to allow you to upload profile images.'
      );
      setHasPermission(false);
    } else {
      setHasPermission(true);
    }
  };

  // Check and request permissions when the component mounts
  useEffect(() => {
    requestPermissions();
  }, []);

  const pickerImage = async () => {
    if (hasPermission === false) {
      ErrorFlash('Permission to access the media library is required.');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        const imageUri = result?.assets[0]?.uri;
        setSelectedImage(imageUri);
        if (onImageSelected) {
          onImageSelected(imageUri);  // Call the callback to pass the image URI
        }
      } else {
        ErrorFlash('You did not select any image.');
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <View style = {styles.container}>
      {/* Image */}
      <Image
        style = {styles.image}
        source = {
          selectedImage
            ? { uri: selectedImage }
            : require('@/assets/image/profile/profile.webp')
        }
      />
      {/* Edit */}
      <TouchableOpacity
        style = {styles.edit_button}
        activeOpacity={0.6}
        onPress={pickerImage}
        disabled={disabled}
      >
        <Edit/>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileImagePicker;