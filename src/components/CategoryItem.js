import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome2 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CategoryItem = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.image}}></Image>
      <View style={{marginLeft: 10, flex: 1}}>
        <View style={styles.viewTitles}>
          <Text style={styles.titleCategory}>{props.category}</Text>
          <Text style={styles.titles}>{props.name}</Text>
          <Text style={styles.titles}>{props.price}</Text>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewIcon}>
            <FontAwesome name="star" size={16} color="#F55A00" />
            <Text style={styles.title}>{props.assess}</Text>
          </View>
          <View style={styles.viewIcon}>
            <FontAwesome2 name="clock" size={16} color="#7E7B7B" />
            <Text style={styles.title}>{props.time}</Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FontAwesome2 name="map-marker-alt" size={16} color="#7E7B7B" />
            <Text style={styles.title}>{props.place}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  titleCategory: {
    fontSize: 12,
    fontWeight: '300',
  },
  titles: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 2,
  },
  viewTitles: {
    flexDirection: 'column',
  },
  viewTitle: {
    flexDirection: 'row',
  },
  viewRow: {
    flex: 1,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
