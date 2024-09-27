import { ColorSheet } from '@/utlis/ColorSheet';
import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS == 'android' ? hp(20) : hp(18),
    marginTop: hp(1),
    padding: hp(2),
    justifyContent: 'center',
    borderRadius: hp(2),
    backgroundColor: ColorSheet.Shadow,
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text_container: {},
  title_text: {
    width: hp(15),
    fontSize: RFValue(14),
    fontWeight: '800',
    color: ColorSheet.AppBackground,
    // backgroundColor: 'red'
  },
  offer_text: {
    marginTop :hp(0.5),
    fontSize: RFValue(13),
    fontWeight: '700',
    color: ColorSheet.Secondary,
  },
  description_text_1: {
    width: hp(18),
    marginTop :hp(0.5),
    fontSize: RFValue(13),
    fontWeight: '400',
    color: ColorSheet.SecondaryText,
    // backgroundColor: 'red'
  },
  description_text_2: {
    fontSize: RFValue(13),
    fontWeight: '400',
    color: ColorSheet.Secondary,
  },
  image_container: {
    width: '40%',
    height: hp(17),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // backgroundColor: 'pink'
  },
});
