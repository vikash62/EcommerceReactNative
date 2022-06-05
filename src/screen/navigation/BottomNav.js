import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicicons } from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import Home from '../Home';
import Profile from '../Profile';
import Settings from '../Settings';

export default function BottomNav() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{
      // tabBarIcon: () =>{
      //   return <Ionicicons name="home" />;
      // },
    }} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  )
}