import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import HomeBackTitleHeader from "@/component/backTitleHeader";
import { HomeStackScreenProps } from "@/navigation/navigation_Models/app_Models/home/home_Models";
import { styles } from "./styles";
import TitlePriceRateCard from "@/component/titlePriceRateCard";
import MainButton from "@/component/button/mainButton";
import AddToCart from "@/component/button/addToCartButton";
import { useAppDispatch } from "@/feature/stateHook";
import { addToCart } from "@/feature/slices/cartSlices";
import { SuccessFlash } from "@/utlis/flashMessage";

const HomeDetails = ({
  navigation,
}: HomeStackScreenProps<"HomeDetailsScreen">) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
    SuccessFlash(`Product added to cart: ${data.title}`);
  };
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeBackTitleHeader
        title={"Details"}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressCart={() => {
          navigation.navigate('CartScreenStack', {
            name: 'CartScreen',
          })
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll_container}
      >
      <View style={styles.main_container}>
        {/* Image Container */}
        <View style={styles.image_container}>
          {/* Image */}
          <Image style={styles.image} source={data?.image} />
        </View>

        {/*  */}
        <TitlePriceRateCard
          id={data?.id}
          title={data?.title}
          price={data?.price}
          age={data?.age}
          rate={data?.ratting}
          description={data?.description}
        />

        {/* Button */}
        <View style={styles.button_container}>
          <AddToCart
            style={styles.add_to_cart_container}
            title={"Add To Cart"}
            onPress={handleAddToCart}
          />

          {/* Buy Now */}
          <TouchableOpacity
            style={styles.buy_now_container}
            onPress={() => console.log("Buy Now")}
            activeOpacity={0.5}
          >
            <Text style={styles.buy_now_text}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default HomeDetails;

const data = {
  id: 1,
  image: require("@/assets/image/home/productImage/pet_food _packing.png"),
  title: "Royal Canin Dry Food",
  price: 5999,
  age: '2-4',
  ratting: "4.2k",
  description: `Product Information Let's Bite Active Puppy Dog Food 10Kg + 2kg Free inside Let's bite active puppy dog food fulfills the special needs of your puppy. The products in this range combine high quality ingredients with the science `,
};
