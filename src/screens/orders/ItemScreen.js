import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import FontAwesome2 from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: item.uri }}
      />
    </View>
  );
};

const ItemScreen = (props) => {
  const [visible, setVisible] = useState(false);
  const {
    navigation,
    route: {
      params: { post },
    },
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.viewBack}>
          <View style={styles.back}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name="chevron-left" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.bell}>
            <FontAwesome name="bell" size={24} color="#FF5B5B" />
          </View>
        </View>
        <View style={styles.viewImages}>
          <View style={styles.viewCard}>
            <Image style={styles.image} source={{ uri: post.product_image }} />
          </View>
        </View>
        <View style={styles.viewQuantity}>
          <View style={styles.quantity}>
            <Pressable style={styles.up}>
              <Text style={{ fontSize: 20 }}>-</Text>
            </Pressable>

            <Text
              style={{
                marginLeft: 15,
                marginRight: 15,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              1
            </Text>

            <Pressable>
              <Text style={{ fontSize: 16 }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewDetail}>
          <Text style={{ fontWeight: "200", fontSize: 20 }}>
            {post.category_id.category_name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, marginTop: 10 }}>
              <Text style={styles.name}>{post.product_name}</Text>
            </View>

            <Text style={styles.price}>${post.product_price}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row", flex: 0.3 }}>
              <FontAwesome2 name="star" size={20} color="#FF5B5B" />
              <Text style={styles.textIcons}>4,9</Text>
            </View>

            <View style={{ flexDirection: "row", flex: 0.3 }}>
              <FontAwesome name="clock" size={20} color="#A9A9A9" />
              <Text style={styles.textIcons}>10 Mins</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <FontAwesome2 name="map-marker" size={20} color="#A9A9A9" />
              <Text style={styles.textIcons}>250M</Text>
            </View>
          </View>
          <View style={styles.viewTextDetails}>
            <Text style={styles.textDetails}>DETAILS</Text>
            <Text style={styles.textDetails2}>{post.description}</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <Pressable
            style={styles.btnAddCart}
            onPress={() =>
              navigation.push("CartScreen", {
                name: post.product_name,
                price: post.product_price,
              })
            }
          >
            <Text style={styles.textAddCart}>Add To Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  viewModal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: Dimensions.get("window").height * 0.5,
    maxHeight: Dimensions.get("window").height * 0.5,
    alignItems: "center",
  },
  textAddCart: {
    fontWeight: "bold",
    color: Colors.white,
    fontSize: 17,
  },
  btnAddCart: {
    width: "70%",
    height: 50,
    backgroundColor: Colors.orange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    marginBottom:20,
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 40,
    paddingRight: 20,
  },
  textAdd: {
    fontSize: 50,
    color: Colors.orange,
    textAlign: "center",
  },
  btnAdd: {
    width: 80,
    height: 80,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.orange,
    borderWidth: 2,
  },
  item: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 5,
    width: 75,
    height: 75,
  },
  viewTextDetails: {
    marginTop: 15,
  },
  textDetails2: {
    fontSize: 16,
    fontWeight: "300",
  },
  textDetails: {
    fontSize: 20,
    fontWeight: "600",
  },
  textIcons: {
    fontWeight: "200",
    marginLeft: 5,
  },
  price: {
    justifyContent: "flex-end",
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.orange,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
  },
  viewQuantity: {
    alignItems: "center",
    marginTop: 25,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 35,
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 5,
  },
  image: {
    width: "70%",
    height: 210,
    borderRadius: 200,
  },
  viewCard: {
    width: "100%",
    height: 310,
    backgroundColor: "#F3F2F3",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  viewDetail: {
    flex: 8,
  },
  viewImages: {
    // position:'absolute',
    flex: 6,
    borderRadius: 300,
    alignItems: "center",
  },
  bell: {
    alignItems: "flex-end",
    margin: 10,
  },
  back: {
    flex: 1,
    margin: 10,
  },
  viewBack: {
    flexDirection: "row",
    marginTop:10
  },
  container: {
    flex: 1,
    backgroundColor: "#c0bfc0",
  },
});
