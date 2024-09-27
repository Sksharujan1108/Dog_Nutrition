import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { ColorSheet } from '@/utlis/ColorSheet';

export const styles = StyleSheet.create({
    ButtonContainer: {
        borderRadius: 1,
    },
    txt_style: {
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
        fontWeight: '600',
        color: ColorSheet?.Secondary,
    },
  });
