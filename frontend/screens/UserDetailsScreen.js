import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme.js";
import { useState } from "react";

const UserDetailsScreen = ({ route, navigation }) => {
  const { currentUser } = route.params;

  const { width, height } = Dimensions.get("window");
  const [isLiked, setLiked] = useState(false);

  return (
    <ScrollView
      style={{ flexDirection: "column", flex: 1, backgroundColor: "white" }}
    >
      <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 28, fontWeight: "300" }}>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "300" }}>
              {currentUser.major}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                columnGap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 10,
                  width: 160,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Connect</Text>
              </TouchableOpacity>
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                color={COLORS.primary}
                size={40}
                onPress={() => {
                  setLiked(!isLiked);
                }}
              />
            </View>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginLeft: 24,
            }}
            source={currentUser.picture}
          />
        </View>

        <Text style={{ fontSize: 16, fontWeight: "300" }}>
          {currentUser.bio}
        </Text>
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <View>
          {currentUser.clubs.map((club, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                height: 90,
                padding: 5,
                // ...SHADOWS.main,
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                }}
                source={club.icon}
              />
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 18, fontWeight: "300" }}>
                  {club.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    width: "100%",
                    fontWeight: "300",
                  }}
                >
                  {club.role}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default UserDetailsScreen;
