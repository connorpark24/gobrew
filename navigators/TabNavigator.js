import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "react-native-vector-icons";
import ClubStackNavigator from "./ClubStackNavigator.js";
import MessagesNavigator from "./MessagesStackNavigator.js";
import HomeStackNavigator from "./HomeStackNavigator.js";
import ProfileStackNavigator from "./ProfileStackNavigator.js";
import OnboardingStackNavigator from "./OnboardingStackNavigator.js";
import { useProfileStore } from "../store/store.js";
import { supabase } from "../utils/supabase.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { onboarded, setOnboarded, session } = useProfileStore();
  const [loading, setLoading] = useState(true);

  async function getOnboarded() {
    try {
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`onboarded`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      setOnboarded(data.onboarded);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOnboarded();
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      {onboarded ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 72,
              padding: 4,
            },
            unmountOnBlur: true,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={26} />
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
            name="Profile"
            component={ProfileStackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="user" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <OnboardingStackNavigator />
      )}
    </>
  );
};

export default TabNavigator;
