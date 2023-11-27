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
import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme.js";

const UserDetailsScreen = ({ route, navigation }) => {
  const { currentUser } = route.params;

  return (
    <View style={styles.container}>
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
            <Text style={{ fontSize: 35 }}>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
            <Text style={{ fontSize: 20 }}>{currentUser.major}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                marginTop: 10,
                width: 200,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Connect</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginLeft: 30,
            }}
            source={{
              uri: currentUser.imgUrl,
            }}
          />
        </View>

        <Text style={{ fontSize: 16 }}>{currentUser.bio}</Text>
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <ScrollView
          contentContainerStyle={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {currentUser.clubs.map((club, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                height: 100,
                marginBottom: 10,
                borderRadius: 10,
                borderWidth: 0.5,
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
              <View>
                <Text style={{ fontSize: 18 }}>{club.name}</Text>
                <Text style={{ fontSize: 14, width: 300 }}>{club.role}</Text>
              </View>
            </View>
          ))}
          {currentUser.clubs.map((club, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                height: 100,
                marginBottom: 5,
                borderRadius: 10,
                borderWidth: 0.5,
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
              <View>
                <Text style={{ fontSize: 18 }}>{club.name}</Text>
                <Text style={{ fontSize: 14, width: 300 }}>{club.role}</Text>
              </View>
            </View>
          ))}
          {currentUser.clubs.map((club, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                height: 100,
                marginBottom: 5,
                borderRadius: 10,
                borderWidth: 0.5,
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
              <View>
                <Text style={{ fontSize: 18 }}>{club.name}</Text>
                <Text style={{ fontSize: 14, width: 300 }}>{club.role}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default UserDetailsScreen;
