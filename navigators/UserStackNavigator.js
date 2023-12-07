import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import ConnectScreen from "../screens/ConnectScreen";

const Stack = createNativeStackNavigator();

const UserStackNavigator = () => {
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

export default UserStackNavigator;
