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
    height: hp(13),
    padding: hp(1.5),
    marginTop: hp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ColorSheet.Primary,
    borderRadius: hp(1),
  },
  text_container: {
    width: "65%",
    // backgroundColor: 'pink'
  },
  title: {
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(14),
    fontWeight: "700",
    color: ColorSheet.InputText,
  },
  sub_title: {
    marginTop: hp(0.5),
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(14),
    fontWeight: "700",
    color: ColorSheet.Secondary,
  },
  image_container: {
    width: wp(20),
    height: hp(10),
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: hp(1),
  },
});
