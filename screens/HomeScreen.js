import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem.js'
import { userData } from '../constants/data.js'
import SearchBar from '../components/SearchBar.js';

const HomeScreen = () => {
  const isCarousel = React.useRef(null)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.carouselContainer}>
        <SearchBar />
        <Carousel
          layout="default"
          data={userData}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  carouselContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 35,
    marginLeft: 20,
    marginTop: 70,
    marginBottom: 20,
    color: 'black',
    fontWeight: '500',
  }
});

export default HomeScreen;