import React from "react";
import { View, Text, TextInput } from "react-native";
import { STYLES } from "../constants/theme";

const ProfileInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline,
  isError,
}) => {
  return (
    <View>
      <Text style={{ marginBottom: 4 }}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[
          STYLES.profileInputContainer,
          multiline && { height: 80 },
          isError
            ? {
                borderColor: "red",
                borderWidth: 1,
              }
            : null,
        ]}
        autoCapitalize="none"
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
};

export default ProfileInput;
