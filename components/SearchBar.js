import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ onSearchChange }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = () => {
    setQuery(text);
    onSearchChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={handleSearchChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearchChange}>
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
