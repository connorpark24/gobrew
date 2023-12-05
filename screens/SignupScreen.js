import React, { useState, useEffect } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import { supabase } from "../utils/supabase";
import { COLORS, STYLES, FONTSTYLES } from "../constants/theme";
import { useProfileStore } from "../store/store";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSession } = useProfileStore();

  const validateEmail = (email) => {
    // You can implement your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // You can implement your password validation logic here
    return password.length >= 8; // Example: Password should be at least 6 characters
  };

  async function signUpWithEmail() {
    setLoading(true);

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
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
      if (!data.session)
        Alert.alert("Please check your inbox for email verification!");
      setLoading(false);
    }
  }

  return (
    <View style={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 36,
          marginTop: 120,
          fontWeight: "700",
        }}
      >
        Join GoBrew
      </Text>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          rowGap: 10,
          marginTop: 32,
        }}
      >
        <TextInput
          label="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          style={STYLES.inputContainer}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
          style={STYLES.inputContainer}
        />
        <TouchableOpacity
          style={STYLES.authButton}
          onPress={() => signUpWithEmail()}
          disabled={loading}
        >
          <Text
            style={[FONTSTYLES.regular, { fontWeight: "700", color: "white" }]}
          >
            Create Account
          </Text>
        </TouchableOpacity>
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
