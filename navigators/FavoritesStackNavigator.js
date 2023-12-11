import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "../screens/favorites/FavoritesScreen";

const Stack = createNativeStackNavigator();

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites Screen"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerShown: false,
        headerTitleAlign: "center",
        title: "",
      }}
    >
      <Stack.Screen name="Favorites Screen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
