import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ClubsScreen from '../screens/ClubsScreen';
import JoinNetworkScreen from '../screens/JoinNetworkScreen'

const Stack = createNativeStackNavigator();

const ClubStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Clubs" 
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Clubs" component={ClubsScreen} />
      <Stack.Screen name="Join Network" component={JoinNetworkScreen} />
    </Stack.Navigator>
  );
};

export default ClubStackNavigator