import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome2 from 'react-native-vector-icons/FontAwesome5';

const MainItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.viewBorder}>
        <Image style={styles.image} source={{uri: props.image}}></Image>
        <View style={styles.viewCard}>
          <Text style={styles.titles}>{props.name}</Text>
          <Text style={styles.title}>{props.place}</Text>
          <View style={styles.viewRow}>
            <View style={styles.viewIcon}>
              <FontAwesome name="star" size={18} color="#F55A00" />
              <Text style={styles.titleIcon}>{props.assess}</Text>
            </View>
            <View style={styles.viewIcon}>
            <FontAwesome2 name="clock" size={18} color="#7E7B7B" />
              <Text style={styles.titleIcon}>{props.time}</Text>
            </View>
            <View style={{justifyContent:"flex-end"}}>
              <Text style={styles.titlePrice}>${props.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height:270,
    marginRight:10,
  },
  viewBorder: {
    flex: 1,
    width: '100%',
    height: 280,
    alignItems:"center",
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    
  },
  viewCard: {
    width:"90%",
    height:100,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    position: 'absolute',
    marginTop:155,
  },
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: '300',
  },
  titleIcon: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft:5
  },
  titlePrice:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewRow: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
