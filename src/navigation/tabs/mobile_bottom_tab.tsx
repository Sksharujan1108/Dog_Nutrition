import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/appStack/home/homeStack";
import ProfileStack from "../stack/appStack/profile/profileStack";
import Home from '@/assets/svg/bottomTab/Home.svg'
import Search from '@/assets/svg/bottomTab/search.svg'
import Guide from '@/assets/svg/bottomTab/guide.svg'
import Cart from '@/assets/svg/bottomTab/cart.svg'
import Profile from '@/assets/svg/bottomTab/Profile.svg'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utlis/ColorSheet";
import SearchStack from "../stack/appStack/search/searchStack";
import CartStack from "../stack/appStack/cart/cartStack";
import GuideStack from "../stack/appStack/guide/guideStack";
import GreenHome from '@/assets/svg/bottomTab/GreenHome.svg'
import GreenSearch from '@/assets/svg/bottomTab/GreenSearch.svg'
import GreenGuide from '@/assets/svg/bottomTab/GreenGuide.svg'
import GreenCart from '@/assets/svg/bottomTab/GreenCart.svg'
import GreenProfile from '@/assets/svg/bottomTab/GreenProfile.svg'

const Tab = createBottomTabNavigator();

const AppBottomTop = () => {
  return (
    <View style = {{
      flex: 1,
      // backgroundColor: 'pink'
    }}>
      <SafeAreaView
      style = {styles.root}
    >
      <StatusBar
        barStyle = 'dark-content'
        backgroundColor={'translucent'}
        translucent={true}
      />

      <Tab.Navigator
        screenOptions={
          {
            headerShown: false,
            tabBarActiveTintColor: ColorSheet.Secondary,
            tabBarInactiveTintColor: ColorSheet.textDefaultColor,

            tabBarStyle: {
                backgroundColor: ColorSheet.White,
                borderTopWidth: 0,
                height: Platform.OS == 'android' ? hp(10) : hp(7)
            },
            tabBarShowLabel: false,
          }
        }
      >
        <Tab.Screen 
          name = "HomeScreenStack" 
          component = {HomeStack} 
          options = {() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                {color == ColorSheet.Secondary 
                  ?
                    <GreenHome
                      fill={color}
                      width={26}
                      height={26}
                    />
                  : 
                    <Home
                      fill={color}
                      width={26}
                      height={26}
                    />
                }
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Home
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name = "SearchScreenStack" 
          component = {SearchStack} 
          options = {() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                {color == ColorSheet.Secondary
                  ? 
                    <GreenSearch
                    width={26}
                    height={26}
                    />
                  :
                    <Search
                      // fill={color}
                      width={26}
                      height={26}
                    />
                }
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Search
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name="CartScreenStack" 
          component={CartStack} 
          options={() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                {color == ColorSheet.Secondary
                  ?
                    <GreenCart
                      fill={color}
                      width={28}
                      height={28}
                    />
                  :
                    <Cart
                      fill={color}
                      width={28}
                      height={28}
                    />
                }
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Cart
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name="GuideScreenStack" 
          component={GuideStack} 
          options={() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                {color == ColorSheet.Secondary
                  ?
                    <GreenGuide
                      fill={color}
                      width={26}
                      height={26}
                    />
                  :
                    <Guide
                      fill={color}
                      width={26}
                      height={26}
                    />
                }
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Guide
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name="ProfileScreenStack" 
          component={ProfileStack} 
          options={() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                {color == ColorSheet.Secondary
                  ?
                    <GreenProfile
                      fill={color}
                      width={26}
                      height={26}
                    />
                  :
                    <Profile
                      fill={color}
                      width={28}
                      height={28}
                    />
                }
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Profile
                </Text>
              </View>
            ),
          })}
        />
      </Tab.Navigator>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? hp(2) : hp(0),
    // backgroundColor: 'red'
  },
  labelText: {
    paddingTop: Platform.OS == 'ios' ? hp(0.5) : 0,
    fontSize: Platform.OS == 'ios' ? RFValue(11) : RFValue(14),
    fontWeight: '500',
  },
});

export default AppBottomTop;
