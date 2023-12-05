import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import SearchBar from "../components/SearchBar";
import ConnectScreen from "../screens/ConnectScreen";

const Stack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        title: "",
        headerShadowVisible: false,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 100 } },
          close: { animation: "timing", config: { duration: 100 } },
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
      <Stack.Screen name="Connect" component={ConnectScreen} />
    </Stack.Navigator>
  );
};

export default UserStackNavigator;
