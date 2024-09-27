import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Routes from './src/navigation/routes';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Routes/>
        <FlashMessage
          position='top'
          floating
          statusBarHeight={Platform.OS == 'ios' ? hp(5) : hp(7)}
        />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
