import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Routes from './src/navigation/routes';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Provider } from 'react-redux';
import store from './src/feature/store';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store = {store}>
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
      </Provider>
    </View>
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
