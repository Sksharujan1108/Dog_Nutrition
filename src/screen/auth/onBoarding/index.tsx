import { Text, Image, View, StatusBar } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Constants } from './constants';
import PetPalace from '@/assets/svg/onBoard/Pet_Palace.svg'
import MainButton from '@/component/button/mainButton';
import { AuthStackScreenProps } from '@/navigation/navigation_Models/auth_Models/authModels';

const OnBoarding = ({navigation}: AuthStackScreenProps<'OnBoardingScreen'>) => {
  return (
    <View style = {styles.root}>

      {/* Customize the StatusBar */}
      <StatusBar
        backgroundColor={'translucent'} // Set your background color
        barStyle="dark-content" // Light or dark content
        translucent
      />
      
        {/* Image Container*/}
        <View style = {styles.image_container}>
            {/* Add Image */}
            <Image
              style = {styles.image}
              source={require('@/assets/image/onBoarding/image.png')}
            />
        </View>

        <View style = {styles.data_container}>
            {/* white container */}
            <View style = {styles.white_container}>
            {/* Add icon */}
              <View style = {styles.icon_container}>
                <PetPalace/>
              </View>
            {/* title & subTitle Container */}
            <View style = {styles.title_container}>
              {/* title */}
              <Text style = {styles.title}>{Constants.TITLE}</Text>
              {/* sub title */}
              <Text style = {styles.sub_title}>{Constants.SUB_TITLE}</Text>
            </View>

            {/* Button */}
            <MainButton
                style = {styles.button_container}
                title = {Constants.BUTTON}
                onPress={() => {
                    navigation.navigate('RegisterScreen')
                }}
            />

          </View>
        </View>
    </View>
  )
}

export default OnBoarding;