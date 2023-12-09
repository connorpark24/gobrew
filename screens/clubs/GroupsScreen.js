import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { supabase } from "../../utils/supabase.js";
import { COLORS, SHADOWS, STYLES } from "../../constants/theme.js";

const GroupsScreen = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select(`name, size`);
        console.log(data);
        if (error) throw error;
        setGroups(data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);

  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={STYLES.header}>Your Groups</Text>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
            rowGap: 20,
          }}
        >
          {groups.map((club, index) => (
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
      )}
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
