import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from "react-native"

import { COLORS, FONT, SIZES, SHADOWS } from '../constants/theme.js';


export const SLIDER_WIDTH = Dimensions.get('window').width
export const hello = Dimensions.get('window').height
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)
export const ITEM_HEIGHT = Math.round(hello * 0.63)

const CarouselCardItem = ({ item, index }) => {
  return (
    <Pressable>
      <View style={styles.container} key={index}>

        <View style={{height: 'auto', width: '100%', display: 'flex', flexDirection: 'row', borderRadius: 20, alignItems: 'center', marginTop: 15}}>
          <View style={{marginLeft: 20, width: '50%'}}>
            <Text style={{fontSize: 30, fontWeight: 400, marginBottom: -5}}>{item.firstName}</Text>
            <Text style={{fontSize: 30, fontWeight: 400}}>{item.lastName}</Text>
            <Text style={{fontSize: 16, fontWeight: 300}}>{item.major}</Text>
            <Text style={{fontSize: 20, marginTop: 5}}>{item.emojis}</Text>
          </View>
          <Image style={{width: ITEM_HEIGHT*0.22, height: ITEM_HEIGHT*0.22, borderRadius: ITEM_HEIGHT*0.11, marginLeft: 10}} source={{
                    uri: item.imgUrl,
                  }}/>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start', columnGap: 10, flexWrap: 'wrap', width: '90%', height: 60}}>
          {item.clubs.map((club, index) => (
            <Image
              key={index}
              style={{ width: ITEM_HEIGHT*0.11, height: ITEM_HEIGHT*0.11, borderRadius: 10 }}
              source={{ uri: club.iconUrl }}
            />
          ))}
        </View>

        <View style={{height: 300, width: '95%'}}>
            <Text style={{fontSize: 16, marginLeft: 10, fontWeight: 300}}>{item.bio}</Text>
        </View>
      </View>
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginTop: 10,
    ...SHADOWS.main
  }
})

export default CarouselCardItem