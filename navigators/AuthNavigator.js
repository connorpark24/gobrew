import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import NewWelcomeScreen from "../screens/auth/NewWelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Personal Info Screen"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        title: "",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 0 } },
          close: { animation: "timing", config: { duration: 0 } },
        },
      }}
    >
      <Stack.Screen
        name="Welcome Screen"
        component={NewWelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Signup Screen" component={SignupScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
