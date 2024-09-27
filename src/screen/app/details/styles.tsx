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
        paddingHorizontal: hp(2),
        marginTop: Platform.OS == 'android' ? hp(1) : 0,
        // backgroundColor: 'pink'
    },
    image_container: {
        width: '100%',
        height: Platform.OS == 'android' ? hp(30) : hp(28),
        marginTop: hp(1),
        marginBottom: hp(1),
        // backgroundColor: ColorSheet.White,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    button_container: {
        width: '100%',
        marginTop: hp(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    add_to_cart_container: {
        flex: 0.46,
        height: hp(7),
        borderRadius: hp(1),
    },
    buy_now_container: {
        flex: 0.46,
        height: hp(7),
        backgroundColor: ColorSheet.BuyButton,
        borderRadius: hp(1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buy_now_text: {
        color: ColorSheet.Primary,
        fontSize: RFValue(14),
        fontWeight: '700',
        textAlign: 'center',
    },
});
