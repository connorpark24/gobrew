import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main" 
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        title: "",
        headerShadowVisible: false
      }}>
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

export default UserStackNavigator