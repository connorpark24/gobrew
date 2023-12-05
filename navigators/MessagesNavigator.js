import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
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
      <Stack.Screen name="Welcome Screen" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
