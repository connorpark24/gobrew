import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "../screens/FavoritesScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";

const Stack = createNativeStackNavigator();

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites Screen"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        title: "",
        transitionSpec: {
          open: { animation: "timing", config: { duration: 100 } },
          close: { animation: "timing", config: { duration: 100 } },
        },
      }}
    >
      <Stack.Screen name="Favorites Screen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
