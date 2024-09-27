import { ColorSheet } from "@/utlis/ColorSheet";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content_container_style: {
  },
  container: {
    width: "48%",
    padding: hp(1),
    marginTop: hp(2),
    marginRight: hp(2),
    justifyContent: "space-between",
    backgroundColor: ColorSheet.Primary,
    borderRadius: hp(2),
  },
  image_container: {
    width: '100%',
    height: hp(15),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  image: {
    width: '100%',
    height: '100%',
    position: "absolute",
    zIndex: -1,
    resizeMode: 'cover',
    borderRadius: hp(1),
  },
  video_container: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(2),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2A3240',
  },
  text_container: {
    marginTop: hp(0.5),
    // backgroundColor: 'pink'
  },
  title: {
    fontSize: Platform.OS == 'android' ? RFValue(15) :  RFValue(13),
    fontWeight: "700",
    color: ColorSheet.InputText,
  },
  level_Container: {
    width: hp(15),
    padding: hp(1),
    marginTop: hp(1),
    backgroundColor: '#E5FFE9',
    borderRadius: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  level_text: {
    fontSize: Platform.OS == 'android' ? RFValue(15) :  RFValue(13),
    fontWeight: "600",
    color: ColorSheet.Secondary,
  },
  duration_Container: {
    marginTop: hp(1),
    flexDirection: "row",
    alignItems: "center",
  },
  duration_text: {
    marginLeft: hp(1),
    marginRight: hp(1),
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(14),
    fontWeight: "700",
    color: ColorSheet.InputText,
  },
  time_text: {
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(14),
    fontWeight: "600",
    color: ColorSheet.Text,
  },
});
