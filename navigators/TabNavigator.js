import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS } from "../constants/theme.js";

import ClubStackNavigator from "./ClubStackNavigator.js";
import UserStackNavigator from "./UserStackNavigator.js";
import FavoritesStackNavigator from "./FavoritesStackNavigator.js";
import ProfileStackNavigator from "./ProfileStackNavigator.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: "#777777",
        tabBarLabelStyle: { fontSize: 12 },
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          padding: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={UserStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Clubs"
        component={ClubStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="earth-outline" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
