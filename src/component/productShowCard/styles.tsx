import { ColorSheet } from "@/utlis/ColorSheet";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: hp(2),
    marginTop: hp(2),
    flexDirection:'row',
    backgroundColor: ColorSheet.Primary,
    borderRadius: hp(2),
  },
  image_container: {
    width: wp(26),
    height: hp(13),
    borderRadius: hp(2),
    padding: hp(1),
    backgroundColor: '#C4C4C4',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  text_container: {
    width: '45%',
    marginLeft: hp(2),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red'
  },
  title_text: {
    width: '100%',
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: "700",
    color: ColorSheet.PriceText,
    lineHeight: 25,
    // backgroundColor: 'pink'
  },
  price_text: {
    marginTop: hp(0.5),
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: "700",
    color: ColorSheet.PrimaryText,
  },
  button_container: {
    width: wp(20),
    marginTop: Platform.OS == 'android' ? hp(1) : hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle_container: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: ColorSheet.PrimaryText,
  },
  count_text: {
    fontSize: RFValue(13),
    fontWeight: "700",
    color: ColorSheet.PriceText,
  },
  delete_button: {
    position: 'absolute',
    top: hp(1.5),
    right: hp(1.5),
  },
});
