import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ClubsScreen from '../screens/ClubsScreen';
import NetworkScreen from '../screens/NetworkScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue', 
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}/>
      <Tab.Screen name="Clubs" component={ClubsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}/>
      <Tab.Screen name="Network" component={NetworkScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={30} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={30} />
          ),
        }}/>
    </Tab.Navigator>
  );
};


export default TabNavigator;