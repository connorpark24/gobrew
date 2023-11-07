import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const handleSearch = (query) => {
    // Implement your search logic here with the 'query'
    console.log('Searching for:', query);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch}/>
      <Text style={styles.text}>HOME SCREEN HERE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // Add any additional styles for your screen's container here
  },
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default HomeScreen;