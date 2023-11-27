import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme.js";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const hello = Dimensions.get("window").height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
export const ITEM_HEIGHT = Math.round(hello * 0.63);

const CarouselCardItemFullPic = ({ item, index, navigation }) => {
  return (
    <View>
      <Pressable
        style={styles.container}
        key={index}
        onPress={() =>
          navigation.navigate("User Details", { currentUser: item })
        }
      >
        <Image
          style={{
            width: "100%",
            height: "50%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            resizeMode: "cover",
          }}
          source={item.picture}
        />
        <View
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: 300,
              }}
            >
              {item.firstName} {item.lastName}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 200 }}>{item.major}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{item.emojis}</Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            columnGap: 10,
            flexWrap: "wrap",
            width: "90%",
          }}
        >
          {item.clubs.map((club, index) => (
            <Image
              key={index}
              style={{
                width: ITEM_HEIGHT * 0.09,
                height: ITEM_HEIGHT * 0.09,
                borderRadius: 10,
              }}
              source={club.icon}
            />
          ))}
        </View>

        <View style={{ width: "95%" }}>
          <Text
            style={{
              fontSize: 14,
              marginLeft: 10,
              fontWeight: 200,
            }}
            adjustsFontSizeToFit={true}
          >
            {item.bio}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginTop: 10,
    ...SHADOWS.main,
  },
});

export default CarouselCardItemFullPic;
