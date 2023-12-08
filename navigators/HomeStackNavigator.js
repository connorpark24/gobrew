import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import UserDetailsScreen from "../screens/clubs/UserDetailsScreen";
import ConnectScreen from "../screens/home/ConnectScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Discover" component={HomeScreen} />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
      <Stack.Screen name="Connect" component={ConnectScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
