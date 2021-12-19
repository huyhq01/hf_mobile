import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";



const WIDTH = Dimensions.get("window");
const ProfileScreen = ({ navigation, route }) => {
  // console.log(route);
  let p = route.params ? route.params.profile : {}
  console.log("bờ ê bê", p);
  const [profile, setProfile] = useState(p);
  async function logOut() {
    await AsyncStorage.clear()
    navigation.replace("SignIn");
  }

  async function getProfile() {
    let token = await AsyncStorage.getItem("t");
    // console.log(token)
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaW1hZ2UiOiIiLCJuYW1lIjoiZGFvMTExMTExIiwicGhvbmUiOiIwMTIzNDU2Nzg5IiwiYWN0aXZlIjp0cnVlLCJhZGRyZXNzIjoicXFxcXEiLCJpYXQiOjE2Mzk4NDcxMDB9.-sqmmy3SudZG7XYsZ1nplljf-70TEQ43GynsVRy670E"
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
          setProfile(json.data)
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProfile()
    });
    return unsubscribe;
  }, []);
  console.log("ppp", profile)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.viewAvt}>
          <Image
            style={styles.img}
            source={{
              uri: profile ? profile.image : "",
            }}
          />
          <Text style={styles.textName}>{profile ? profile.name : ""}</Text>
          <Text style={styles.textMail}>{profile ? profile.email : ""}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdateProfileScreen")}
          ></TouchableOpacity>
        </View>
        <View style={styles.viewCard}>
          <View>
            <Pressable onPress={() => navigation.navigate("UpdateProfileScreen")}>
              <View style={styles.viewTitles}>
                <FontAwesome name="user-edit" size={20} color="#F55A00" />
                <Text style={styles.titles}>Chỉnh sửa thông tin</Text>
                <View style={styles.viewIcon}>
                  <FontAwesome name="chevron-right" size={15} color="#F55A00" />
                </View>
              </View>
            </Pressable>
            <View style={styles.viewTitles}>
              <FontAwesome name="clipboard-list" size={20} color="#F55A00" />
              <Text style={styles.titles}> Đơn hàng của tôi</Text>
              <View style={styles.viewIcon}>
                <FontAwesome name="chevron-right" size={15} color="#F55A00" />
              </View>
            </View>
            <View style={styles.viewTitles}>
              <FontAwesome name="map-marker-alt" size={20} color="#F55A00" />
              <Text style={styles.titles}> Địa chỉ đã lưu</Text>
              <View style={styles.viewIcon}>
                <FontAwesome name="chevron-right" size={15} color="#F55A00" />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 2,
              width: 150,
              backgroundColor: Colors.orange,
              alignSelf: "center",
            }}
          ></View>
          <TouchableOpacity style={styles.viewTitles} onPress={() => logOut()}>
            <FontAwesome name="sign-out-alt" size={20} color="#F55A00" />
            <Text style={styles.titles}> Đăng Xuất</Text>
            <View style={styles.viewIcon}>
              <FontAwesome name="chevron-right" size={15} color="#F55A00" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  viewCard: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    borderRadius: 20,
    paddingBottom: 15,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingRight: 20,
    paddingLeft: 40,
    paddingTop: 20
  },
  viewAvt: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: Colors.orange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: WIDTH.width / 2,
    borderWidth: 1,
    borderColor: Colors.grey,
    marginBottom: 10,
    borderWidth: 3,
    borderColor:Colors.white
  },
  viewName: {
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.white,
    marginVertical: 15,
  },
  textMail: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.white,
  },
  textUD: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: Colors.pale,
  },
  viewTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 15,
  },
  viewTitles: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    // padding: 10,
    marginBottom: 30,
  },
  titles: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.grey,
    marginLeft: 10,
  },
  viewIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
});
