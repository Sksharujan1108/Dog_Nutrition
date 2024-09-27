import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import HomeBackTitleHeader from "@/component/backTitleHeader";
import { styles } from "./styles";
import { CartStackScreenProps } from "@/navigation/navigation_Models/app_Models/cart/cart_Models";
import Success from '@/assets/svg/cart/Success.svg'

const OrderSuccess = ({ navigation }: CartStackScreenProps<'OrderSuccessScreen'>) => {

  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeBackTitleHeader
        title={"Order Details"}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressCart={() => {
          navigation.navigate('CartScreenStack', {
            name: 'CartScreen',
          })
        }}
      />
      <View style={styles.main_container}>
        {/* Success Cart */}
        <View style={styles.success_container}>
            <Success/>
            <Text style={styles.success_text}>{'Order Successfully Placed!'}</Text>
            <Text style={styles.subTitle_text}>{'Thank you for your purchase. Your order is being processed and will be on its way soon!'}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSuccess;
