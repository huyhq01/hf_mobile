import React, { useState, useEffect } from "react";
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
  Alert,
} from "react-native";
import FontAwesome2 from "react-native-vector-icons/FontAwesome";
import url from "../../utilities/GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Colors";
const WIDTH = Dimensions.get("window");

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

const ItemScreen = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const up = () => {
    setQuantity(quantity + 1);
    updateQuantity();
  };

  const down = () => {
    if (quantity <= 1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
      updateQuantity();
    }
  };

  const updateQuantity = async () => {
    fetch(url.ipv4 + "cart/update-quantity", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("t")),
      },
      body: JSON.stringify(quantity),
    }).catch((err) => console.log(err));
  };

  let post = route.params.post;
  async function addToCart() {
    let postData = { ...post, quantity: quantity };
    fetch(url.ipv4 + "cart/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("t")),
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status) {
          Alert.alert("Bạn thêm sản phẩm vào giỏ hàng thành công");
          navigation.goBack();
        } else {
          Alert.alert("Lỗi thực hiện");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={{ uri: post.product_image }} />

        <View style={styles.quantity}>
          <Pressable style={styles.up} onPress={() => down()}>
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
            {quantity}
          </Text>
          <Pressable>
            <Text style={{ fontSize: 16 }} onPress={() => up()}>
              +
            </Text>
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

          <Text style={styles.price}>{post.product_price} đ</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ flexDirection: "row", flex: 0.3 }}>
            <FontAwesome2 name="star" size={24} color="#FF5B5B" />
            <Text style={styles.textIcons}>4,9/5</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: Colors.orange,
            marginVertical: 20,
            opacity: 0.5,
          }}
        ></View>
        <Text style={styles.textDetails}>DETAILS</Text>
        <Text style={styles.textDetails2}>{post.description}</Text>
      </View>
      <View style={styles.view2}>
        <Pressable
          style={styles.btnAddCart}
          onPress={() => {
            addToCart();
          }}
        >
          <Text style={styles.textAddCart}>Add To Cart</Text>
        </Pressable>
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
    flex: 1,
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  view1: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 20,
    marginTop: 15,
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
  textDetails2: {
    fontSize: 16,
    fontWeight: "400",
  },
  textDetails: {
    fontSize: 20,
    fontWeight: "600",
  },
  textIcons: {
    fontSize: 16,
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
  quantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 35,
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 5,
    marginTop: (-WIDTH.width * 15) / 100,
  },
  image: {
    width: (WIDTH.width * 75) / 100,
    height: (WIDTH.width * 75) / 100,
    borderRadius: WIDTH.width / 2,
    borderColor: "#EEEEEE",
    borderWidth: 40,
  },
  viewDetail: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  viewImages: {
    borderRadius: WIDTH.width / 2,
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
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
  },
});
