import { ColorSheet } from "@/utlis/ColorSheet";
import { StyleSheet } from "react-native";
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ColorSheet.Primary,
    borderRadius: hp(1),
  },
  row_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text_container: {
    marginLeft: hp(1),
  },
  name_text: {
    fontSize: RFValue(13),
    fontWeight: "800",
    color: ColorSheet.AppBackground,
  },
  location_text: {
    paddingTop: hp(0.5),
    fontSize: RFValue(12),
    fontWeight: "400",
    color: ColorSheet.Text,
  },
  image_view: {
    flex: 0.25,
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorSheet.Shadow,
  },
});
