import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FONTSTYLES, STYLES, COLORS } from "../../constants/theme.js";
import Tag from "../../components/Tag.js";
import { useProfileStore } from "../../store/store.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { supabase } from "../../utils/supabase.js";

const ProfileScreen = ({ navigation }) => {
  const {
    session,
    firstName,
    lastName,
    major,
    bio,
    year,
    linkedin,
    profilePicture,
    setFirstName,
    setLastName,
    setMajor,
    setBio,
    setYear,
    setLinkedin,
    setProfilePicture,
  } = useProfileStore();

  const [isLoading, setIsLoading] = useState(true);

  async function getProfile() {
    try {
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(
          `first_name, last_name, bio, year, major, linkedin_profile, profile_picture`
        )
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      setFirstName(data.first_name);
      setLastName(data.last_name);
      setBio(data.bio);
      setYear(data.year);
      setMajor(data.major);
      setLinkedin(data.linkedin_profile);

      if (data.profile_picture) {
        setProfilePicture(data.profile_picture);
      } else {
        setProfilePicture(require("../../assets/icons/default_pic.png"));
      }
    } catch (error) {
      console.log("Profile error" + error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

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
                <Text style={[FONTSTYLES.regular, { marginTop: 4 }]}>
                  {major}, {year}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 12,
                    marginTop: 16,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 36,
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
                  <TouchableOpacity
                    onPress={() => {
                      if (linkedin) {
                        Linking.openURL(linkedin);
                      } else {
                        console.log("LinkedIn profile link not provided");
                      }
                    }}
                  >
                    <Image
                      source={require("../../assets/icons/linkedin.png")}
                      style={{ height: 32, width: 38 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Image
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                }}
                source={{
                  uri: profilePicture,
                }}
              />
            </View>

            <Text style={FONTSTYLES.regular}>{bio}</Text>
          </View>

          <View style={{ flexDirection: "column", marginTop: 20, rowGap: 12 }}>
            <View style={STYLES.tagContainer}>
              <Text style={FONTSTYLES.regular}>School:</Text>
              <Tag text={"College of Engineering"} />
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
