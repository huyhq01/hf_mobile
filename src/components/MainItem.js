import React from 'react';
import { StyleSheet, Text, View, Image, Pressable ,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome2 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';

const MainItem = props => {
  return (
    <Pressable onPress= {props.onPress}>
      <View style={styles.item}>
        <Image style={{ width: '40%', height: 80, borderRadius:10 }}
          source={{ uri: props.image }} />

        <View style={styles.wrapText}>
          <Text style={styles.productName}>{props.name}</Text>
          <Text style={styles.price}>{props.price}$</Text>
        </View>

      </View>
    </Pressable>
  );
};

export default MainItem;

const styles = StyleSheet.create({
  wrapText: {
    marginLeft: 15,
    justifyContent: 'center',

},
  productName: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: Colors.white,
    padding: 18,
    // marginVertical: 8,
    marginTop:8,
    // marginHorizontal: 16,
    flexDirection: "row",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
