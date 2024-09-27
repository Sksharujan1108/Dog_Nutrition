import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BackArrow from "@/assets/svg/home/BackArrow.svg";
import Cart from "@/assets/svg/home/cart.svg";
import { styles } from "./styles";

interface HomeBackTitleHeaderProps {
  title?: string;
  onPressBack: () => void;
  onPressCart: () => void;
}

const HomeBackTitleHeader = (props: HomeBackTitleHeaderProps) => {
  const { title, onPressBack, onPressCart } = props;
  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        style={styles.shadow_container}
        activeOpacity={0.5}
        onPress={onPressBack}
      >
        <BackArrow />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title_text}>{title}</Text>
      {/* Cart */}
      <TouchableOpacity
        style={styles.shadow_container}
        activeOpacity={0.5}
        onPress={onPressCart}
      >
        <Cart width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeBackTitleHeader;
