import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./styles";
import Delete from "@/assets/svg/cart/delete.svg";
import Minus from "@/assets/svg/cart/MinusBalck.svg";
import Plus from "@/assets/svg/cart/BlackPlus.svg";

interface ProductShowCardProps {
  id?: number;
  image: any;
  title: string;
  price: string;
}

const ProductShowCard = (props: ProductShowCardProps) => {
  const { id, image, title, price } = props;
  const [count, setCount] = React.useState(1);
  return (
    <View style={styles.container}>
      {/* image Container */}
      <View style={styles.image_container}>
        {/* image */}
        <Image style={styles.image} source={image} />
      </View>

      {/* text container */}
      <View style={styles.text_container}>
        {/* title */}
        <Text style={styles.title_text}>{title}</Text>
        {/* price */}
        <Text style={styles.price_text}>{price}</Text>

        {/* Button */}
        <View style={styles.button_container}>
          {/* plus */}
          <TouchableOpacity
            style={styles.circle_container}
            onPress={() => setCount(count + 1)}
            activeOpacity={0.5}
          >
            <Plus />
          </TouchableOpacity>
          <Text style={styles.count_text}> {count} </Text>
          {/* minus */}
          <TouchableOpacity
            style={styles.circle_container}
            onPress={() => setCount(count - 1)}
            disabled={count === 1}
            activeOpacity={0.5}
          >
            <Minus />
          </TouchableOpacity>
        </View>
      </View>

      {/* delete */}
      <TouchableOpacity
        style={styles.delete_button}
        activeOpacity={0.5}
        onPress={() => {}}
      >
        <Delete />
      </TouchableOpacity>
    </View>
  );
};

export default ProductShowCard;
