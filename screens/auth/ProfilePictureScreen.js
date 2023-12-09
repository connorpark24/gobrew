import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { supabase } from "../../utils/supabase";
import { COLORS, STYLES } from "../../constants/theme";
import { useProfileStore } from "../../store/store";
import ImagePickerComp from "../../components/ImagePicker";

const ProfilePictureScreen = ({ navigation }) => {
  const { profilePicture, setProfilePicture, setOnboarded, session } =
    useProfileStore();

  const uploadImage = async (imageFile) => {
    const filePath = `${session.user.id}/${imageFile.name}`;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(filePath, imageFile);

    if (error) throw error;
    return filePath;
  };

  async function updateProfile() {
    try {
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        onboarded: true,
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
      setOnboarded(true);
    }
  }

  return (
    <ScrollView contentContainerStyle={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 28,
          marginTop: 20,
          fontWeight: "700",
        }}
      >
        Add a Profile Picture
      </Text>
      <View style={{ alignItems: "center", rowGap: 12, marginTop: 40 }}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            alignSelf: "center",
          }}
          source={profilePicture}
        />
        <ImagePickerComp />
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
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
          }}
        >
          Finish!
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfilePictureScreen;
