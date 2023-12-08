import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { userData } from "../../constants/data.js";
import { FONTSTYLES, STYLES, COLORS } from "../../constants/theme.js";
import Tag from "../../components/Tag.js";
import { supabase } from "../../utils/supabase.js";
import { useProfileStore } from "../../store/store.js";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = ({ navigation }) => {
  const {
    firstName,
    lastName,
    major,
    bio,
    year,
    profilePicture,
    setFirstName,
    setLastName,
    setMajor,
    setBio,
    setYear,
    setProfilePicture,
    session,
  } = useProfileStore();
  const user = userData[0];

  const [isLoading, setIsLoading] = useState(true);

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

      setFirstName(data.first_name);
      setLastName(data.last_name);
      setMajor(data.major);
      setYear(data.year);
      setBio(data.bio);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollView style={STYLES.mainContainer}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.primary} />
      ) : (
        <>
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
                <TouchableOpacity
                  style={{
                    height: 36,
                    marginTop: 8,
                    borderRadius: 8,
                    width: 140,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    columnGap: 12,
                  }}
                  onPress={() => navigation.navigate("Edit Profile")}
                >
                  <Text style={[FONTSTYLES.regular, { color: "white" }]}>
                    Edit Profile
                  </Text>
                  <Ionicons name="pencil" size={20} color="white" />
                </TouchableOpacity>
              </View>

              <Image
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                }}
                source={profilePicture}
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
        </>
      )}
    </ScrollView>
  );
};

export default ProfileScreen;
