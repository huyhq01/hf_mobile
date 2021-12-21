import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const UpdateProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();
  const [base64, setBase64] = useState("");
  const [tmp, setTmp] = useState();

  async function getProfile() {
    let token = await AsyncStorage.getItem("t");
    // console.log("token", token);
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwibmFtZSI6ImRhbzk5OTk5IiwicGhvbmUiOiIwMTIzNDU2Nzg5IiwiYWN0aXZlIjp0cnVlLCJhZGRyZXNzIjoicXFxcXEiLCJpYXQiOjE2Mzk4NDY1OTB9.tjGzIDAG1-NjaCU5CWqDrDafyB-_gTRweRph8MowwOU"
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
        console.log("json", json);
        if (json.success) {
          setProfile(json.data);
          setBase64(json.data.image);
          setImage(json.data.image);
          setTmp(json.data.image);
          setName(json.data.name);
          setAddress(json.data.address);
          setPhone(json.data.phone);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getProfile();
    console.log("aa", profile);
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 0.075,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
    const base64 = await FileSystem.readAsStringAsync(result.uri, {
      encoding: "base64",
    });
    setBase64("data:image/jpeg;base64," + base64);
    console.log(base64.length);
  };

  async function updateProfile(name, phone, address, image, email) {
    if (base64.length > 11000) {
      Alert.alert("hình quá to tròn");
      setImage(tmp);
    } else {
      await fetch(url.ipv4 + "updateProfile", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          address: address,
          image: image,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          Alert.alert("Mày sửa thành công");
          console.log("tokennn", data.access_token);
          AsyncStorage.removeItem("t");
          AsyncStorage.setItem("t", data.access_token);
          navigation.navigate("ProfileScreen", { profile: data.profile });
          // console.log(data.msg)
          // Alert.alert("Ngu dốt")
        })
        .catch((error) => console.log("error: ", error.message));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewAvt}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.imgAvt}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewInput}>
        <FontAwesome name="envelope" size={20} color="#F55A00" />
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={profile ? profile.email : ""}
            editable={false}
          ></TextInput>
        </View>
      </View>
      <View style={styles.viewInput}>
        <FontAwesome name="user" size={20} color="#F55A00" />
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Tên</Text>
          <TextInput
            style={styles.input}
            defaultValue={profile ? profile.name : ""}
            onChangeText={(e) => setName(e)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.viewInput}>
        <FontAwesome name="phone-alt" size={20} color="#F55A00" />
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            defaultValue={profile ? profile.phone : ""}
            onChangeText={(e) => setPhone(e)}
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
            defaultValue={profile ? profile.address : ""}
            onChangeText={(e) => setAddress(e)}
          ></TextInput>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CP", { isForgot: false, email: profile.email })
          }
          style={styles.btnCheckout}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.white,
              fontSize: 17,
            }}
          >
            Đổi mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            updateProfile(name, phone, address, base64, profile.email)
          }
          style={styles.btnCheckout}
        >
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
    borderWidth: 0.5,
    borderColor: Colors.grey,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.grey,
    borderWidth: 2,
    borderColor: Colors.orange,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginRight: 40,
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
    borderBottomWidth: 0.5,
  },
});
