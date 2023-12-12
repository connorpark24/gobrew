import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { STYLES, COLORS } from "../../constants/theme";

const NotificationsScreen = () => {
  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={STYLES.header}>Notifications</Text>
    </ScrollView>
  );
};

export default NotificationsScreen;
