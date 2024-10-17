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
    padding: hp(1.5),
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ColorSheet.Primary,
    borderRadius: hp(1),
  },
  text_container: {
    width: "60%",
    // backgroundColor: 'pink'
  },
  title: {
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: "700",
    color: ColorSheet.InputText,
  },
  see_more_button: {
    width: Platform.OS == 'android' ? hp(14) : hp(13),
    height: Platform.OS == 'android' ? hp(6) : hp(5),
    marginTop: hp(1),
    backgroundColor: ColorSheet.Secondary,
    borderRadius: hp(1),
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: 'flex-end',
  },
  button_text: {
    fontSize: RFValue(15),
    fontWeight: "600",
    color: ColorSheet.Primary,
  },
  image_container: {
    width: wp(25),
    height: hp(12),
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
