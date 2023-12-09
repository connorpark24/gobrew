import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { userData } from "../../../constants/data.js";
import { STYLES } from "../../../constants/theme.js";

const MessagesScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={[STYLES.header, { marginBottom: 8 }]}>Messages</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            width: screenWidth + 5,
            alignItems: "center",
          }}
        >
          {userData.map((user, index) => (
            <Pressable
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                borderTopColor: "#dfdfdf",
                borderTopWidth: 1,
                width: "100%",
                height: 84,
              }}
              onPress={() => navigation.navigate("Chat Screen")}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginHorizontal: 20,
                }}
                source={user.picture}
              />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontSize: 18, fontWeight: 300 }}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#666666",
                    marginTop: 4,
                  }}
                >
                  Most recent message ...
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MessagesScreen;
