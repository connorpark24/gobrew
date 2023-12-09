import React, { useState, useEffect } from "react";
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
import { COLORS } from "../../constants/theme";
import { useHeaderHeight } from "@react-navigation/elements";
import { AntDesign } from "@expo/vector-icons";
import { supabase } from "../../utils/supabase";
import { useProfileStore } from "../../store/store";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const { session } = useProfileStore();
  const height = useHeaderHeight();

  // useEffect(() => {
  //   const subscription = supabase
  //     .from(`messages:sender_id=eq.${session.user.id}`)
  //     .on("INSERT", (payload) => {
  //       setMessages((prevMessages) => [...prevMessages, payload.new]);
  //     })
  //     .subscribe();

  //   return () => subscription.unsubscribe();
  // }, [session.user.id]);

  const handleSend = async () => {
    if (inputText.trim() === "") {
      return;
    }

    const messageData = {
      text: inputText,
      sender_id: session.user.id,
      receiver_id: 1,
    };

    const { error } = await supabase.from("messages").upsert(messageData);

    if (error) {
      console.error("Error sending message:", error);
    } else {
      // Message sent successfully
      setInputText("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={item.sender === "user" ? styles.userMessage : styles.otherMessage}
    >
      <Text style={{ color: "white", fontSize: 16 }}>{item.text}</Text>
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
          borderTopWidth: 0.25,
          borderTopColor: "#ccc",

          backgroundColor: "white",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            padding: 8,
            borderColor: "#ccc",
            borderWidth: 0.5,
            borderRadius: 30,
            marginRight: 8,
          }}
          placeholder={"Message..."}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 16,
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleSend}
        >
          <AntDesign name="arrowup" color="white" size={20} />
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
