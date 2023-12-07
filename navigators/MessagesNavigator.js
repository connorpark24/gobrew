import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessagesScreen from "../screens/MessagesScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Messages Screen"
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        title: "",
      }}
    >
      <Stack.Screen name="Messages Screen" component={MessagesScreen} />
      <Stack.Screen name="Chat Screen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
