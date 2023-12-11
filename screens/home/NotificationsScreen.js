import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { STYLES, COLORS, FONTSTYLES } from "../../constants/theme";
import { useProfileStore } from "../../store/store";
import { supabase } from "../../utils/supabase";

const NotificationsScreen = ({ route }) => {
  const { session } = useProfileStore();

  return (
    <View style={STYLES.mainContainer}>
      <Text>Notificaitons</Text>
    </View>
  );
};

export default NotificationsScreen;
