import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome Screen"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 0 } },
          close: { animation: "timing", config: { duration: 0 } },
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
      <Stack.Screen name="Signup Screen" component={SignupScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
