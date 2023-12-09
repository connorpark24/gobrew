import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { COLORS, STYLES } from "../../constants/theme";
import { supabase } from "../../utils/supabase";
import { useProfileStore } from "../../store/store";
import ImagePickerComp from "../../components/ImagePicker";
import ProfileInput from "../../components/ProfileInput";

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
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
  });

  const validateInput = () => {
    let newErrors = {};
    newErrors.firstName = !firstName;
    newErrors.lastName = !lastName;
    newErrors.major = !major;
    newErrors.year = !year;
    setErrors(newErrors);

    return Object.values(newErrors).some((isError) => isError);
  };

  async function updateProfile() {
    if (validateInput()) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }

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
        student_groups: studentGroups,
        experiences: experiences,
        linkedin_profile: linkedin,
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
          source={require("../../assets/icons/default_pic.png")}
        />
        <ImagePickerComp />
      </View>

      {showError ? (
        <Text style={{ alignSelf: "center", color: "red", marginTop: 10 }}>
          Please fill out the first four fields!
        </Text>
      ) : (
        <></>
      )}

      <View style={{ rowGap: 10, marginTop: 12 }}>
        <ProfileInput
          label="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First name"
          isError={errors.firstName}
        />
        <ProfileInput
          label="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="Last name"
          isError={errors.lastName}
        />
        <ProfileInput
          label="Major"
          value={major}
          onChangeText={(text) => setMajor(text)}
          placeholder="Major"
          isError={errors.major}
        />
        <ProfileInput
          label="Graduating Year"
          value={year.toString()}
          onChangeText={(text) => setYear(text)}
          placeholder="Graduating year"
          isError={errors.year}
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
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          width: 320,
          height: 40,
          borderRadius: 12,
          alignSelf: "center",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => updateProfile()}
        disabled={loading}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
          }}
        >
          Update
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;
