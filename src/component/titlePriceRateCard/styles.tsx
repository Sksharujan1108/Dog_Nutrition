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
    marginTop: Platform.OS == 'android' ? hp(2) : 0,
    // backgroundColor: "red",
  },
  row_container: {
    // height: hp(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'yellow'
  },
  title_text: {
    flex: 0.8,
    fontSize: Platform.OS == 'android' ? RFValue(18) : RFValue(15),
    fontWeight: "800",
    color: ColorSheet.InputText,
    lineHeight: 25,
    // backgroundColor: 'pink'
  },
  price_container: {
    width: '40%',
    height: hp(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorSheet.Secondary,
    borderRadius: hp(1),
  },
  price_text: {
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: "800",
    color: ColorSheet.White,
  },
  rate_container: {
    marginTop: hp(1),
    flexDirection: "row",
    alignItems: "center",
  },
  rate_text: {
    fontSize: Platform.OS == 'android' ? RFValue(17) : RFValue(14),
    fontWeight: "600",
    color: ColorSheet.Text_02,
  },
  rate: {
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(13),
    fontWeight: "600",
    color: ColorSheet.InputText,
    marginLeft: wp(1),
  },
  button_container: {
    width: wp(29),
    height: hp(6),
    marginTop: Platform.OS == 'android' ? hp(3) : hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: ColorSheet.InputText,
    borderRadius: hp(3),
  },
  circle_container: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(3.5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorSheet.PrimaryText,
  },
  count_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: "700",
    color: ColorSheet.White,
  },
  description_text: {
    marginTop: Platform.OS == 'android' ? hp(3) : hp(1),
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(13),
    fontWeight: "600",
    color: ColorSheet.Text_02,
  },
  description_data: {
    marginTop: hp(1),
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: "500",
    lineHeight: Platform.OS == 'android' ? hp(3) : hp(2.4),
    color: ColorSheet.SearchText,
  },
});
