import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile Screen"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        // headerShadowVisible: false,
        title: "",
        transitionSpec: {
          open: { animation: "timing", config: { duration: 100 } },
          close: { animation: "timing", config: { duration: 100 } },
        },
      }}
    >
      <Stack.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              name="settings"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Settings Screen")}
            />
          ),
        })}
      />
      <Stack.Screen name="Settings Screen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
