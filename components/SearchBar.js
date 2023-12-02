import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Ionicons name="search" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  input: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
  },
  button: {
    padding: 10,
  },
});

export default SearchBar;
