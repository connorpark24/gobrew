import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import UserDetailsScreen from "../screens/clubs/UserDetailsScreen";
import ConnectScreen from "../screens/home/ConnectScreen";
import NotificationsScreen from "../screens/home/NotificationsScreen.js";
import FavoritesScreen from "../screens/home/FavoritesScreen";

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
      <Stack.Screen
        name="User Details"
        component={UserDetailsScreen}
        options={{ gestureDirection: "vertical" }}
      />
      <Stack.Screen name="Connect" component={ConnectScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
