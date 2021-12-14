import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import FontAwesome from "react-native-vector-icons/fontawesome5"; 
import Colors from "../../constants/Colors";
import jwtDecode from "jwt-decode";

const UpdateProfileScreen = ({navigation}) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    function f() {
      let token = localStorage.getItem("t");
      let user = jwtDecode(token);
      console.log(user);
      fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((response) => response.json())
        .then((json) => setProfile(json))
        .catch((err) => console.log(err));
    }
    f();
  }, []);
  console.log(">>>", profile);
  return (
    
    <ScrollView>
    <View style={styles.container}>
    <View style = {styles.ViewHead}>

      <View style={styles.viewBack}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <FontAwesome name="chevron-left" size={20} color="#F55A00" />
        </TouchableOpacity>
      </View>
      <View style={styles.ViewUpdate}>
            <Text style={styles.textUpdate}>Cập nhật</Text>
          </View>
        </View>
        <View style={styles.viewAvt}>
          <TouchableOpacity>
            <Image style={styles.imgAvt} source={{
              uri: 'https://cdn.nap.edu.vn/avatar/202192/trend-avatar-facebook-1-1630566628626.jpg',
            }} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
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
              <Text style={styles.title}>Mật Khẩu</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                value="abc"
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
  );
};


export default UpdateProfileScreen;

const styles = StyleSheet.create({
  textUpdate:{
    color:Colors.orange
  },
  viewBack:{
    flex:1,
    margin:5,
    padding:5
  },
  ViewUpdate:{
    justifyContent:'flex-end',
    margin:5,
    padding:5
  },
  ViewHead:{
    flexDirection:'row'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingLeft:40,
    paddingRight:20
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
  header: {
    flex: 1,
    padding: 20,
    alignItems:'center'
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  viewTitle: {
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
    paddingLeft: 10,
  },
});
