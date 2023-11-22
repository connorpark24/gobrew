import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClubsScreen from '../screens/ClubsScreen';
import JoinNetworkScreen from '../screens/JoinNetworkScreen'
import ClubDetailsScreen from '../screens/ClubDetailsScreen';

const Stack = createNativeStackNavigator();

const ClubStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Clubs" 
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Clubs" component={ClubsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Join Network" component={JoinNetworkScreen} />
      <Stack.Screen name="Club Details" component={ClubDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ClubStackNavigator