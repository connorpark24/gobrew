import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { STYLES, COLORS, FONTSTYLES } from "../../constants/theme";

const ConnectScreen = () => {
  return (
    <View style={STYLES.mainContainer}>
      <View style={styles.section}>
        <Text style={FONTSTYLES.medium}>Google Calendar Availability</Text>
        {/* Display Google Calendar availability here */}
        <Text>Monday: 9 AM - 5 PM</Text>
        <Text>Tuesday: 10 AM - 6 PM</Text>
      </View>

      <View style={styles.section}>
        <TextInput
          style={styles.messageInput}
          multiline
          placeholder="Leave a message here..."
        />
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageInput: {
    height: 120,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  connectButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  connectButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ConnectScreen;
