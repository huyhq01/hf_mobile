import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import Colors from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import GlobalStyles from "../../utilities/GlobalStyles";
// import Dialog from "react-native-dialog";

const CartScreen = ({ navigation }) => {
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showVoucher, setShowVoucher] = useState(false);
  const [cart, setCart] = useState([]);
  const [isChange, setIsChange] = useState(true);
  const [profile, setProfile] = useState({});
  const [total, setTotal] = useState(0);
  const [voucher, setVoucher] = useState("");
  const [value, setValue] = useState(0);
  const [superTotal, setSuperTotal] = useState(0);
  const [note, setNote] = useState("");

  async function getProfile() {
    let token = await AsyncStorage.getItem("t");
    console.log(token);
    fetch(url.ipv4 + "check", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          setProfile(json.data);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getProfile();
  }, []);

  const up = (cart_id) => {
    updateQuantity(cart_id, true);
  };

  const down = (cart_id) => {
    updateQuantity(cart_id, false);
  };

  const saveVoucher = (code) => {
    fetch(url.ipv4 + "get-voucher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ code: code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setValue(data.value);
          setShowVoucher(false);
        } else {
          console.log(data.msg);
          Alert.alert(data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  const updateQuantity = async (id, t) => {
    fetch(url.ipv4 + "cart/change-quantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("t")),
      },
      body: JSON.stringify({ t: t, id: id }),
    })
      .then((res) => setIsChange(!isChange))
      .catch((err) => console.log(err));
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable>
        <View style={styles.item}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 5 }}
            source={{ uri: item.image }}
          />
          <View style={styles.wrapText}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "400" }}>
              {item.quantity}
            </Text>
          </View>

          <View style={styles.upDown}>
            <TouchableOpacity onPress={() => up(item._id)}>
              <Text style={styles.textUpDown}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => down(item._id)}>
              <Text style={styles.textUpDown}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  };

  const getTotal = (cart) => {
    let list = [];
    cart.forEach((e) => {
      let c = { id: e.id, quantity: e.quantity };
      list.push(c);
    });
    fetch(url.ipv4 + "get-total", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ list: list }),
    })
      .then((response) => response.json())
      .then((json) => setTotal(json.total))
      .catch((err) => console.log(err));
  };

  const getData = async () => {
    fetch(url.ipv4 + "cart/get", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("t")),
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setCart(json);
        getTotal(json);
      })
      .catch((err) => console.log(err));
  };

  const checkOut = async (products, note, total, value, superTotal) => {
    let token = await AsyncStorage.getItem("t");
    let list = products.map((e) => {
      delete e.image;
      return e;
    });
    console.log(token);
    fetch(url.ipv4 + "create-order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        products: list,
        note: note,
        total: total,
        value: value,
        superTotal: superTotal,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status) {
          console.log("Thanh cong");
          navigation.goBack();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(async () => {
    getData();
  }, [isChange]);

  useEffect(() => {
    setSuperTotal(total - value > 0 ? total - value : 0);
  }, [total, value]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewTT}>
          <View style={styles.viewIcon}>
            <FontAwesome name="map-marker-alt" size={20} color="#F55A00" />
            <Text style={styles.titles}>Da Lat, Viet Nam</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.viewIcon}>
            <FontAwesome name="user" size={20} color="#F55A00" />
            <View>
              <Text style={styles.title}>{profile ? profile.name : ""}</Text>
              <Text style={styles.titles}>{profile ? profile.phone : ""}</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.viewIcon}>
            <FontAwesome name="clipboard" size={20} color="#F55A00" />
            <TextInput
              style={styles.input}
              placeholder="Ghi chú món ăn"
              onChangeText={(e) => setNote(e)}
            />
          </View>
        </View>
        <View style={styles.viewList}>
          <View style={styles.viewAdd}>
            <Text style={styles.text}>Món</Text>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.textAdd}>Thêm</Text>
              <FontAwesome name="plus-square" size={24} color="#EEEEEE" />
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
        <View style={styles.viewTotal}>
          <Text style={styles.textVAT}>
            Giá bán đã bao gồm 7% VAT (trừ sản phẩm đóng gói)
          </Text>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.viewVoucher}
            onPress={() => setShowVoucher(true)}
          >
            <FontAwesome name="money-check-alt" size={24} color="#F55A00" />
            <Text style={styles.textVoucher}>Thêm ưu đãi</Text>
          </TouchableOpacity>
          <View style={styles.CheckOut1}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textCheckOut}>Tạm tính</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={styles.textCheckOut}>{total} đ</Text>
            </View>
          </View>
          <View style={styles.CheckOut1}>
            <View style={{ flex: 1, marginTop: 10 }}>
              <Text style={styles.textCheckOut}>Giảm giá </Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={styles.textCheckOut}>- {value} đ</Text>
            </View>
          </View>

          <View style={styles.CheckOut1}>
            <View style={{ flex: 1, marginTop: 10 }}>
              <Text style={styles.textCheckOutTotal}>Tổng cộng</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={styles.textCheckOutTotal2}>{superTotal} đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {cart.length > 0 ? 
      <View style={styles.checkOut}
      >
        <Pressable
          style={styles.btnCheckout}
          onPress={() => setShowCheckOut(true)}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.white,
              fontSize: 16,
            }}
          >
            Thanh Toán
          </Text>
        </Pressable>
      </View> : <> </>}
      
      {/* ModalCheckOut */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCheckOut}
        onRequestClose={() => {
          setShowCheckOut(!showCheckOut);
        }}
      >
        <View style={styles.viewDialog}>
          <Text style={styles.title}>Xác nhận đặt hàng</Text>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={GlobalStyles.login_button}
              onPress={() => setShowCheckOut(!showCheckOut)}
            >
              <Text style={styles.titles}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={GlobalStyles.login_button}
              onPress={() => checkOut(cart, note, total, value, superTotal)}
            >
              <Text style={styles.titles}>Xác Nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showVoucher}
        onRequestClose={() => {
          setShowVoucher(!showVoucher);
        }}
      >
        <View style={styles.viewDialog}>
          <View style={styles.modal}>
            <Text style={styles.textUD}>Ưu đãi</Text>
            <TextInput
              style={styles.inputCode}
              placeholder="code voucher"
              onChangeText={(e) => setVoucher(e)}
            />
            <View style={styles.viewBtn}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: Colors.white,
                    borderWidth: 0.8,
                    borderColor: Colors.orange,
                    borderRadius: 5,
                  },
                ]}
                onPress={() => setShowVoucher(!showVoucher)}
              >
                <Text
                  style={[GlobalStyles.bold_text, { color: Colors.orange }]}
                >
                  Hủy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => saveVoucher(voucher)}
              >
                <Text style={[GlobalStyles.bold_text, { color: Colors.white }]}>
                  Xác Nhận
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  textUpDown: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    borderColor: Colors.orange,
    margin: 5,
  },
  btnUpDown: {
    backgroundColor: "#DCDCDC",
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  upDown: {
    marginLeft: 10,
  },
  soLuong: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 20,
  },
  btnCheckout: {
    width: "100%",
    height: 45,
    backgroundColor: Colors.orange,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textCheckOut: {
    fontSize: 16,
    color: "#696969",
  },
  textCheckOutTotal: {
    fontSize: 18,
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
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingRight: 20,
    paddingLeft: 20,
  },
  checkOut: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  images: {
    width: "30%",
    height: "82%",
    borderRadius: 50,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderBottomWidth: 0.8,
    borderColor: Colors.orange,
    flexDirection: "row",
    alignItems: "center",
  },
  productName: {
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
  },
  price: {
    fontSize: 14,
    fontWeight: "400",
  },
  wrapText: {
    marginLeft: 10,
    // marginTop: 16,
    justifyContent: "center",
  },
  viewTT: {
    borderWidth: 0.5,
    borderColor: Colors.orange,
    borderRadius: 8,
    marginTop: 20,
  },
  viewIcon: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  titles: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 15,
  },
  update: {
    right: 10,
    position: "absolute",
  },
  textUpdate: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.orange,
    marginRight: 10,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.orange,
    alignSelf: "center",
    opacity: 0.8,
  },
  input: {
    padding: 10,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "400",
  },
  viewList: {
    borderWidth: 0.5,
    borderColor: Colors.orange,
    borderRadius: 8,
    marginTop: 20,
  },
  viewAdd: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.orange,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.white,
  },
  textAdd: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.white,
    marginRight: 10,
  },
  btnAdd: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    right: 20,
  },
  viewTotal: {
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: Colors.orange,
    borderRadius: 8,
    marginTop: 20,
  },
  textVAT: {
    fontSize: 16,
    color: "#696969",
    fontWeight: "400",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  viewVoucher: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 0.8,
    borderColor: Colors.orange,
    paddingHorizontal: 20,
  },
  textVoucher: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.grey,
    marginLeft: 10,
  },
  viewDialog: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  modal: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  textUD: {
    fontSize: 18,
    fontWeight: "700",
    width: "100%",
    padding: 10,
    backgroundColor: Colors.white,
    textAlign: "center",
    color: Colors.orange,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  inputCode: {
    borderRadius: 0.8,
    borderColor: Colors.grey,
    padding: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  viewBtn: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    backgroundColor: Colors.orange,
    borderRadius: 3,
    padding: 10,
  },
});
