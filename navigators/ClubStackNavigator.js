import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClubsScreen from "../screens/ClubsScreen";
import JoinNetworkScreen from "../screens/JoinNetworkScreen";
import ClubDetailsScreen from "../screens/ClubDetailsScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import SearchBar from "../components/SearchBar";

const Stack = createNativeStackNavigator();

const ClubStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Clubs Screen"
      screenOptions={{
        headerShadowVisible: false,
        title: "",
      }}
    >
      <Stack.Screen
        name="Clubs Screen"
        component={ClubsScreen}
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
      <Stack.Screen name="Join Network" component={JoinNetworkScreen} />
      <Stack.Screen name="Club Details" component={ClubDetailsScreen} />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ClubStackNavigator;
