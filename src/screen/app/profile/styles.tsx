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
    paddingHorizontal: hp(3),
    marginTop: Platform.OS == "android" ? hp(4) : 0,
    // backgroundColor: 'pink'
  },
  text_input_container: {
    width: "100%",
    marginTop: hp(1),
  },
  text_title: {
    marginTop: hp(2),
    fontSize: RFValue(13),
    fontWeight: "400",
    color: ColorSheet.AppBackground,
  },
  input_container: {
    backgroundColor: ColorSheet.InputBg,
  },
  address_text_input_container: {
    width: "100%",
    height: hp(14),
    paddingTop: hp(1),
    alignItems: "flex-start",
    textAlignVertical: "top",
    backgroundColor: ColorSheet.InputBg,
  },
  save_button_style: {
    width: "100%",
    marginTop: hp(2.5),
  },
});
