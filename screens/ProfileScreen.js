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
              marginLeft: 50,
            }}
            source={user.picture}
          />
        </View>

        <Text style={FONTSTYLES.regular}>{user.bio}</Text>
      </View>

      <View>
        <View>
          {user.clubs.map((club, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                height: 90,
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
              <View>
                <Text style={FONTSTYLES.regular}>{club.name}</Text>
                <Text style={[FONTSTYLES.small, { width: 300 }]}>
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

export default ProfileScreen;
