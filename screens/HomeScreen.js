import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { userData } from "../constants/data.js";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/CarouselCardItem.js";
import { STYLES } from "../constants/theme.js";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={STYLES.mainContainer}>
      <Text style={STYLES.header}>Discover</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Carousel
          layout="default"
          data={userData}
          renderItem={(props) => (
            <CarouselCardItem {...props} navigation={navigation} />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
