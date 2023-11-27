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
              }}
              source={currentClub.logo}
            />
          </View>

          <Text style={{ fontSize: 16, marginTop: 20, borderRadius: 20 }}>
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
                rowGap: 20,
                backgroundColor: "white",
                borderRadius: "10px",
                marginVertical: 10,
                width: "95%",
                height: 80,
                ...SHADOWS.main,
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginHorizontal: 20,
                }}
                source={{
                  uri: user.imgUrl,
                }}
              />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontSize: 22, fontWeight: 400 }}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 400 }}>
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
