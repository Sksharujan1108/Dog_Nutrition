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
        width: wp(28),
        height: wp(28),
        marginTop: Platform.OS == 'android' ? hp(0) : hp(2),
        borderRadius: wp(28) / 2,
        borderWidth: 1,
        borderColor: ColorSheet.Secondary,
        alignItems: 'center', 
        alignSelf: 'center',
    },
    image: {
        width: wp(28),
        height: wp(28),
        borderRadius: wp(28) / 2,
        resizeMode: 'cover',
    },
    edit_button: {
        position: 'absolute',
        bottom: -5,
        right: 0,
        width: wp(9),
        height: wp(9),
        borderRadius: wp(9) / 2,
        backgroundColor: ColorSheet.Secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
