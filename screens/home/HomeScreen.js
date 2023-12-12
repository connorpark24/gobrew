import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../../components/CarouselCardItem.js";
import { STYLES } from "../../constants/theme.js";
import { SimpleLineIcons, AntDesign } from "react-native-vector-icons";
import { supabase } from "../../utils/supabase.js";

const HomeScreen = ({ navigation }) => {
  const [isLiked, setLiked] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", columnGap: 20 }}>
          {/* <Pressable
            onPress={() => {
              setLiked(!isLiked);
              navigation.navigate("Notifications");
            }}
          >
            <AntDesign name="exclamationcircleo" size={22} />
          </Pressable> */}
          <Pressable
            onPress={() => {
              setLiked(!isLiked);
              navigation.navigate("Favorites");
            }}
          >
            <SimpleLineIcons name="heart" size={22} />
          </Pressable>
        </View>
      ),
    });

    async function fetchUserData() {
      const { data, error } = await supabase.from("profiles").select();
      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        setUserData(data);
      }
    }

    fetchUserData();
  }, []);

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
