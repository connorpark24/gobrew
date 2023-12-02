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
import { userData, clubData } from "../constants/data.js";

const ClubDetailsScreen = ({ route, navigation }) => {
  const { currentClub } = route.params;
  console.log(currentClub);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView
        style={{ flexDirection: "column", width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "90%",
            }}
          >
            <View style={{ width: 215, height: 75 }}>
              <Text
                style={{ fontSize: 40, fontWeight: "300" }}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
              >
                {currentClub.name}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "300" }}>
                {currentClub.size} members
              </Text>
            </View>
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 30,
                marginLeft: 15,
              }}
              source={currentClub.logo}
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              borderRadius: 20,
              fontWeight: "300",
            }}
          >
            {currentClub.description}
          </Text>
        </View>

        <View style={{ marginTop: 20, width: "90%", alignItems: "center" }}>
          {userData.map((user, index) => (
            <Pressable
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                borderBottomColor: "#dfdfdf",
                borderBottomWidth: 1,
                width: "100%",
                height: 60,
              }}
              onPress={() =>
                navigation.navigate("User Details", { currentUser: user })
              }
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginHorizontal: 20,
                }}
                source={user.picture}
              />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontSize: 18, fontWeight: 300 }}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 300 }}>
                  {user.major}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
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
