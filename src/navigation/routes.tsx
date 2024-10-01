import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@/navigation/stack/authStack/authStack';
import AppBottomTop from './tabs/mobile_bottom_tab';

const Routes = () => {
  return (
    <NavigationContainer>
      {/* change */}
      <AppBottomTop/>
    </NavigationContainer>
  )
}

export default Routes;