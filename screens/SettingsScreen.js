import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, STYLES } from "../constants/theme";
import { supabase } from "../utils/supabase";

const SettingsScreen = ({ navigation }) => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
  }

  return (
    <View style={STYLES.mainContainer}>
      <Button
        buttonStyle={{
          backgroundColor: COLORS.primary,
          width: 320,
          height: 50,
          borderRadius: 12,
        }}
        titleStyle={{
          fontSize: 20,
          fontWeight: "500",
        }}
        title="Log out"
        onPress={() => signOut()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
});

export default SettingsScreen;
