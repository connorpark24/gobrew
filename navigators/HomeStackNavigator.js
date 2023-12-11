import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import UserDetailsScreen from "../screens/clubs/UserDetailsScreen";
import ConnectScreen from "../screens/home/ConnectScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator.js";
import NotificationsScreen from "../screens/home/NotificationsScreen.js";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{
        title: "",
      }}
    >
      <Stack.Screen name="Discover" component={HomeScreen} />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
      <Stack.Screen name="Connect" component={ConnectScreen} />
      <Stack.Screen name="Favorites" component={FavoritesStackNavigator} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
