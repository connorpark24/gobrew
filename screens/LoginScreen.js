import React, { useState } from "react";
import { Alert, StyleSheet, View, Text, TextInput } from "react-native";
import { supabase } from "../utils/supabase";
import { Button } from "react-native-elements";
import { COLORS } from "../constants/theme";
import { STYLES } from "../constants/theme";

const LoginScreen = ({ navigation }) => {
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
    <View style={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 36,
          marginTop: 60,
          fontWeight: "700",
        }}
      >
        Login
      </Text>

      <View
        style={{
          alignItems: "center",
          width: "100%",
          rowGap: 10,
          marginTop: 40,
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
        <Button
          buttonStyle={STYLES.authButton}
          titleStyle={{
            fontSize: 18,
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
          onPress={() => navigation.navigate("Signup Screen")}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
