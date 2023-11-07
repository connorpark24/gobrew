import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClubsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CLUB SCREEN HERE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    // Add any additional styles for your screen's container here
  },
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default ClubsScreen;