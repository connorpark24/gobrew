import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";

import { COLORS } from "../constants/theme.js";

const Tag = ({ text }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ fontSize: 12, color: "white" }}>{text}</Text>
    </View>
  );
};

export default Tag;
