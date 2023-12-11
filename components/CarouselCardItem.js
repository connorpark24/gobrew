import React from "react";
import { View, Text, Dimensions, Image, Pressable } from "react-native";
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
            {item.first_name} {item.last_name}
          </Text>
          <Text style={[FONTSTYLES.regular, { marginTop: 4 }]}>
            {item.major}
          </Text>
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
              marginTop: 12,
              rowGap: 8,
              columnGap: 8,
            }}
          >
            <Tag text={item.major} />
            <Tag text={item.college} />
            {/* Tags for Clubs */}
            {item.clubs &&
              item.clubs.map((club, clubIndex) => (
                <Tag key={`club_${clubIndex}`} text={club} />
              ))}

            {/* Tags for Experiences */}
            {item.experiences &&
              item.experiences.map((experience, expIndex) => (
                <Tag key={`experience_${expIndex}`} text={experience} />
              ))}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(CarouselCardItem);
