import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/CarouselCardItem.js";
import { userData } from "../constants/data.js";
import SearchBar from "../components/SearchBar.js";

const HomeScreen = ({ navigation }) => {
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.carouselContainer}>
        <SearchBar />
        <Carousel
          layout="tinder"
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  carouselContainer: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  header: {
    fontSize: 40,
    marginLeft: 20,
    color: "black",
    fontWeight: "400",
  },
});

export default HomeScreen;
