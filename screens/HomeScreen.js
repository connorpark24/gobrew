import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { userData } from "../constants/data.js";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/CarouselCardItem.js";
import { STYLES } from "../constants/theme.js";
import SearchBar from "../components/SearchBar.js";

const HomeScreen = ({ navigation, route }) => {
  const [filteredData, setFilteredData] = useState(userData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    const filtered = userData.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(filtered);
  };

  navigation.setOptions({
    headerTitle: () => <SearchBar onSearchChange={handleSearchChange} />,
  });

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
          data={filteredData}
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
