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
        padding: hp(2),
        marginRight: Platform.OS == 'android' ? hp(2) : hp(1.5),
        marginBottom: hp(2),
        borderWidth: 1,
        borderRadius: hp(3),
        borderColor: ColorSheet.SearchText,
    },
    title_text :{
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(11),
        fontWeight: '500',
        color: ColorSheet.PrimaryText,
    },
});
