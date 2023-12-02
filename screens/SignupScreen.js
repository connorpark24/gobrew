import React, { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { supabase } from "../utils/supabase";
import { Button, Input } from "react-native-elements";
import { COLORS } from "../constants/theme";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
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

  return (
    <View style={{ marginTop: 40, paddingHorizontal: 24 }}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 40,
          marginTop: 60,
          fontWeight: "700",
        }}
      >
        Sign Up
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
            borderColor: "grey",
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
            borderColor: "grey",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        />
      </View>
      <View>
        <Input
          label="Retype Password"
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
            borderColor: "grey",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        />
      </View>

      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button
          buttonStyle={{
            backgroundColor: COLORS.primary,
            width: 320,
            height: 75,
            marginTop: 100,
            borderRadius: 16,
          }}
          titleStyle={{
            fontSize: 20,
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
        >
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: 20,
  },
});

export default SignupScreen;
