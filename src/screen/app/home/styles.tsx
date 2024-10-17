import { ColorSheet } from "@/utlis/ColorSheet";
import { StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  main_Container: {
    width: wp(100),
    paddingHorizontal: hp(2),
    marginTop: Platform.OS == 'android' ? hp(2) : 0,
  },
  scroll_view_container: {
    flexGrow: 1,
    paddingBottom: Platform.OS == 'android' ? hp(20) :  hp(10),
  },
  search_filter_container: {
    width: "100%",
    marginTop: hp(1.5),
    marginBottom: hp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'pink'
  },
  search_container: {
    width: wp(73),
  },
  filterBtn: {
    flex: 0.8,
    borderRadius: 10,
    backgroundColor: ColorSheet.Secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
