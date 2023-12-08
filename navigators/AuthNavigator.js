import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import NewWelcomeScreen from "../screens/NewWelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome Screen"
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
      <Stack.Screen name="Onboarding Screen" component={OnboardingScreen} />
      <Stack.Screen name="Signup Screen" component={SignupScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
