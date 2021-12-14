import React, {useState,useEffect} from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Colors from "../../constants/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome5";


const CartScreen = ({navigation}) => {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/cart/get", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem('t'),
      },
    })
      .then((response) => response.json())
      .then((json) => setCart(json))
      .catch((err) => console.log(err));
    
  }, []);
  console.log(cart);

  const renderItem = ({ item }) => {
    return (
      <Pressable>
        <View style={styles.item}>
          <Image
            style={{ width: "30%", height: "80%", borderRadius: 5 }}
            source={{ uri: item.uri }}
          />

          <View style={styles.wrapText}>
            <Text style={styles.productName}>{item.product_name}</Text>
            <Text style={styles.categoryProduct}>{item.categoryProduct}</Text>
            <Text style={styles.price}>{item.price}$</Text>
          </View>
          <View style={styles.soLuong}>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>
              {item.quantity}
            </Text>
          </View>

          <View style={styles.upDown}>
            <TouchableOpacity style={styles.btnUpDown}>
              <Text style={styles.textUpDown}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpDown}>
              <Text style={styles.textUpDown}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  };
console.log(cart);
  return (
    <View style={styles.container}>
        <View style={{flex:1, marginTop:15}}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
        <View style={styles.checkOut}>
          <View style={styles.CheckOut1}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textCheckOut}>Tạm tính</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={styles.textCheckOut}>$150</Text>
            </View>
          </View>

          <View style={styles.CheckOut1}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textCheckOut}>Giảm giá</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={styles.textCheckOut}>$10</Text>
            </View>
          </View>

          <View style={styles.CheckOut1}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textCheckOutTotal}>Tổng Tiền</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={styles.textCheckOutTotal2}>$160</Text>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <Pressable style={styles.btnCheckout}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: Colors.white,
                  fontSize: 17,
                }}
              >
                Thanh Toán
              </Text>
            </Pressable>
          </View>
        </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  textUpDown: {
    fontSize: 22,
    textAlign: "center",
  },
  btnUpDown: {
    backgroundColor: "#DCDCDC",
    marginBottom: 10,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 20,
  },
  upDown: {
    flex:1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10,
  },
  soLuong: {
    flex:1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 20,
  },
  btnCheckout: {
    width: "70%",
    height: 50,
    backgroundColor: Colors.orange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  textCheckOut: {
    fontSize: 18,
    color: "#696969",
  },
  textCheckOutTotal: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  textCheckOutTotal2: {
    fontSize: 22,
    color: Colors.orange,
    fontWeight: "bold",
  },

  CheckOut1: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingRight: 20,
    paddingLeft: 40,
  },
  checkOut: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  images: {
    width: "30%",
    height: "82%",
    borderRadius: 50,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
    shadowColor: Colors.orange,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  categoryProduct: {
    fontSize: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapText: {
    marginLeft: 10,
    // marginTop: 16,
    justifyContent: "center",
  },
});
