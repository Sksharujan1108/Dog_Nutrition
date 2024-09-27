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
    height: hp(9),
    padding: hp(2),
    marginTop: Platform.OS == 'android' ? hp(6) : 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: ColorSheet.White,
    borderRadius: hp(1),
  },
  shadow_container: {
    flex: 0.13,
    height: hp(5),
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: ColorSheet.SearchText,
    borderRadius: 10,
  },
  title_text: {
    fontSize: RFValue(14),
    color: ColorSheet.InputText,
    fontWeight: "400",
  },
});
