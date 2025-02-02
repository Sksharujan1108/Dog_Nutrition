import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Filter from "@/assets/svg/home/Filter.svg";
import HomeHeader from "@/component/homeHeader";
import SearchInput from "@/component/input/SearchInput";
import { Constants } from "./constants";
import HomeOfferCart from "@/component/homeOfferCart";
import HomeProductList from "@/component/homeProductList";
import { HomeStackScreenProps } from "@/navigation/navigation_Models/app_Models/home/home_Models";
import { addToCart } from "@/feature/slices/cartSlices";
import { useAppDispatch, useAppSelector } from "@/feature/stateHook";
import { SuccessFlash } from "@/utlis/flashMessage";

const Home = ({ navigation }: HomeStackScreenProps<"HomeScreen">) => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  // const cart = useAppSelector((state) => state.cart.cart);
  // console.log('cart New', cart);

  // filter Product
  const filteredProduct = productData.filter((product) =>
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  // Function to handle adding products to the cart
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
    SuccessFlash(`Product added to cart: ${item.title}`);
    // console.log(`Product added to cart: ${item.title}`);
  };

  return (
    <View style={styles.root}>
      <HomeHeader
        name={profileData?.name}
        location={profileData?.location}
        onPress={() => {
          navigation.navigate("CartScreenStack", {
            name: "CartScreen",
          });
        }}
      />
      <View style={styles.main_Container}>
        <ScrollView
          contentContainerStyle={styles.scroll_view_container}
          showsVerticalScrollIndicator={false}
        >
          {/* Search Filter */}
          <View style={styles.search_filter_container}>
            {/* Search */}
            <SearchInput
              style={styles.search_container}
              placeholder={Constants.SEARCH}
              value={search}
              onChangeText={(text: any) => {
                setSearch(text);
              }}
              onPressClose={() => {
                setSearch("");
              }}
            />

            {/* Filter */}
            <TouchableOpacity
              style={styles.filterBtn}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('SearchScreenStack' ,{
                  name: 'SearchScreen'
                })
              }}
            >
              <Filter />
            </TouchableOpacity>
          </View>

          {/* Offer Card */}
          <HomeOfferCart
            title={offerData?.title}
            offer={offerData?.offer}
            image={offerData?.image}
          />

          {/* Product List */}
          <HomeProductList
            data={filteredProduct}
            onPressDetails={() => {
              navigation.navigate("HomeDetailsScreen");
            }}
            onPressAddToCart={(item: any) => handleAddToCart(item)}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const profileData = {
  name: "Sk Sarujan",
  location: "Jaffna, Chunnakam",
};

const offerData = {
  image: require("@/assets/image/home/home_offer_img.png"),
  title: "Combo Offer Discount",
  offer: "Up to 30% off",
  description: "Use code COMBO30 and grab offer.",
};

const productData = [
  {
    id: 1,
    image: require("@/assets/image/home/productImage/pedigree-removebg.png"),
    price: 5000,
    ratting: "4.2k",
    title: "Pedigree 3kg - Adult Dog",
  },
  {
    id: 2,
    image: require("@/assets/image/home/productImage/Chappi.png"),
    price: 4999,
    ratting: "4.2k",
    title: "Chappi Adult Dog Food ",
  },
  {
    id: 3,
    image: require("@/assets/image/home/productImage/DroolsDog.png"),
    price: 5999,
    ratting: "4.2k",
    title: "Drools Dog Food ",
  },
  {
    id: 4,
    image: require("@/assets/image/home/productImage/ClassicPet.png"),
    price: 5550,
    ratting: "4.2k",
    title: "Classic Pet - Adult 15KG",
  },
  {
    id: 5,
    image: require("@/assets/image/home/productImage/Royal.png"),
    price: 5000,
    ratting: "4.2k",
    title: "Royal Cain Dry Food",
  },
  {
    id: 6,
    image: require("@/assets/image/home/productImage/drools.png"),
    price: 3000,
    ratting: "4.2k",
    title: "Drools Dog Food",
  },
  {
    id: 7,
    image: require("@/assets/image/home/productImage/BlackHawk.png"),
    price: 6000,
    ratting: "4.2k",
    title: "BlackHawk Puppy",
  },
  {
    id: 8,
    image: require("@/assets/image/home/productImage/HappyDog.png"),
    price: 2500,
    ratting: "4.2k",
    title: "Happy Dog Supreme Young",
  },
];
