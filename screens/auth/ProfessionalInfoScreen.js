import React, { useState } from "react";
import { Alert, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { supabase } from "../../utils/supabase";
import { COLORS, STYLES } from "../../../constants/theme";
import { useProfileStore } from "../../store/store";
import ProfileInput from "../../../components/ProfileInput";

const ProfessionalInfoScreen = ({ navigation }) => {
  const {
    studentGroups,
    experiences,
    linkedin,
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
    <ScrollView contentContainerStyle={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 24,
          marginTop: 20,
          fontWeight: "700",
        }}
      >
        Add Experiences
      </Text>

      <View style={{ rowGap: 10, marginTop: 12 }}>
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
      </View>
      <TouchableOpacity
        style={STYLES.authButton}
        onPress={() => navigation.navigate("Profile Picture Screen")}
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

export default ProfessionalInfoScreen;
