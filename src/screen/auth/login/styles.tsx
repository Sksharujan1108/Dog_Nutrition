import { ColorSheet } from "@/utlis/ColorSheet";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'green',
  },
  scroll_container: {
    flexGrow: 1,
    paddingBottom: hp(5),
  },
  container: {
    flex: 1,
    height: hp(100),
  },
  image: {
    flex: 0.6,
    width: wp(100),
    height: hp(57),
    resizeMode: "stretch",
  },
  data_container: {
    position: "absolute",
    zIndex: 1,
    bottom: Platform.OS == 'android' ? -40 : 0,
    width: wp(100),
  },
  white_container: {
    width: "100%",
    height: Platform.OS == 'android' ? hp(55) : hp(55),
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    alignItems: "center",
    backgroundColor: ColorSheet.White,
  },
  icon_container: {
    position: "absolute",
    top: -28,
    width: wp(18),
    height: wp(18),
    borderRadius: wp(18) / 2,
    padding: hp(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorSheet.White,
  },
  icon_border_radius_container: {
    position: "absolute",
    top: 8,
    width: wp(14),
    height: wp(14),
    borderRadius: wp(14) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: ColorSheet.BorderColor_1,
    // borderColor: 'pink'
  },
  title_container: {
    width: "90%",
    marginTop: hp(6),
    alignItems: "center",
    // backgroundColor: 'red'
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: ColorSheet.PrimaryText,
  },
  sub_title: {
    fontSize: RFValue(13),
    color: ColorSheet.SecondaryText,
    fontWeight: "500",
    textAlign: "center",
    marginTop: hp(2),
  },
  textInput_container: {
    width: "100%",
    marginTop: hp(0),
    paddingHorizontal: hp(2),
    // backgroundColor: 'green'
  },
  term_and_condition_container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(2),
    paddingHorizontal: hp(2),
    // backgroundColor: 'red'
  },
  terms_and_condition_tex: {
    fontSize: RFValue(13),
    fontWeight: "700",
    color: ColorSheet.SecondaryText,
    marginLeft: hp(1),
  },
  button_container: {
    width: "90%",
    marginTop: Platform.OS == "android" ? hp(5) :  hp(4),
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(1),
    // backgroundColor: 'pink'
  },
  registerText: {
    fontSize: Platform.OS == "android" ? RFValue(14) : RFValue(13),
    fontWeight: "bold",
    color: ColorSheet.Text,
  },
});
