import React from "react";
import { View, Text, StyleSheet } from "react-native";

const YourScreenName = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Screen Content Goes Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default YourScreenName;
