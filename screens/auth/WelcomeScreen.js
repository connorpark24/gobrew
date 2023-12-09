import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS } from "../../../constants/theme.js";
import { Button } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
      }}
    >
      <Image
        style={{ width: 200, height: 200, margin: 10 }}
        source={require("../../assets/icons/gobrewlogo.png")}
      />
      <Text
        style={{
          fontSize: 48,
          color: COLORS.primary,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Welcome to GoBrew!
      </Text>
      <Button
        buttonStyle={{
          backgroundColor: COLORS.primary,
          width: 300,
          height: 75,
          marginTop: 100,
          borderRadius: 16,
        }}
        titleStyle={{
          color: COLORS.secondary,
          fontSize: 20,
          fontWeight: "500",
        }}
        title="Continue"
        onPress={() => navigation.navigate("Login Screen")}
      />
    </View>
  );
};

export default WelcomeScreen;
