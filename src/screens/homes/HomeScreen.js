import React, { useState, useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";
import Colors from "../../constants/Colors";

const TinTuc = [
  {
    id: 1,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status: "High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri: "https://stc.shopiness.vn/deal/2019/02/28/5/2/e/4/1551326720693_540.png",
  },
  {
    id: 2,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status: "High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri: "https://samsonite-vietnam.com/Data/Sites/1/News/344/uu-dai-vang-mung-ngay-thong-nhat.jpg",
  },
  {
    id: 3,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status: "High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri: "https://samsonite-vietnam.com/Data/Sites/1/News/344/uu-dai-vang-mung-ngay-thong-nhat.jpg",
  },
  {
    id: 4,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status: "High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri: "https://samsonite-vietnam.com/Data/Sites/1/News/344/uu-dai-vang-mung-ngay-thong-nhat.jpg",
  },
];

const numColums = 2;
const HomeScreen = ({ navigation }) => {
  const [voucher, setVoucher] = useState([]);

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(url.ipv4 + "vouchers")
      .then((response) => response.json())
      .then((json) => setVoucher(json))
      .catch((err) => console.log(err));
  }, []);

  async function getProfile() {
    let token = await AsyncStorage.getItem("t");
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

  return (
    <View style={styles.container}>
      <View style={styles.viewPlace}>
        <View style={styles.viewIconPlace}>
          <FontAwesome name="map-marker-alt" size={24} color="#F55A00" />
          <Text style={styles.textPlace}>Da Lat, Viet Nam</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewProfile}>
          <Image style={styles.imgMain} source={require('../../image/bg.png')}/>
          <View style={styles.viewImg}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <Image
                style={styles.img}
                source={{
                  uri: profile ? profile.image : "",
                }}
              />
            </TouchableOpacity>
            <Text style={styles.textChao}>Chào {profile ? profile.name : ""} !</Text>
          </View>
        </View>
        <View style={styles.listVoucher}>
          <Text style={styles.title}>Ưu Đãi</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={voucher}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>navigation.navigate("VoucherScreen",{
                post: item,
              })}>
              <View style={styles.viewVoucher}>
                <Image style={styles.imgVoucher} source={{uri : item.voucher_image}} />
                <Text style={styles.titles}>{item.description}</Text>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.viewMenu}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Khám phá toàn bộ Menu nào!</Text>
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.viewBtn}
              onPress={() => navigation.navigate("Menu")}
            >
              <Text style={styles.textMenu}>Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewTintuc}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text style={styles.txtTinTuc}>Tin Tức</Text>
          </View>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={TinTuc}
          keyExtractor={item=> item.id}
          renderItem={({ item }) => (
            <View style={styles.viewList}>
              <Image style={styles.imgTT} source={{uri : item.uri}} />
            </View>
          )}
        />
        <View style={styles.viewEnd}>
          <Text style={styles.textEnd}>Tin cuối rồi. Bạn thật tuyệt vời!</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.white,
    paddingTop:10
  },
  viewPlace: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    paddingBottom: 10,
  },
  viewIconPlace: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  viewIconNotifi: {
    justifyContent: "flex-end",
  },
  textPlace: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    marginLeft: 15,
  },
  viewTitleMain: {
    marginTop: 10,
    marginBottom: 10,
  },
  titleMain: {
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  cardSearch: {
    width: "90%",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    paddingLeft: 15,
  },
  viewIconOption: {
    width: "10%",
    margin: 10,
  },
  inputSearch: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    marginLeft: 10,
  },
  viewProfile: {
    height: 150,
    borderRadius: 8,
    marginTop: 20,
  },
  imgMain: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius:5
  },
  viewImg: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  img: {
    width: 40,
    height: 40,
    backgroundColor: Colors.pale,
    borderRadius: 30,
    margin: 10,
  },
  textChao: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.white,
  },
  listMain: {
    marginTop: 20,
  },
  listVoucher: {
    marginTop: 20,
    paddingBottom: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "700",
  },
  viewVoucher: {
    borderRadius: 6,
    width: 100,
    borderWidth:0.5,
    borderColor:Colors.orange,
    padding:5,
    marginRight:15,
    marginTop:10
  },
  imgVoucher: {
    width: "100%",
    height: 100,
    borderRadius: 6,
  },
  titles: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginLeft: 5,
  },
  viewMenu: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.orange,
  },
  viewText: {
    flex: 1,
  },
  textMenu: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.white,
  },
  viewButton: {
    flex: 1,
    alignItems: "flex-end",
  },
  viewBtn: {
    borderRadius: 4,
    backgroundColor: Colors.orange,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
  viewTintuc: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  txtTinTuc: {
    fontSize: 16,
    fontWeight: "700",
  },
  txtAll: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.orange,
  },
  viewList: {
    width: Dimensions.get("window").width / 1.5,
    margin: 8,
    height: 200,
    borderRadius: 8,
    marginTop: 15,
    borderRadius: 8,
  },
  imgTT: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  viewEnd: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  textEnd: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.grey,
  },
});
