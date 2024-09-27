import { Image, ImageProps, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface HomeOfferCartProps {
    image: ImageProps,
    title: string,
    offer: string,
    // description: string,
}
const HomeOfferCart = (props: HomeOfferCartProps) => {
    const { image, title, offer } = props;
  return (
    <View style = {styles.container}>
      {/* row container */}
      <View style = {styles.row_container}>
        {/* text container */}
        <View style = {styles.text_container}>
            <Text style = {styles.title_text}>{title} </Text>
            <Text style = {styles.offer_text}>{offer} </Text>
            <Text style = {styles.description_text_1}>{'Use code'} 
                <Text style = {styles.description_text_2}> {'COMBO30'} </Text>
                <Text style = {styles.description_text_1}>{'and grab offer.'} </Text>
            </Text>
        </View>

        {/* Image container*/}
        <View style = {styles.image_container}>
            <Image
              source={image}
              style = {styles.image}
            />
        </View>
      </View>
    </View>
  )
}

export default HomeOfferCart