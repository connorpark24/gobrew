import React from "react";
import { View, Text, TextInput } from "react-native";
import { STYLES } from "../constants/theme";

const ProfileInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline,
  isValid,
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

export default ProfileInput;
