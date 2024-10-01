import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import HomeBackTitleHeader from "@/component/backTitleHeader";
import { styles } from "./styles";
import { CartStackScreenProps } from "@/navigation/navigation_Models/app_Models/cart/cart_Models";
import MainButton from "@/component/button/mainButton";
import ProductShowCard from "@/component/productShowCard";
import TotalListCard from "@/component/TotalListCard";
import Card from '@/assets/svg/cart/credit-card.svg';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ErrorFlash } from "@/utlis/flashMessage";
import { useAppDispatch, useAppSelector } from "@/feature/stateHook";
import { decrementQuantity, deleteFromCart, incrementQuantity, SelectItems, selectTotal } from "@/feature/slices/cartSlices";

const Cart = ({ navigation }: CartStackScreenProps<"CartScreen">) => {
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const selectedTotal = useAppSelector(selectTotal)
  console.log('selectedTotal', selectedTotal);

  const selectedItem = useAppSelector(SelectItems);
  console.log('selectedItem', selectedItem);
  
  const dispatch = useAppDispatch();

  const handleOrderPlace = () => {
    if (!isChecked) {
      ErrorFlash("Please select a payment method");
    } else {
      navigation.navigate('OrderSuccessScreen'); // Proceed only if checkbox is checked
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeBackTitleHeader
        title={"Cart"}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressCart={() => {}}
      />
      <View style={styles.main_container}>
        <ScrollView
          contentContainerStyle={styles.scroll_view_container}
          showsVerticalScrollIndicator={false}
        >
          {/* Product Card */}
          {selectedItem?.map((item: any) => (
            <ProductShowCard 
              key={item.id}
              title={item.title}
              price={item.price} // Multiply price by quantity
              image={item.image}
              quantity={item.quantity}
              onPressIncrease={() => dispatch(incrementQuantity(item.id))}
              onPressDecrease={() => dispatch(decrementQuantity(item.id))}
              onPressDelete={() => dispatch(deleteFromCart(item.id))}
            />
          ))}

          {/* Total Card */}
          <TotalListCard
            subTotal={selectedTotal}
            shipping={"100.00"}
            total={(selectedTotal + 100).toLocaleString()} // Calculating the total dynamically
          />

          {/* Payment Method */}
          <View style = {styles.payment_method_container}>
            <Text style = {styles.payment_text}>{'Payment method'}</Text>

            <View style = {styles.payment_method_view}>
              <View style = {styles.card_text_container}>
                <Card/>
                <Text style = {styles.cash_text}>{'Cash on delivery'}</Text>
              </View>
              {/* circle */}
              <TouchableOpacity
                style = {styles.check_box_container}
                activeOpacity={0.6}
                onPress={() => setIsChecked(!isChecked)} // Toggle state
              >
                {isChecked && (
                  <AntDesign name="check" size={18} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Button */}
          <MainButton
            title={"order placed"}
            onPress={handleOrderPlace}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;

const data = [
  {
    id: 1,
    image: require("@/assets/image/home/productImage/pedigree-removebg.png"),
    title: "Royal Canin Dry Food",
    price: 5999,
    quantity: 1,

  },
  {
    id: 2,
    image: require("@/assets/image/home/productImage/pedigree-removebg.png"),
    title: "Royal Dry Food",
    price: 999,
    quantity: 1,
  },
  {
    id: 3,
    image: require("@/assets/image/home/productImage/pedigree-removebg.png"),
    title: "Royal Dry Food",
    price: 999,
    quantity: 2,
  },
  {
    id: 4,
    image: require("@/assets/image/home/productImage/pedigree-removebg.png"),
    title: "Royal Dry Food",
    price: 999,
    quantity: 1,
  },
  {
    id: 5,
    image: require("@/assets/image/home/productImage/pedigree-removebg.png"),
    title: "Royal Dry Food",
    price: 999,
    qty: 1,
  },
];
