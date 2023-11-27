import React from "react";
import { useState } from "react";
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
import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme.js";
import { userData } from "../constants/data.js";

const ClubDetailsScreen = ({ route, navigation }) => {
  const { currentClub } = route.params;

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ marginHorizontal: 20, flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: 215, height: 75 }}>
            <Text
              style={{ fontSize: 40 }}
              adjustsFontSizeToFit={true}
              numberOfLines={1}
            >
              {currentClub.name}
            </Text>
            <Text style={{ fontSize: 20 }}>{currentClub.size} members</Text>
          </View>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 30,
              marginLeft: 15,
              borderWidth: 2,
            }}
            source={{
              uri: currentClub.logo,
            }}
          />
        </View>
        <Text style={{ fontSize: 16, marginTop: 20, borderRadius: 20 }}>
          {currentClub.description}
        </Text>
        <View>
          <ScrollView
            style={{ height: 460, marginTop: 20 }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {userData.map((user, index) => (
              <Pressable
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  rowGap: 20,
                  backgroundColor: "white",
                  borderRadius: "10px",
                  marginVertical: 10,
                  width: "95%",
                  height: 100,
                  ...SHADOWS.main,
                }}
              >
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    marginHorizontal: 20,
                  }}
                  source={{
                    uri: user.imgUrl,
                  }}
                />
                <Text style={{ fontSize: 24, fontWeight: 400 }}>
                  {user.firstName} {user.lastName}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default ClubDetailsScreen;
