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
        marginRight: hp(2),
        marginBottom: hp(2),
        borderWidth: 1,
        borderRadius: hp(3),
        borderColor: ColorSheet.SearchText,
    },
    title_text :{
        fontSize: RFValue(14),
        fontWeight: '500',
        color: ColorSheet.PrimaryText,
    },
});
