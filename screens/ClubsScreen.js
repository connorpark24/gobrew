import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ClubsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Your Clubs</Text>
        
        <View style={styles.cardContainer}>
          <View style={styles.clubCard}>
            <Text style={styles.cardText}>CLUB SCREEN HERE</Text>
          </View>
          <View style={styles.clubCard}>
            <Text style={styles.cardText}>CLUB SCREEN HERE</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  clubCard: {
    borderRadius: '10px',
    backgroundColor: '#3a3fff',
    width: '90%',
    margin: 10,
    height: '50%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  header: {
    fontSize: 35,
    marginLeft: 20,
    marginVertical: 10,
    color: 'black',
    fontWeight: '500'
  },
  cardText: {
    fontSize: 20,
    margin: 10,
    color: 'black'
  }
});

export default ClubsScreen;