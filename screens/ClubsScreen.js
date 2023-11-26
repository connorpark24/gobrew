import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { clubData } from '../constants/data.js'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants/theme.js';

const ClubsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, marginLeft: 20, marginBottom: 20, fontWeight: '400'}}>Your Clubs</Text>
      <ScrollView contentContainerStyle={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {clubData.map((club, index) => (
          <Pressable key={index} style={styles.clubCard} onPress={() => navigation.navigate('Club Details', { currentClub: club })}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{width: 70, height: 70, borderRadius: 10, margin: 10}} source={club.logo}
              />
            </View>
            <View style={{display: 'flex', flexDirection: 'column', rowGap: 5, marginLeft: 10}}>
              <Text style={{fontSize: 24, fontWeight: 300}}>{club.name}</Text>
              <Text style={{fontSize: 16, fontWeight: 300}}>{club.size} members</Text>
            </View>
          </Pressable>
        ))}
        <Pressable style={styles.clubCard} onPress={() => navigation.navigate("Join Network")}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="add-outline" size={80} style={{marginHorizontal: 7}}/>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', rowGap: 5, marginLeft: 5}} >
            <Text style={{fontSize: 24, fontWeight: 300}}>Join network</Text>
          </View>
        </Pressable>
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
    height: '25%',
    margin: 10,
    ...SHADOWS.main
  },
});

export default ClubsScreen;