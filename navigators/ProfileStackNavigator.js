import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SettingsScreen from "../screens/profile/SettingsScreen";
import React from "react";
import { useProfileStore } from "../store/store";
import EditProfileScreen from "../screens/profile/EditProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile Screen"
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        title: "",
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
              onPress={() => navigation.navigate("Settings")}
            />
          ),
        })}
      />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
