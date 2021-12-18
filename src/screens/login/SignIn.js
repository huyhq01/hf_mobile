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
  ScrollView
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


  const login = (email, pass) => {
    if (email.length == 0 || pass.length == 0) {
      Alert.alert("Please fill your email and password!");
      console.log("email", email, "pass", pass);
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
            console.log("ccccc", json.msg);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    let token = AsyncStorage.getItem("t");
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
            { top: (screen.height * 50) / 100 },
          ]}
        >
          <Text style={GlobalStyles.title}>Sign In</Text>
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
              <Icon name="check" size={20} style={{ marginEnd: 8 }} />
            </View>
            <View style={GlobalStyles.input_form}>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Password"
                onChangeText={(e) => setPass(e)}
              />
              <Icon
                name="eye"
                color="gray"
                size={20}
                style={{ marginEnd: 8 }}
              />
            </View>

            <Text
              style={{
                alignSelf: "flex-end",
                color: "#1f222b",
                marginVertical: 16,
              }}
            >
              Forgot password?
            </Text>

            <TouchableHighlight
              style={GlobalStyles.login_button}
              onPress={() => login(email, pass)}
            >
              <Text style={[GlobalStyles.bold_text, { color: "white" }]}>
                Sign In
              </Text>
            </TouchableHighlight>

            <View style={{ alignItems: "center" }}>
              <Text style={[GlobalStyles.bold_text, { marginBottom: 8 }]}>
                Do you have account?
              </Text>
              <Text
                onPress={() => navigation.replace("Register")}
                style={[GlobalStyles.bold_text, GlobalStyles.underline_text]}
              >
                Register now
              </Text>
            </View>
          </View>
        </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default SignIn;
