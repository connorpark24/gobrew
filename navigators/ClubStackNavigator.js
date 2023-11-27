import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClubsScreen from "../screens/ClubsScreen";
import JoinNetworkScreen from "../screens/JoinNetworkScreen";
import ClubDetailsScreen from "../screens/ClubDetailsScreen";
import SearchBar from "../components/SearchBar";

const Stack = createNativeStackNavigator();

const ClubStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Clubs Screen"
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
      <Stack.Screen
        name="Clubs Screen"
        component={ClubsScreen}
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
      <Stack.Screen
        name="Join Network"
        component={JoinNetworkScreen}
        options={{
          headerBackTitleVisible: true,
        }}
      />
      <Stack.Screen name="Club Details" component={ClubDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ClubStackNavigator;
