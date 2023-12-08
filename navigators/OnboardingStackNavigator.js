import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PersonalInfoScreen from "../screens/auth/PersonalInfoScreen";
import ProfessionalInfoScreen from "../screens/auth/ProfessionalInfoScreen";
import ProfilePictureScreen from "../screens/auth/ProfilePictureScreen";

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
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
        name="Personal Info Screen"
        component={PersonalInfoScreen}
      />
      <Stack.Screen
        name="Professional Info Screen"
        component={ProfessionalInfoScreen}
      />
      <Stack.Screen
        name="Profile Picture Screen"
        component={ProfilePictureScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
