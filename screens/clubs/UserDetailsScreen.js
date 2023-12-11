import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign.js";
import { COLORS, STYLES, FONTSTYLES } from "../../constants/theme.js";
import { useState } from "react";
import Tag from "../../components/Tag.js";

const UserDetailsScreen = ({ route, navigation }) => {
  const { currentUser } = route.params;

  const [isLiked, setLiked] = useState(false);

  return (
    <ScrollView style={STYLES.mainContainer}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 28, fontWeight: "300" }}>
              {currentUser.first_name} {currentUser.last_name}
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
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() =>
                  navigation.navigate("Connect", { currentUser: currentUser })
                }
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
              <Pressable
                onPress={() => {
                  setLiked(!isLiked);
                }}
              >
                <AntDesign
                  name={isLiked ? "heart" : "hearto"}
                  color={COLORS.primary}
                  size={30}
                />
              </Pressable>
            </View>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
            }}
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
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
          <Tag text={"Engineering"} />
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
          <Tag text={"Best Buddies of Ann Arbor"} />
          <Tag text={"V1"} />
          <Tag text={"Alpha Epsilon Pi"} />
        </View>
        <View style={STYLES.tagContainer}>
          <Text style={FONTSTYLES.regular}>Courses:</Text>
          <Tag text={"EECS 280"} />
          <Tag text={"EECS 281"} />
          <Tag text={"CHEM 125"} />
          <Tag text={"CHEM 130"} />
          <Tag text={"EECS 203"} />
          <Tag text={"MATH 215"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetailsScreen;
