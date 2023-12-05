import React, { useEffect, useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../utils/supabase";
import { useProfileStore } from "../store/store";

const ImagePickerComp = () => {
  const { session } = useProfileStore();
  const [selectedImage, setSelectedImage] = useState(null);

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

    if (!result.cancelled) {
      const uploadedImage = await handleImageUpload(result.uri);
      if (uploadedImage) {
        setSelectedImage(uploadedImage);
      }
    }
  };

  const handleImageUpload = async (imageUri) => {
    try {
      // Upload the image to Supabase Storage
      const { data, error } = await supabase.storage
        .from("your-storage-bucket-name")
        .upload(`profile_pictures/${session.user.id}`, imageUri, {
          contentType: "image/jpeg",
        });

      if (error) {
        alert("Error uploading image to Supabase Storage");
        return null;
      }

      // Save the image URL to the user's profile in the database
      await supabase
        .from("profiles")
        .update({
          profile_picture: data.Key,
        })
        .eq("id", session.user.id);

      return { uri: imageUri };
    } catch (error) {
      console.error("Error handling image upload:", error);
      return null;
    }
  };

  return (
    <View>
      <Button title="Update profile picture" onPress={handleImagePick} />
    </View>
  );
};

export default ImagePickerComp;
