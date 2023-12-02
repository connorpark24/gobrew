import React, { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { supabase } from "../utils/supabase";
import { Button, Input } from "react-native-elements";
import { COLORS } from "../constants/theme";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
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
        Login
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
      <View style={{}}>
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

      <View style={{ alignItems: "center" }}>
        <Button
          buttonStyle={{
            backgroundColor: COLORS.primary,
            width: 320,
            height: 50,
            borderRadius: 12,
          }}
          titleStyle={{
            fontSize: 20,
            fontWeight: "500",
          }}
          title="Log in"
          onPress={() => signInWithEmail()}
        />
      </View>

      <View style={{ marginTop: 24, marginLeft: 16 }}>
        <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.primary,
            fontWeight: "500",
            marginTop: 4,
          }}
        >
          Sign up
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

export default LoginScreen;
