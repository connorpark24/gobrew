import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./navigators/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import Auth from "./components/Auth";
import Account from "./components/Account";
import { Session } from "@supabase/supabase-js";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthNavigator from "./navigators/AuthNavigator";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      {session && session.user ? (
        <NavigationContainer styles={styles.container} key={session.user.id}>
          <TabNavigator session={session} />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
