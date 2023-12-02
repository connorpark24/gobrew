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
import { FONTSTYLES, SHADOWS } from "../constants/theme.js";
import Tag from "./Tag.js";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const SLIDER_HEIGHT = Dimensions.get("window").height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.65);

const CarouselCardItem = ({ item, index, navigation }) => {
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 20,
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          marginTop: 10,
          ...SHADOWS.main,
        }}
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
            flexDirection: "column",
            padding: 14,
            width: "100%",
          }}
        >
          <Text style={FONTSTYLES.large}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={FONTSTYLES.regular}>{item.major}</Text>
          <Text
            style={[
              FONTSTYLES.small,
              {
                marginTop: 8,
              },
            ]}
            adjustsFontSizeToFit={true}
          >
            {item.bio}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 8,
              rowGap: 6,
              columnGap: 4,
            }}
          >
            <Tag text={"Sophomore"} />
            <Tag text={"Software developer"} />
            <Tag text={"Software developer"} />
            <Tag text={"Software developer"} />
            <Tag text={"Software developer"} />
          </View>
        </View>

        <View style={{ width: "95%" }}></View>
      </Pressable>
    </View>
  );
};

export default CarouselCardItem;
