import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, FONTSTYLES, STYLES } from "../constants/theme";
import { supabase } from "../utils/supabase";
import { Input } from "react-native-elements";
import { useProfileStore } from "../store/store";
import ImagePickerComp from "../components/ImagePicker";

const SettingsScreen = ({ navigation }) => {
  const {
    firstName,
    lastName,
    major,
    year,
    bio,
    setFirstName,
    setLastName,
    setMajor,
    setYear,
    setBio,
    session,
  } = useProfileStore();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
  }

  const [loading, setLoading] = useState(false);

  async function updateProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        first_name: firstName,
        last_name: lastName,
        major: major,
        year: year,
        bio: bio,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View
      style={[
        STYLES.mainContainer,
        { flexDirection: "column", alignItems: "center", rowGap: 20 },
      ]}
    >
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        defaultValue={firstName}
        style={STYLES.inputContainer}
        autoCapitalize={"none"}
        autoComplete="given-name"
      />
      <TextInput
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        defaultValue={lastName}
        style={STYLES.inputContainer}
        autoCapitalize={"none"}
        autoComplete="family-name"
      />
      <TextInput
        onChangeText={(text) => setMajor(text)}
        value={major}
        defaultValue={major}
        style={STYLES.inputContainer}
        autoCapitalize={"none"}
      />
      <TextInput
        onChangeText={(text) => setYear(text)}
        value={year}
        defaultValue={year}
        style={STYLES.inputContainer}
        autoCapitalize={"none"}
      />
      <TextInput
        onChangeText={(text) => setBio(text)}
        value={bio}
        defaultValue={bio}
        autoCapitalize={"none"}
        style={STYLES.inputContainer}
      />

      <ImagePickerComp />

      <Button
        buttonStyle={{
          backgroundColor: COLORS.primary,
          width: 320,
          height: 40,
          borderRadius: 12,
        }}
        titleStyle={{
          fontSize: 16,
          fontWeight: "500",
        }}
        title={"Update profile"}
        onPress={() => updateProfile()}
        disabled={loading}
      />

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
