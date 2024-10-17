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
        width: '100%',
        marginTop: hp(5),
        marginBottom: hp(2),
        // backgroundColor: 'red'
    },
    common_row_container: {
        marginBottom: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    common_text: {
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
        fontWeight: '500',
        color: ColorSheet.PrimaryText,
    },
    total_text: {
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
        fontWeight: '600',
        color: ColorSheet.InputText,
    },
    total_price: {
        fontSize: RFValue(14),
        fontWeight: '600',
        color: ColorSheet.InputText,
    },
});
