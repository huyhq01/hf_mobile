import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

const MainItem = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.item}>
        <View>
          <Image
          style={{ width:"100%", height: 100, borderRadius: 10 }}
          source={{ uri: props.image }}
        />
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.productName}>{props.name}</Text>
          <Text style={styles.price}>{props.price} đ</Text>
        </View>
    </Pressable>
  );
};

export default MainItem;

const styles = StyleSheet.create({
  wrapText: {
    justifyContent: "center",
  },
  productName: {
    marginTop:10,
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "400",
    marginTop:10,
  },
  item: {
    // flex: 1,
    width:'47%',
    backgroundColor: Colors.white,
    padding: 10,
    margin: 8,
    borderRadius: 5,
    shadowColor:Colors.orange,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
