import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { COLORS, STYLES } from "../constants/theme";
import { supabase } from "../utils/supabase";
import { useProfileStore } from "../store/store";
import ImagePickerComp from "../components/ImagePicker";
import { userData } from "../constants/data";

const EditProfileScreen = () => {
  const {
    firstName,
    lastName,
    major,
    year,
    bio,
    studentGroups,
    experiences,
    linkedin,
    profilePicture,
    setFirstName,
    setLastName,
    setMajor,
    setYear,
    setBio,
    setStudentGroups,
    setExperiences,
    setLinkedin,
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
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={STYLES.header}>Edit Profile</Text>
      <View style={{ alignItems: "center", rowGap: 12 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 60,
            alignSelf: "center",
          }}
          source={profilePicture}
        />
        <ImagePickerComp />
      </View>

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
          label="Student Groups"
          value={studentGroups}
          onChangeText={(text) => setStudentGroups(text)}
          placeholder="Student Groups"
        />
        <ProfileInput
          label="Professional Experiences"
          value={experiences}
          onChangeText={(text) => setExperiences(text)}
          placeholder="Professional Experiences"
        />
        <ProfileInput
          label="Linkedin"
          value={linkedin}
          onChangeText={(text) => setLinkedin(text)}
          placeholder="Link to Linkedin"
        />
        <ProfileInput
          label="Bio"
          value={bio}
          onChangeText={(text) => setBio(text)}
          placeholder="Bio"
          multiline
        />
      </View>
      <Button
        buttonStyle={{
          backgroundColor: COLORS.primary,
          width: 320,
          height: 40,
          borderRadius: 12,
          alignSelf: "center",
          marginTop: 20,
        }}
        titleStyle={{
          fontSize: 16,
          fontWeight: "500",
        }}
        title={"Update profile"}
        onPress={() => updateProfile()}
        disabled={loading}
      />
    </ScrollView>
  );
};

const ProfileInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline,
}) => {
  return (
    <View>
      <Text style={{ marginBottom: 4 }}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[STYLES.profileInputContainer, multiline && { height: 80 }]}
        autoCapitalize="none"
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
};

export default EditProfileScreen;
