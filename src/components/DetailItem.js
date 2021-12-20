import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Colors from '../constants/Colors';


const DetailScreen = props => {
  return (
    <Pressable onPress= {props.onPress}>
    <View style={styles.container}>
      <View style={styles.viewCard}>
        <Image style={styles.image} source={{uri: props.image}}></Image>
      </View>
      <Text style={styles.titles}>{props.name}</Text>
    </View>
    </Pressable>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 30,
    marginLeft:5,
    alignItems:'center',
    justifyContent: 'center',
  },
  viewCard: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.orange,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  titles: {
    fontSize: 14,
    fontWeight: '500',
    marginTop:10
  },
  image: {
    width: 45,
    height: 45,
    borderRadius:30
  },
});
