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
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import CategoryItem from "../../components/CategoryItem";
import DetailItem from "../../components/DetailItem";
import MainItem from "../../components/MainItem";
import RecentItem from "../../components/RecentItem";
import Colors from "../../constants/Colors";

const TinTuc = [
  {
    id:1,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status:"High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri:"https://bizweb.dktcdn.net/thumb/grande/100/334/874/files/81595814-4029262793766182-1989204564020035584-o.jpg?v=1579576548760"
  },
  {
    id:2,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status:"High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri:"https://samsonite-vietnam.com/Data/Sites/1/News/344/uu-dai-vang-mung-ngay-thong-nhat.jpg"
  },
  {
    id:3,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status:"High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri:"https://samsonite-vietnam.com/Data/Sites/1/News/344/uu-dai-vang-mung-ngay-thong-nhat.jpg"
  },
  {
    id:4,
    name: " ƯU ĐÃI 50% CHÀO MỪNG THÀNH VIÊN MỚI",
    time: "1 tháng 10, 16:00",
    status:"High Food tặng ngay mã ưu đãi 50% cho khách hàng đầu tiên",
    uri:"https://samsonite-vietnam.com/Data/Sites/1/News/344/uu-dai-vang-mung-ngay-thong-nhat.jpg"
  },
]

const numColums = 2;
const HomeScreen = ({ navigation }) => {
  const [voucher, setVoucher] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/vouchers")
      .then((response) => response.json())
      .then((json) => setVoucher(json))
      .catch((err) => console.log(err));
  }, []);
  console.log(">>>>>>>>>>", voucher);


  return (
    <View style={styles.container}>
      <View style={styles.viewPlace}>
        <View style={styles.viewIconPlace}>
          <FontAwesome name="map-marker-alt" size={24} color="#7E7B7B" />
          <Text style={styles.textPlace}>Da Lat, Viet Nam</Text>
        </View>
      </View>
      <View style={styles.viewSearch}>
        <View style={styles.cardSearch}>
          <FontAwesome name="search" size={20} color="#F55A00" />
          <TextInput
            style={styles.inputSearch}
            placeholder="Search"
          ></TextInput>
        </View>
        <View style={styles.viewIconOption}>
          <FontAwesome name="bell" size={20} color="#7E7B7B" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewProfile}>
        <Image style={styles.imgMain} source={require("../../assets/BG .jpg")} />
        <View style={styles.viewImg}>
          <TouchableOpacity onPress={()=>navigation.navigate('UpdateProfileScreen')}>
            <Image style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.textChao}>Chào Bạn!</Text>
        </View>
      </View>
      <View style={styles.listVoucher}>
        <Text style={styles.title}>Ưu Đãi</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
          horizontal
          data={voucher}
          renderItem={({ item }) => (
            <View style={styles.viewVoucher}>
              <Image style={styles.imgVoucher} />
              <Text style={styles.titles}>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.viewMenu}>
        <View style={styles.viewText}>
          <Text style={styles.text}>Khám phá toàn bộ Menu nào!</Text>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.viewBtn} onPress={()=>navigation.navigate('Menu')}>
            <Text style={styles.textMenu}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewTintuc}>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={styles.txtTinTuc}>Tin Tức</Text>
        </View>
        <TouchableOpacity>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={styles.txtAll}>Tất Cả</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={TinTuc}
      renderItem={({item})=>(
        <View style={styles.viewList}>
          <Image style={styles.imgTT} source={item.uri}/>
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
    paddingLeft: 40,
    paddingRight: 20,
    backgroundColor: "#FFF",
  },
  viewPlace: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    paddingBottom:20
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
    fontFamily: "Hellix",
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
    fontFamily: "Hellix",
  },
  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom:10
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
    fontFamily: "Hellix",
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
  },
  viewImg: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: Colors.pale,
    borderRadius: 30,
    margin:10
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
    margin: 5,
    shadowColor: Colors.orange,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  imgVoucher: {
    width: "100%",
    height: 100,
    backgroundColor: Colors.orange,
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
  viewList:{
    width:Dimensions.get('window').width/1.5,
    margin:8,
    height:200,
    borderRadius:8,
    marginTop:15,
    borderRadius:8
  },
  imgTT:{
    width:"100%",
    height:"100%",
    borderRadius:8
  },
  viewEnd:{
    flex:1,
    alignItems:"center",
    padding:40
  },
  textEnd:{
    fontSize:16,
    fontWeight:"500",
    color:Colors.grey
  }
});
