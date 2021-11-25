import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const DetailScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.viewCard}>
        <Image style={styles.image} source={{uri: props.image}}></Image>
      </View>
      <Text style={styles.titles}>{props.name}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 30,
    marginLeft:5
  },
  viewCard: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

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
  },
});
