import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { userData } from "../constants/data.js";
import { FONTSTYLES, STYLES } from "../constants/theme.js";
import Tag from "../components/Tag.js";
import { supabase } from "../utils/supabase";
import { useProfileStore } from "../store/store";

const ProfileScreen = () => {
  const {
    firstName,
    lastName,
    major,
    bio,
    year,
    setFirstName,
    setLastName,
    setMajor,
    setBio,
    setYear,
    session,
  } = useProfileStore();
  const user = userData[0];

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`first_name, last_name, major, year, bio`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setMajor(data.major);
        setYear(data.year);
        setBio(data.bio);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  }

  return (
    <ScrollView style={STYLES.mainContainer}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <View>
            <Text style={FONTSTYLES.large}>
              {firstName} {lastName}
            </Text>
            <Text style={FONTSTYLES.medium}>{major}</Text>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
            }}
            source={user.picture}
          />
        </View>

        <Text style={FONTSTYLES.regular}>{bio}</Text>
      </View>

      <View style={{ flexDirection: "column", marginTop: 20, rowGap: 12 }}>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Year:</Text>
          <Tag text={year} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>School:</Text>
          <Tag text={"Engineering"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Internships:</Text>
          <Tag text={"Google"} />
          <Tag text={"Amazon"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Professional Roles:</Text>
          <Tag text={"Software developer"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Student Orgs:</Text>
          <Tag text={"Best Buddies of Ann Arbor"} />
          <Tag text={"V1"} />
          <Tag text={"Alpha Epsilon Pi"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Courses:</Text>
          <Tag text={"EECS 280"} />
          <Tag text={"EECS 281"} />
          <Tag text={"CHEM 125"} />
          <Tag text={"CHEM 130"} />
          <Tag text={"EECS 203"} />
          <Tag text={"MATH 215"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
