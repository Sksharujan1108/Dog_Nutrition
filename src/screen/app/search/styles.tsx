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
  main_container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? hp(1) : 0,
    // backgroundColor: 'pink'
  },
  scroll_view_container: {
    flexGrow: 1,
    paddingBottom: hp(5),
  },
  search_filter_container: {
    width: "100%",
    marginTop: hp(1.5),
    marginBottom: hp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: hp(2),
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
  filter_container: {
    width: '100%',
    marginTop: hp(2),
    paddingHorizontal: hp(2),
    // backgroundColor: 'pink',
  },
  filter_text: {
    color: ColorSheet.AppBackground,
    fontSize: RFValue(15),
    fontWeight: "500",
    textAlign: "center",
  },
  select_categories_container: {
    width: "100%",
    marginTop: hp(2),
    // backgroundColor: 'red'
  },
  select_categories_text: {
    marginBottom: hp(2),
    color: ColorSheet.SecondaryText,
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(14),
    fontWeight: "500",
  },
  save_apply_style: {
    width: "100%",
    marginTop: hp(2.5),
  },

  slider_container: {
    marginVertical: hp(2),
    // backgroundColor: 'pink'
  },
  slider: {
    width: "100%",
    height: hp(5),
  },
  slider_labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(1),
  },
  price_label: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    color: "#333",
  },
});
