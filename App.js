import { StyleSheet } from "react-native";
import TabNavigator from "./navigators/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-url-polyfill/auto";
import { useEffect } from "react";
import { supabase } from "./utils/supabase";
import AuthNavigator from "./navigators/AuthNavigator";
import { useProfileStore } from "./store/store";

export default function App() {
  const { session, setSession } = useProfileStore();

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
          <TabNavigator />
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
