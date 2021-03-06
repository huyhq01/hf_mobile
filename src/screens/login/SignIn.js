import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Alert,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../../utilities/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";

const screen = Dimensions.get("window");

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showP, setShowP] = useState(false);

  const login = (email, pass) => {
    if (!email.trim()) {
      Alert.alert("Không được để trống email");
      return;
    }
    if (!pass.trim()) {
      Alert.alert("Không được để trống pass word");
      return;
    } else {
      fetch(url.ipv4 + "login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: pass }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.success) {
            AsyncStorage.setItem("t", json.access_token);
            navigation.replace("MyTabs");
          } else {
            Alert.alert("Tài khoản đăng nhập không đúng");
            console.log("ccccc", json.msg);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(async () => {
    let token = AsyncStorage.getItem("t");
    fetch(url.ipv4 + "check", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + await token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          AsyncStorage.setItem("email", json.data.email);
          AsyncStorage.setItem("name", json.data.name);
          AsyncStorage.setItem("phone", json.data.phone);
          AsyncStorage.setItem("image", json.data.image);
          AsyncStorage.setItem("active", json.data.active);
          navigation.replace("MyTabs");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/bg1.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View
          style={[
            GlobalStyles.input_container,
            { top: (screen.height * 40) / 100 },
          ]}
        >
          <Text style={GlobalStyles.title}>Đăng nhập</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginTop: 16,
              width: screen.width - 100,
            }}
          >
            <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Email address"
                onChangeText={(e) => setEmail(e)}
              />
            </View>
            <View style={GlobalStyles.input_form}>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Password"
                secureTextEntry={!showP}
                onChangeText={(e) => setPass(e)}
              />
              <Icon name={showP ? "eyeo" : "eye"} onPress={() => setShowP(!showP)} color="gray" size={20} style={{ marginEnd: 8 }} />
            </View>

            <Text
              onPress={() => navigation.navigate("CP", { isForgot: true })}
              style={{
                alignSelf: "flex-end",
                color: "#1f222b",
                marginVertical: 16,
              }}
            >
              Quên mật khẩu?
            </Text>

            <TouchableHighlight
              style={GlobalStyles.login_button}
              onPress={() => login(email, pass)}
            >
              <Text style={[GlobalStyles.bold_text, { color: "white" }]}>
                Đăng nhập
              </Text>
            </TouchableHighlight>

            <View style={{ alignItems: "center" }}>
              <Text style={[GlobalStyles.bold_text, { marginBottom: 8 }]}>
                Chưa có tài khoản?
              </Text>
              <Text
                onPress={() => navigation.replace("Register")}
                style={[GlobalStyles.bold_text, GlobalStyles.underline_text]}
              >
                Đăng ký ngay
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignIn;
