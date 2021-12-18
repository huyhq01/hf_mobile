import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";

const UpdateProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState();
  // useEffect(() => {
  //   function f() {
  //     let token = AsyncStorage.getItem("t");
  //     let user = jwtDecode(token);
  //     console.log(user);
  //     fetch(url.ipv4 + "user", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: user.email }),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => setProfile(json))
  //       .catch((err) => console.log(err));
  //   }
  //   f();
  // }, []);
  // console.log(">>>", profile);
  return (
      <View style={styles.container}>
        <View style={styles.viewAvt}>
          <TouchableOpacity>
            <Image
              style={styles.imgAvt}
              source={{
                uri: "https://cdn.nap.edu.vn/avatar/202192/trend-avatar-facebook-1-1630566628626.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="user" size={20} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Tên</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập tên đầy đủ của bạn"
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="envelope" size={20} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập email của bạn"
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="phone-alt" size={20} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Số điện thoại</Text>
            <TextInput
              style={styles.input}
              placeholder="0369756908"
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="key" size={20} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Địa chỉ</Text>
            <TextInput
              style={styles.input}
              placeholder="92 Hoang Hoa Tham"
            ></TextInput>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.btnCheckout}>
            <Text
              style={{
                fontWeight: "bold",
                color: Colors.white,
                fontSize: 17,
              }}
            >
              Lưu thông tin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  btnCheckout: {
    width: "70%",
    height: 40,
    backgroundColor: Colors.orange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textUpdate: {
    color: Colors.orange,
  },
  ViewUpdate: {
    justifyContent: "flex-end",
    margin: 5,
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingLeft: 40,
    paddingRight: 20,
  },
  image: {
    width: "100%",
    height: 150,
    position: "absolute",
  },
  viewAvt: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  imgAvt: {
    borderWidth: 1,
    borderColor: Colors.grey,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.grey,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginRight:40
  },
  viewTitle: {
    width: "100%",
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.grey,
  },
  input: {
    fontSize: 18,
    fontWeight: "400",
    height: 40,
    borderBottomWidth: 1,
  },
});
