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

const ConnectScreen = ({ route, navigation }) => {
  const { currentUser } = route.params;

  const { session } = useProfileStore();
  const [message, setMessage] = useState("");
  const [requested, setRequested] = useState(false);

  const handleConnect = async () => {
    try {
      const { error } = await supabase.from("connects").upsert({
        requester_id: session?.user.id,
        advisor_id: currentUser.id,
        message: message,
        date: new Date(),
      });

      if (error) {
        console.error("Error creating connect request:", error);
        return;
      }

      setMessage("");
      setRequested(true);
      setTimeout(() => navigation.goBack(), 1000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={STYLES.mainContainer}>
      <View
        style={{
          marginBottom: 20,
        }}
      >
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
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={handleConnect}
        >
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
        {requested ? <Text>Request sent!</Text> : <></>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  connectButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ConnectScreen;
