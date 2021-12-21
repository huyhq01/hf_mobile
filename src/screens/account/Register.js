import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  ToastAndroid,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../../utilities/GlobalStyles";

const screen = Dimensions.get("window");

const Register = ({ navigation }) => {
  const [e, setE] = useState("");
  const [p, setP] = useState("");
  const [showP, setShowP] = useState(false);

  function validate(e, p) {
    if (e.length == 0 || p.length == 0) {
      // ToastAndroid.show("Nhập thông tin đầy đủ bạn nhé!", ToastAndroid.LONG)
      console.log("empty");
      return;
    }
    return true;
  }

  function register(e, p) {
    if (!email.trim()) {
      Alert.alert("Không được để trống email");
      return;
    }
    if (!pass.trim()) {
      Alert.alert("Không được để trống pass word");
      return;
    } else {
      fetch("http://localhost:8080/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: e, password: p }),
      })
        .then((res) => {
          if (res.status == 200) {
            Alert.alert("Đăng kí thành công");
            // ToastAndroid.show(json.msg, ToastAndroid.SHORT);
            navigation.replace("SignIn");
            return { msg: "Đăng kí thành công!" };
          } else {
            return res.json();
          }
        })
        .then((data) => console.log(data.msg))
        .catch((error) => console.log("error: ", error.message));
    }
  }
  return (
    <ImageBackground
      source={require("../../assets/bg2.png")}
      resizeMode="cover"
      style={{ flex: 1}}
    >
      <View
        style={[
          GlobalStyles.input_container,
          { top: (screen.height * 40) / 100 },
        ]}
      >
        <Text style={GlobalStyles.title}>Đăng kí</Text>
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
              onChangeText={(e) => setE(e)}
              style={GlobalStyles.input}
              placeholder="Địa chỉ Email"
            />
          </View>
          <View style={GlobalStyles.input_form}>
            <TextInput
              secureTextEntry={!showP}
              style={GlobalStyles.input}
              onChangeText={(p) => setP(p)}
              placeholder="Mật khẩu"
            />
            <Icon name={showP? "eyeo":"eye"} onPress={() => setShowP(!showP)} color="gray" size={20} style={{ marginEnd: 8 }} />
          </View>

          <TouchableHighlight
            onPress={() => register(e, p)}
            style={[GlobalStyles.login_button, { marginTop: 32 }]}
          >
            <Text style={[GlobalStyles.bold_text, { color: "white" }]}>
              Đăng ký
            </Text>
          </TouchableHighlight>

          <View style={{ alignItems: "center" }}>
            <Text style={[GlobalStyles.bold_text, { marginBottom: 8 }]}>
              Đã có tài khoản?
            </Text>
            <Text
              onPress={() => navigation.replace("SignIn")}
              style={[GlobalStyles.bold_text, GlobalStyles.underline_text]}
            >
              Đăng nhập
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
