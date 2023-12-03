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
import { FONTSTYLES, STYLES } from "../constants/theme.js";
import Tag from "../components/Tag.js";

const ProfileScreen = ({ navigation }) => {
  const user = userData[0];

  return (
    <ScrollView style={STYLES.mainContainer}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View>
            <Text
              style={FONTSTYLES.large}
              onPress={() => navigation.navigate("Settings Screen")}
            >
              {user.firstName} {user.lastName}
            </Text>
            <Text style={FONTSTYLES.medium}>{user.major}</Text>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginLeft: 40,
            }}
            source={user.picture}
          />
        </View>

        <Text style={FONTSTYLES.regular}>{user.bio}</Text>
      </View>

      <View style={{ flexDirection: "column", marginTop: 20, rowGap: 12 }}>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Year:</Text>
          <Tag text={"Sophomore"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>School:</Text>
          <Tag text={"Literature, Science, and Arts"} />
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
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Courses:</Text>
          <Tag text={"EECS 281"} />
          <Tag text={"EECS 280"} />
          <Tag text={"EECS 281"} />
          <Tag text={"EECS 281"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
