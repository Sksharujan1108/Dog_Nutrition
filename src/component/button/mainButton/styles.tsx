import { ColorSheet } from '@/utlis/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  button_root: {
    width: '100%',
    height: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: ColorSheet.Secondary,
    paddingHorizontal: wp(2),
  },
  title_txt: {
    fontSize: Platform.OS == 'android' ? RFValue(18) : RFValue(14),
    color: ColorSheet.Primary,
    fontWeight: '700',
  },
});
