import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { COLORS } from "../constants/theme";
import { useHeaderHeight } from "@react-navigation/elements";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const height = useHeaderHeight();

  const handleSend = () => {
    if (inputText.trim() === "") {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length, text: inputText, sender: "user" },
    ]);
    setInputText("");
  };

  const renderMessage = ({ item }) => (
    <View
      style={item.sender === "user" ? styles.userMessage : styles.otherMessage}
    >
      <Text style={{ color: "white" }}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior={"padding"}
      keyboardVerticalOffset={height}
    >
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          justifyContent: "flex-end",
          height: "100%",
          backgroundColor: "white",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          backgroundColor: "white",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            padding: 8,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            marginRight: 8,
          }}
          placeholder={"Message..."}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 8,
            borderRadius: 8,
          }}
          onPress={handleSend}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: COLORS.primary,
    padding: 8,
    margin: 8,
    borderRadius: 8,
    maxWidth: "70%",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2ecc71",
    padding: 8,
    margin: 8,
    borderRadius: 8,
    maxWidth: "70%",
  },
});

export default ChatScreen;
