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
    marginTop: Platform.OS == "android" ? hp(1) : 0,
    // backgroundColor: 'pink'
  },
  search_filter_container: {
    width: "100%",
    marginTop: hp(1.5),
    marginBottom: hp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'pink'
  },
  article_text: {
    marginTop: hp(2),
    fontSize: RFValue(20),
    fontWeight: "600",
    color: ColorSheet.InputText,
  },
  video_text: {
    marginTop: hp(3),
    fontSize: RFValue(20),
    fontWeight: "600",
    color: ColorSheet.InputText,
  },
});
