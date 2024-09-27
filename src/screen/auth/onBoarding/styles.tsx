import { ColorSheet } from '@/utlis/ColorSheet';
import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        // backgroundColor: 'green',
    },
    image_container: {
        flex: 0.55,
        // backgroundColor: 'pink',
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        width: wp(100),
        height: hp(60),
        resizeMode: 'stretch',
    },
    data_container: {
        flex: 0.48,
    },
    white_container: {
        width :'100%',
        height: Platform.OS == 'ios' ? hp(50) : hp(58),
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
        alignItems: 'center',
        backgroundColor: ColorSheet.White,
    },
    icon_container: {
        position: 'absolute',
        top: -25,
        width: wp(16),
        height: wp(16),
        borderRadius: wp(16) / 2,
        paddingLeft: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorSheet.White,
    },
    title_container: {
        width: '90%',
        padding: hp(2),
        marginTop: Platform.OS == 'android' ? hp(12) : hp(10),
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    title: {
        fontSize: Platform.OS == 'android' ? RFValue(20) : RFValue(18),
        fontWeight: 'bold',
        color: ColorSheet.PrimaryText,
    },
    sub_title: {
        fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
        color: ColorSheet.SecondaryText,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: hp(2),
        lineHeight: hp(3),
    },
    button_container: {
        width: '90%',
        marginTop: Platform.OS == 'android' ? hp(5) :  hp(4),
    },
});