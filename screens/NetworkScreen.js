import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NetworkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NETWORK SCREEN HERE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add any additional styles for your screen's container here
  },
  text: {
    fontSize: 20,
    // Add any text styles here
  },
});

export default NetworkScreen;