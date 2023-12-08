import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { supabase } from "../utils/supabase";
import { COLORS } from "../constants/theme";
import { STYLES, FONTSTYLES } from "../constants/theme";
import { useProfileStore } from "../store/store";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  }

  return (
    <View style={STYLES.mainContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 36,
          marginTop: 80,
          fontWeight: "700",
        }}
      >
        Sign In
      </Text>

      <View
        style={{
          alignItems: "center",
          width: "100%",
          rowGap: 20,
          marginTop: 24,
        }}
      >
        <TextInput
          label="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          style={STYLES.authInputContainer}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          autoCapitalize={"none"}
          style={STYLES.authInputContainer}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-start",
          columnGap: 4,
          marginTop: 12,
          marginLeft: 4,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Remember Me
        </Text>
        <Switch
          value={remember}
          style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          onValueChange={(value) => setRemember(value)}
        />
      </View>
      <TouchableOpacity
        style={STYLES.authButton}
        onPress={() => signInWithEmail()}
        disabled={loading}
      >
        <Text
          style={[FONTSTYLES.regular, { fontWeight: "700", color: "white" }]}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 24, marginLeft: 8 }}>
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
