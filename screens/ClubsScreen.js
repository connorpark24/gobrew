import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { clubData } from '../constants/data.js'

import { COLORS, FONT, SIZES, SHADOWS } from '../constants/theme.js';


const ClubsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, marginLeft: 20, marginTop: 70, marginBottom: 20, fontWeight: '400'}}>Your Clubs</Text>
      <ScrollView contentContainerStyle={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {clubData.map((club, index) => (
          <View key={index} style={styles.clubCard}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{width: 80, height: 80, borderRadius: 10, margin: 10}} source={{
                  uri: club.logo
                }}
              />
            </View>
            <View style={{display: 'flex', flexDirection: 'column', rowGap: 5, marginLeft: 5}}>
              <Text style={{fontSize: 24, fontWeight: 300}}>{club.name}</Text>
              <Text style={{fontSize: 16, fontWeight: 300}}>{club.size} members</Text>
            </View>
        </View>
        ))}
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
  clubCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '90%',
    height: '32%',
    margin: 10,
    ...SHADOWS.main
  },
});

export default ClubsScreen;