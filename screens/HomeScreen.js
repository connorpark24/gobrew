import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem.js'
import data from './data'

const HomeScreen = () => {
  const isCarousel = React.useRef(null)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Carousel
        layout="default"
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    fontSize: 35,
    marginLeft: 20,
    marginVertical: 20,
    color: 'black',
    fontWeight: '500'
  }
});

export default HomeScreen;