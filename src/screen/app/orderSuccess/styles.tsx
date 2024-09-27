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
    scroll_view_container: {
        flexGrow: 1,
        paddingBottom: hp(5),
    },
    main_container: {
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS == 'android' ? hp(4) : 0,
        // backgroundColor: 'pink'
    },
    success_container: {
        width: "80%",
        height: '40%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorSheet.Shadow,
        // backgroundColor: 'pink',
        borderRadius: 10,
    },
    success_text: {
        fontSize: RFValue(15),
        fontWeight: "700",
        color: ColorSheet.SuccessText,
        marginTop: hp(1),
    },
    subTitle_text: {
        width: wp(70),
        fontSize: RFValue(14),
        fontWeight: "500",
        color: ColorSheet.Text,
        textAlign: 'center',
        marginTop: hp(1.5),
    },
});
