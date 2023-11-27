import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { userData } from "../constants/data.js";
import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme.js";

const ProfileScreen = () => {
  const user = userData[0];

  return (
    <ScrollView
      style={{ flexDirection: "column", flex: 1, backgroundColor: "white" }}
    >
      <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 35, fontWeight: "300" }}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "300" }}>
              {user.major}
            </Text>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginLeft: 30,
            }}
            source={user.picture}
          />
        </View>

        <Text style={{ fontSize: 16, fontWeight: "300" }}>{user.bio}</Text>
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <View>
          {user.clubs.map((club, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                height: 90,
                padding: 5,
                // ...SHADOWS.main,
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                }}
                source={club.icon}
              />
              <View>
                <Text style={{ fontSize: 18, fontWeight: "300" }}>
                  {club.name}
                </Text>
                <Text style={{ fontSize: 14, width: 300, fontWeight: "300" }}>
                  {club.role}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default ProfileScreen;
