import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { COLORS } from "../../constants/theme.js";
import { Button } from "react-native-elements";

const NewWelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
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
      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          rowGap: 24,
          marginTop: 88,
        }}
      >
        <Button
          buttonStyle={{
            backgroundColor: "white",
            width: 300,
            height: 60,
            borderRadius: 150,
            borderColor: COLORS.primary,
            borderWidth: 3,
          }}
          titleStyle={{
            color: COLORS.primary,
            fontSize: 18,
            fontWeight: "700",
          }}
          title="Create Account"
          onPress={() => navigation.navigate("Signup Screen")}
        />
        <Button
          buttonStyle={{
            backgroundColor: "white",
            width: 300,
            height: 60,
            borderRadius: 150,
            borderColor: COLORS.primary,
            borderWidth: 3,
          }}
          titleStyle={{
            color: COLORS.primary,
            fontSize: 18,
            fontWeight: "700",
          }}
          title="Log In"
          onPress={() => navigation.navigate("Login Screen")}
        />
      </View>
    </View>
  );
};

export default NewWelcomeScreen;
