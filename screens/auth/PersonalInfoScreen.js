import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../../utils/supabase";
import { COLORS, STYLES } from "../../constants/theme";
import { useProfileStore } from "../../store/store";
import ProfileInput from "../../components/ProfileInput";

const PersonalInfoScreen = ({ navigation }) => {
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
        year: parseInt(year),
        bio: bio,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }

      navigation.navigate("Professional Info Screen");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 36,
          marginTop: 20,
          fontWeight: "700",
        }}
      >
        Enter Info
      </Text>

      <View style={{ rowGap: 10, marginTop: 12 }}>
        <ProfileInput
          label="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First name"
        />
        <ProfileInput
          label="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="Last name"
        />
        <ProfileInput
          label="Major"
          value={major}
          onChangeText={(text) => setMajor(text)}
          placeholder="Major"
        />
        <ProfileInput
          label="Graduating Year"
          value={year.toString()}
          onChangeText={(text) => setYear(text)}
          placeholder="Graduating year"
        />
        <ProfileInput
          label="Bio"
          value={bio}
          onChangeText={(text) => setBio(text)}
          placeholder="Bio"
          multiline
        />
      </View>
      <TouchableOpacity
        style={STYLES.authButton}
        onPress={updateProfile}
        disabled={loading}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PersonalInfoScreen;
