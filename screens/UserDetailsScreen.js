import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, STYLES, FONTSTYLES } from "../constants/theme.js";
import { useState } from "react";

const UserDetailsScreen = ({ route, navigation }) => {
  const { currentUser } = route.params;

  const { width, height } = Dimensions.get("window");
  const [isLiked, setLiked] = useState(false);

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
            <Text style={{ fontSize: 28, fontWeight: "300" }}>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
            <Text style={FONTSTYLES.small}>{currentUser.major}</Text>
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
                <Text style={FONTSTYLES.small}>Connect</Text>
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

        <Text style={FONTSTYLES.small}>{currentUser.bio}</Text>
      </View>

      <View>
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

export default UserDetailsScreen;