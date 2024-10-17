import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Star from "@/assets/svg/home/star.svg";
import Minus from "@/assets/svg/home/minus.svg";
import Plus from "@/assets/svg/home/Plus.svg";

interface TitlePriceRateCardProps {
  id?: number;
  title?: string;
  price?: number;
  age?: string
  rate?: string;
  description?: string;
}

const TitlePriceRateCard = (props: TitlePriceRateCardProps) => {
  const { id, title, price, age, rate, description } = props;
  const [count, setCount] = React.useState(1);
  return (
    <View style={styles.container}>
      {/* row container */}
      <View style={styles.row_container}>
        {/* text & Price */}
        <Text style={styles.title_text}>
          {title}{" "}
        </Text>
        <View style={styles.price_container}>
          <Text style={styles.price_text}>Rs.{Number(price).toLocaleString()} </Text>
        </View>
      </View>
      {/* Rate */}
      <View style={styles.rate_container}>
        <Text style={styles.rate_text}>{"Pet age :"}</Text>
        {/* rate */}
        <Text style={styles.rate}>{age}</Text>
      </View>
      {/* Rate */}
      <View style={styles.rate_container}>
        <Text style={styles.rate_text}>{"Rate :"}</Text>
        {/* Star */}
        <Star />
        {/* rate */}
        <Text style={styles.rate}>{rate}</Text>
      </View>

      {/* Button */}
      <View style = {styles.button_container}>
        {/* minus */}
        <TouchableOpacity
          style = {styles.circle_container}
          onPress = {() => setCount(count - 1)}
          disabled = {count === 1}
          activeOpacity = {0.5}
        >
          <Minus/>
        </TouchableOpacity>
        <Text style={styles.count_text}> {count} </Text>
        {/* plus */}
        <TouchableOpacity
          style = {styles.circle_container}
          onPress = {() => setCount(count + 1)}
          activeOpacity = {0.5}
        >
          <Plus/>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <Text style={styles.description_text}>{'Description :'} </Text>
      <Text style={styles.description_data}>{description}</Text>
    </View>
  );
};

export default TitlePriceRateCard;
