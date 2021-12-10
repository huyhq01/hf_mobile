import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome2 from 'react-native-vector-icons/FontAwesome5';

const RecentItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.viewCard}>
        <View style={styles.viewImg}>
          <Image style={styles.img} source={{uri: props.image}}></Image>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlePrice}>${props.price}</Text>
          <Text style={styles.titleName}>{props.name}</Text>
          <Text style={styles.titleStatus}>{props.status}</Text>
          <View style={styles.viewBottom}>
            <View style={styles.viewIcon}>
              <FontAwesome2 name="clock" size={16} color="#7E7B7B" />
              <Text style={styles.title}>{props.time}</Text>
            </View>
            <View style={styles.viewIcon}>
              <FontAwesome2 name="map-marker-alt" size={16} color="#7E7B7B" />
              <Text style={styles.title}>{props.place}</Text>
            </View>
            <View style={styles.viewIcon}>
              <FontAwesome name="star" size={16} color="#F55A00" />
              <Text style={styles.title}>{props.assess}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentItem;

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginBottom:20,
    marginLeft:5,
  },
  viewCard: {
    padding:10,
    width:"75%",
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 5,
  },
  viewImg: {
    position: 'absolute',
    marginLeft: 80,
  },
  card: {
    flexDirection: 'column',
  },
  titlePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:60
  },
  titleName: {
    fontSize: 16,
    fontWeight: '700',
    marginTop:5
  },
  titleStatus: {
    fontSize: 12,
    fontWeight: '300',
    marginTop:5
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  viewBottom: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:5
  },
  viewIcon: {
    flex:1,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    fontSize: 10,
    fontWeight: '300',
    marginLeft:2
  },
});
