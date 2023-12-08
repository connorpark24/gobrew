import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GroupsScreen from "../screens/clubs/ClubsScreen";
import JoinNetworkScreen from "../screens/clubs/JoinNetworkScreen";
import ClubDetailsScreen from "../screens/clubs/ClubDetailsScreen";
import UserDetailsScreen from "../screens/clubs/UserDetailsScreen";
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
        component={GroupsScreen}
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
