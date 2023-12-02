import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { userData } from "../constants/data.js";
import CarouselCardItemFullPic, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/CarouselCardItemFullPic.js";

const FavoritesScreen = ({ navigation }) => {
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          layout="default"
          data={userData}
          renderItem={(props) => (
            <CarouselCardItemFullPic {...props} navigation={navigation} />
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
    fontSize: 35,
    marginLeft: 20,
    marginVertical: 15,
    color: "black",
    fontWeight: "300",
  },
});

export default FavoritesScreen;
