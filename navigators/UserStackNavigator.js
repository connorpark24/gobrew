import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import HomeScreen from "../screens/HomeScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import SearchBar from "../components/SearchBar";
import ConnectScreen from "../screens/ConnectScreen";

const Stack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitle: "",
        headerStyle: { height: 20 },
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Discover" component={HomeScreen} />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
      <Stack.Screen name="Connect" component={ConnectScreen} />
    </Stack.Navigator>
  );
};

export default UserStackNavigator;
