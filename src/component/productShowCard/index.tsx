import { Text, View, Image, TouchableOpacity, FlatList, GestureResponderEvent } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./styles";
import Delete from "@/assets/svg/cart/delete.svg";
import Minus from "@/assets/svg/cart/MinusBalck.svg";
import Plus from "@/assets/svg/cart/BlackPlus.svg";
import { useAppDispatch } from "@/feature/stateHook";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "@/feature/slices/cartSlices";

interface ProductShowCardProps {
  id?: number | undefined;
  image: any;
  title: string;
  price: number;
  quantity: number;
  onPressIncrease: (event: GestureResponderEvent) => void
  onPressDelete: (event: GestureResponderEvent) => void
  onPressDecrease: (event: GestureResponderEvent) => void
}

const ProductShowCard = (props: ProductShowCardProps) => {
  const { id, image, title, price, quantity, onPressIncrease, onPressDelete, onPressDecrease } = props;
  const dispatch = useAppDispatch();
  // const [count, setCount] = React.useState(1);
  
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
        <Text style={styles.title_text}>
           {quantity} -- <Text style={styles.title_text}>{title}</Text>
        </Text>
        {/* price */}
        <Text style={styles.price_text}>{(price * quantity).toLocaleString()}</Text>

        {/* Button */}
        <View style={styles.button_container}>
          {/* plus */}
          <TouchableOpacity
            style={styles.circle_container}
            onPress={onPressIncrease}
            activeOpacity={0.5}
          >
            <Plus />
          </TouchableOpacity>
          <Text style={styles.count_text}> {quantity} </Text>
          {/* minus */}
          <TouchableOpacity
            style={styles.circle_container}
            onPress={onPressDecrease}
            disabled={quantity === 1}
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
        onPress={onPressDelete}
      >
        <Delete />
      </TouchableOpacity>
    </View>
  );
};

export default ProductShowCard;
