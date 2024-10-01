import { ColorSheet } from "@/utlis/ColorSheet";
import { StyleSheet, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll_view_container: {
    flexGrow: 1,
    paddingBottom: hp(5),
  },
  main_container: {
    flex: 1,
    paddingHorizontal: hp(2),
    marginTop: Platform.OS == "android" ? hp(1) : 0,
    // backgroundColor: 'pink'
  },
  payment_method_container: {
    width: "100%",
    marginTop: hp(1),
    marginBottom: hp(2),
    // backgroundColor: 'red'
  },
  payment_text: {
    fontSize: Platform.OS == "android" ? RFValue(15) : RFValue(14),
    fontWeight: "600",
    color: ColorSheet.InputText,
  },
  payment_method_view: {
    width: "100%",
    height: hp(6),
    paddingHorizontal: hp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: ColorSheet.BorderColor,
  },
  card_text_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(38),
    // backgroundColor: 'yellow'
  },
  cash_text: {
    marginLeft: Platform.OS == "android" ? 0 : hp(2),
    fontSize: Platform.OS == "android" ? RFValue(14) : RFValue(13),
    fontWeight: "600",
    color: ColorSheet.AppBackground,
  },
  check_box_container: {
    width: Platform.OS == "android" ? hp(3.5) : hp(3),
    height: Platform.OS == "android" ? hp(3.5) : hp(3),
    borderRadius: Platform.OS == "android" ? hp(3.5) / 2 : hp(3) / 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: ColorSheet.textDefaultColor,
    // backgroundColor: 'green',
  },
});
