import { ColorSheet } from "@/utlis/ColorSheet";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  icon2Container: {
    width: wp(6),
    height: wp(6),
    padding: hp(0.5),
    backgroundColor: "#FC003C",
    borderWidth: 2,
    borderColor: ColorSheet.CheckBoxBorder,
    borderRadius: 5,
  },
  emptyicon: {
    backgroundColor: "white",
  },
  text: {
    marginRight: "auto",
  },
});
