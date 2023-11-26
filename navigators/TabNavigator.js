import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme.js";

import ProfileScreen from "../screens/ProfileScreen";
import ClubStackNavigator from "./ClubStackNavigator.js";
import UserStackNavigator from "./UserStackNavigator.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12 },
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={UserStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Clubs"
        component={ClubStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="earth-outline" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
