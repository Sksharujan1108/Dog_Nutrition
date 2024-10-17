import { ColorSheet } from '@/utlis/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        // flex: 1,
        marginBottom: hp(1),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height:Platform.OS == 'android' ? hp(7) : hp(6),
        paddingLeft: hp(2),
        marginTop: hp(1),
        borderColor: ColorSheet.BorderColor,
        borderWidth: 1,
        borderRadius: 12,

    },
    iconContainer: {},
    textInput: {
        flex: 1,
        fontSize: Platform.OS == 'ios' ? RFValue(12) : RFValue(12),
        fontWeight: '500',
        color: ColorSheet.InputText,
    },
    eyeIcon: {
        marginRight: hp(2),
    },
    errorText: {
        fontSize: RFValue(12),
        color: ColorSheet?.Error,
        marginTop: hp(0.5),
    },
});
