import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { G } from "react-native-svg";

interface GuideMainCardProps {
    image: any,
    title: string,
    subTitle: string
}

const GuideMainCard = (props: GuideMainCardProps) => {
  const { image, title, subTitle } = props;
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>
        {/* Sub Title */}
        <Text style={styles.sub_title}>{subTitle}</Text>
      </View>
      {/* image container */}
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={image}
        />
      </View>
    </View>
  );
};

export default GuideMainCard;

