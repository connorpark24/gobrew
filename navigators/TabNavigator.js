import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "react-native-vector-icons";
import ClubStackNavigator from "./ClubStackNavigator.js";
import MessagesNavigator from "./MessagesNavigator.js";
import UserStackNavigator from "./UserStackNavigator.js";
import FavoritesStackNavigator from "./FavoritesStackNavigator.js";
import ProfileStackNavigator from "./ProfileStackNavigator.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 72,
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
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" color={color} size={26} />
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
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
