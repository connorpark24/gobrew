import React, { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { supabase } from "../utils/supabase";
import { Button, Input } from "react-native-elements";
import { COLORS, STYLES } from "../constants/theme";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    // You can implement your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // You can implement your password validation logic here
    return password.length >= 8; // Example: Password should be at least 6 characters
  };

  async function signUpWithEmail() {
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (validateEmail(email) && validatePassword(password)) {
      setLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
      if (!session)
        Alert.alert("Please check your inbox for email verification!");
      setLoading(false);
    }
  }

  return (
    <View style={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 40,
          marginTop: 60,
          fontWeight: "700",
        }}
      >
        Create Account
      </Text>
      <View style={{ marginTop: 20 }}>
        <Input
          label="Email"
          rightIcon={{
            type: "font-awesome",
            name: "envelope",
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          labelStyle={{ color: "black" }}
          inputStyle={{ fontSize: 16 }}
          inputContainerStyle={{
            borderWidth: 0.25,
            borderBottomWidth: 0.25,
            borderRadius: 8,
            borderColor: passwordError ? "red" : "grey",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        />
      </View>
      <View style={{ marginTop: 12 }}>
        <Input
          label="Password"
          rightIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
          labelStyle={{ color: "black" }}
          inputStyle={{ fontSize: 16 }}
          inputContainerStyle={{
            borderWidth: 0.25,
            borderBottomWidth: 0.25,
            borderRadius: 8,
            borderColor: passwordError ? "red" : "grey",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        />
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button
          buttonStyle={STYLES.authButton}
          titleStyle={{
            fontSize: 18,
            fontWeight: "500",
          }}
          title="Sign up"
          onPress={() => signUpWithEmail()}
        />
      </View>

      <View style={{ marginTop: 40, marginLeft: 16 }}>
        <Text style={{ fontSize: 16 }}>Already have an account?</Text>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.primary,
            fontWeight: "500",
            marginTop: 4,
          }}
          onPress={() => navigation.navigate("Login Screen")}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;
