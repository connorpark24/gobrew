import React, { useState } from "react";
import { View, TextInput, Alert, Text } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, STYLES } from "../../constants/theme";
import { supabase } from "../../utils/supabase";

const SettingsScreen = () => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
  }

  return (
    <View
      style={[
        STYLES.mainContainer,
        { flexDirection: "column", alignItems: "center", rowGap: 20 },
      ]}
    >
      <Text style={STYLES.header}>Settings</Text>

      <Button
        buttonStyle={{
          backgroundColor: COLORS.primary,
          width: 320,
          height: 40,
          borderRadius: 12,
          marginTop: 20,
        }}
        titleStyle={{
          fontSize: 16,
          fontWeight: "500",
        }}
        title="Log out"
        onPress={() => signOut()}
      />
    </View>
  );
};

export default SettingsScreen;
