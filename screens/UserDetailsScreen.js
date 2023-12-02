import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, STYLES, FONTSTYLES } from "../constants/theme.js";
import { useState } from "react";
import Tag from "../components/Tag.js";

const UserDetailsScreen = ({ route, navigation }) => {
  const { currentUser } = route.params;

  const { width, height } = Dimensions.get("window");
  const [isLiked, setLiked] = useState(false);

  return (
    <ScrollView style={STYLES.mainContainer}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 28, fontWeight: "300" }}>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
            <Text style={FONTSTYLES.regular}>{currentUser.major}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                columnGap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 10,
                  width: 160,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    FONTSTYLES.regular,
                    { color: "white", fontWeight: "500" },
                  ]}
                >
                  Connect
                </Text>
              </TouchableOpacity>
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                color={COLORS.primary}
                size={40}
                onPress={() => {
                  setLiked(!isLiked);
                }}
              />
            </View>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginLeft: 24,
            }}
            source={currentUser.picture}
          />
        </View>

        <Text style={FONTSTYLES.regular}>{currentUser.bio}</Text>
      </View>

      <View style={{ flexDirection: "column", marginTop: 20, rowGap: 12 }}>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Year:</Text>
          <Tag text={"Sophomore"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>School:</Text>
          <Tag text={"Literature, Science, and Arts"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Internships:</Text>
          <Tag text={"Google"} />
          <Tag text={"Amazon"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Professional Roles:</Text>
          <Tag text={"Software developer"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Student Orgs:</Text>
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Courses:</Text>
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
          <Tag text={"Software developer"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetailsScreen;
