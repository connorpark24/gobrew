import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { supabase } from "../../utils/supabase.js";
import { COLORS, STYLES } from "../../constants/theme.js";
import SearchBar from "../../components/SearchBar.js";

const JoinNetworkScreen = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGroups, setFilteredGroups] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <SearchBar onSearchChange={handleSearchChange} />,
    });

    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select(`name, size`);
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

  const handleSearchChange = (query) => {
    const filtered = userData.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(filtered);

    if (carouselRef.current) {
      carouselRef.current.snapToItem(0);
    }
  };

  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={STYLES.header}>Find Groups</Text>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {groups.map((club, index) => (
            <ClubCard club={club} key={index} navigation={navigation} />
          ))}
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
        width: "110%",
        height: 80,
        borderWidth: 0.25,
        borderColor: "#777",
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

export default JoinNetworkScreen;
