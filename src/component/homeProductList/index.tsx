import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import AddToCart from "../button/addToCartButton";
import { styles } from "./styles";

interface HomeProductListProps {
  data: {
    id: number;
    image: any;
    price: string;
    ratting: string;
    title: string;
  }[];
  onPressAddToCart: (productId: string) => void; // Function to handle add to cart
  onPressDetails: () => void;
}

const HomeProductList = (props: HomeProductListProps) => {
  const { data, onPressAddToCart, onPressDetails } = props;

  return (
    <View>
      <FlatList
        nestedScrollEnabled
        scrollEnabled = {false}
        showsVerticalScrollIndicator = {false}
        numColumns={2}
        data={data}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle = {styles.content_container_style}
        renderItem={({ item, index }) => (
          <View 
            style={styles.container}
            key = {item.id}
          >
            <TouchableOpacity 
              style={styles.touchable_button_container}
              onPress={onPressDetails}
              activeOpacity={0.5}
              >
              {/* Image Container */}
              <View style={styles.image_container}>
                {/* Image */}
                <Image
                  source={item?.image}
                  style={styles.product_image}
                />
              </View>

              {/* text */}
              <View style={styles.text_container}>
                <Text style={styles.price_text}>{item?.price}</Text>
                <Text style={styles.ratting_text}>{item?.ratting}</Text>
              </View>
              <Text style={styles.description_text}>
                {item?.title}
              </Text>
            </TouchableOpacity>

            {/* Add To cart */}
            <AddToCart
              title={"Add to cart"}
              onPress={() => onPressAddToCart(item.id)} // Call the prop function
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeProductList;
