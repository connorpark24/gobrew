import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageManipulator } from "expo-image-manipulator";
import { supabase } from "../utils/supabase";
import { useProfileStore } from "../store/store";
import { COLORS, FONTSTYLES } from "../constants/theme";

const ImagePickerComp = () => {
  const { session, setProfilePicture } = useProfileStore();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library required!");
      }
    })();
  }, []);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uploadedImage = await handleImageUpload(result.assets[0].uri);
      if (uploadedImage) {
        setProfilePicture(uploadedImage);
      }
    }
  };

  const handleImageUpload = async (imageUri) => {
    try {
      const imageName = `profile_${
        session.user.id
      }_${new Date().getTime()}.jpg`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(imageName);

      if (uploadError) {
        console.log("Upload error" + uploadError);
        return null;
      }

      const { error } = await supabase
        .from("profiles")
        .upsert({ id: session.user.id, profile_picture: imageName });

      if (error) {
        console.log(error);
        alert("Error updating user profile");
        return null;
      }

      const imageUrl = `${
        supabase.storage.from("images").getPublicUrl(imageName).publicURL
      }`;
      return { uri: imageUrl };
    } catch (error) {
      console.log("Hello");
      console.error("Error handling image upload:", error);
      return null;
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleImagePick}
        style={{
          backgroundColor: COLORS.primary,
          width: "40%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 30,
          width: 120,
        }}
      >
        <Text style={[FONTSTYLES.small, { color: "white" }]}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComp;
