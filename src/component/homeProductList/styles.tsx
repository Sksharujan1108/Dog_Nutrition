import { ColorSheet } from "@/utlis/ColorSheet";
import { StyleSheet, Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content_container_style: {
    paddingBottom: hp(2),
  },
  container: {
    width: "44%",
    marginTop: hp(2),
    marginRight: hp(5),
    // backgroundColor: "green",
  },
  touchable_button_container: {
    width: "100%",
    height: hp(28),
    marginBottom: hp(1),
    // backgroundColor: "pink",
  },
  image_container: {
    width: "100%",
    height: hp(20),
    padding: hp(1),
    borderRadius: hp(2),
    backgroundColor: ColorSheet.Shadow,
  },
  product_image: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  text_container: {
    marginTop: hp(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price_text: {
    fontSize: RFValue(14),
    fontWeight: "600",
    color: ColorSheet.AppBackground,
  },
  ratting_text: {
    fontSize: RFValue(13),
    fontWeight: "500",
    color: ColorSheet.Text,
  },
  description_text: {
    marginTop: hp(0.5),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: "600",
    color: ColorSheet.Text,
  },
});
