import React from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { clubData } from "../../constants/data.js";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS, SHADOWS, STYLES } from "../../constants/theme.js";

const GroupsScreen = ({ navigation }) => {
  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={STYLES.header}>Your Groups</Text>
      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
          rowGap: 20,
        }}
      >
        {clubData.map((club, index) => (
          <ClubCard club={club} key={index} navigation={navigation} />
        ))}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "100%",
            height: "20%",
            ...SHADOWS.main,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => navigation.navigate("Join Network")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="add-outline"
              size={80}
              style={{ marginHorizontal: 7 }}
              color="white"
            />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 400, color: "white" }}>
            Join network
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const ClubCard = ({ club, index, navigation }) => {
  return (
    <Pressable
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "100%",
        height: "20%",
        ...SHADOWS.main,
      }}
      onPress={() => navigation.navigate("Club Details", { currentClub: club })}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 70, height: 70, borderRadius: 10, margin: 10 }}
          source={club.logo}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          rowGap: 5,
          marginLeft: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 300 }}>{club.name}</Text>
        <Text style={{ fontSize: 14, fontWeight: 300 }}>
          {club.size} members
        </Text>
      </View>
    </Pressable>
  );
};

export default GroupsScreen;
