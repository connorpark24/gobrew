import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, FONTSTYLES, STYLES } from "../constants/theme";
import { supabase } from "../utils/supabase";
import { Input } from "react-native-elements";

const SettingsScreen = ({ navigation, session }) => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
  }

  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [clubs, setClubs] = useState("");
  const [experiences, setExperiences] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`first_name, last_name`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFirstName(data.firstName);
        setLastName(data.lastName);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ first_name, last_name }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        first_name,
        last_name,
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
        { flexDirection: "column", alignItems: "center" },
      ]}
    >
      <Input
        label="First Name"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        autoCapitalize={"none"}
        labelStyle={[FONTSTYLES.regular, { color: "black" }]}
        inputStyle={{ fontSize: 16 }}
        inputContainerStyle={STYLES.inputContainer}
      />
      <Input
        label="Last Name"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        autoCapitalize={"none"}
        labelStyle={[FONTSTYLES.regular, { color: "black" }]}
        inputStyle={{ fontSize: 16 }}
        inputContainerStyle={STYLES.inputContainer}
      />

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
        title="Log out"
        onPress={() => signOut()}
      />
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
        title={loading ? "Loading ..." : "Update profile"}
        onPress={() => updateProfile({ firstName, lastName })}
        disabled={loading}
      />
    </View>
  );
};

export default SettingsScreen;
