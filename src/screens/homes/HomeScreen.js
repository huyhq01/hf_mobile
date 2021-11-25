import React, { useState, useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import CategoryItem from "../../components/CategoryItem";
import DetailItem from "../../components/DetailItem";
import MainItem from "../../components/MainItem";
import RecentItem from "../../components/RecentItem";

import Color from "../../constants/Colors";

const Main = [
  {
    id: 1,
    name: "Italian Pizza",
    place: "48 Soba Basha, Alexandria",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
  },
  {
    id: 2,
    name: "Italian Pizza",
    place: "48 Soba Basha, Alexandria",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
  },
  {
    id: 3,
    name: "Italian Pizza",
    place: "48 Soba Basha, Alexandria",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
  },
];

const Detail = [
  {
    id: 1,
    name: "Chicken",
    uri: "https://cdn-icons-png.flaticon.com/256/4359/4359633.png",
  },
  {
    id: 2,
    name: "Chicken",
    uri: "https://cdn-icons-png.flaticon.com/256/4359/4359633.png",
  },
  {
    id: 3,
    name: "Chicken",
    uri: "https://cdn-icons-png.flaticon.com/256/4359/4359633.png",
  },
  {
    id: 4,
    name: "Chicken",
    uri: "https://cdn-icons-png.flaticon.com/256/4359/4359633.png",
  },
  {
    id: 5,
    name: "Chicken",
    uri: "https://cdn-icons-png.flaticon.com/256/4359/4359633.png",
  },
];

const Recent = [
  {
    id: 1,
    name: "Italian Pizza",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    status: "Fresh hamburger white chicken, salad, tomatoes",
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
  },
  {
    id: 2,
    name: "Italian Pizza",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    status: "Fresh hamburger white chicken, salad, tomatoes",
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
  },
  {
    id: 3,
    name: "Italian Pizza",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    status: "Fresh hamburger white chicken, salad, tomatoes",
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
  },
];

const ListTab = [
  {
    status: "Near you",
  },
  {
    status: "Newest",
  },
  {
    status: "Best rated",
  },
  {
    status: "Trending",
  },
];
const ListData = [
  {
    id: 1,
    name: "Hamburger",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
    detail: "Restaurants",
    status: "Near you",
  },
  {
    id: 6,
    name: "Hamburger",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
    detail: "Restaurants",
    status: "Near you",
  },
  {
    id: 7,
    name: "Hamburger",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
    detail: "Restaurants",
    status: "Near you",
  },
  {
    id: 2,
    name: "Topoki",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
    detail: "Restaurants",
    status: "Newest",
  },
  {
    id: 3,
    name: "Italian Pizza",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
    detail: "Restaurants",
    status: "Best rated",
  },
  {
    id: 4,
    name: "Milk Tea",
    place: "200m",
    assess: "4.8",
    time: "15:25",
    price: 3000,
    uri: "https://anhdep.tv/attachments/143b4a92fa369f3beee2c93bfe2990c7-jpeg.6915/",
    detail: "Restaurants",
    status: "Trending",
  },
];
const HomeScreen = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
    
  // }, []);
  fetch("http://10.0.2.3:8080/api/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  console.log("data:  ", data);

  const [status, setStatus] = useState("All");
  const [dataList, setDataList] = useState(ListData);

  const setStatusFilter = (status) => {
    if (status !== "All") {
      setDataList([...ListData.filter((e) => e.status === status)]);
    } else {
      setDataList(ListData);
    }
    setStatus(status);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewPlace}>
          <View style={styles.viewIconPlace}>
            <FontAwesome name="map-marker-alt" size={24} color="#7E7B7B" />
            <Text style={styles.textPlace}>Da Lat, Viet Nam</Text>
          </View>
          <View style={styles.viewIconNotifi}>
            <FontAwesome name="bell" size={24} color="#7E7B7B" />
          </View>
        </View>
        <View style={styles.viewTitleMain}>
          <Text style={styles.titleMain}>Food</Text>
          <Text style={styles.titleMain}>Specialy For You</Text>
        </View>

        <View style={styles.viewSearch}>
          <View style={styles.cardSearch}>
            <FontAwesome name="search" size={20} color="#F55A00" />
            <TextInput
              style={styles.inputSearch}
              placeholder="Search for food"
            ></TextInput>
          </View>
          <View style={styles.viewIconOption}>
            <FontAwesome name="sliders-h" size={20} color="#F55A00" />
          </View>
        </View>
        <View style={styles.listMain}>
          <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
              <MainItem
                // image={item.uri}
                name={item.product_name}
                // place={item.place}
                // assess={item.assess}
                // time={item.time}
                // price={item.price}
                // status={item.status}
              />
              // <View style={{flex:1}}>
              //   <Text style={{fontSize:16}}>{item.name}</Text>
              // </View>
            )}
          />
        </View>
        <View style={styles.listDetail}>
          <FlatList
            horizontal
            data={Detail}
            renderItem={({ item }) => (
              <DetailItem image={item.uri} name={item.name} />
            )}
          />
        </View>
        <View style={styles.textRecent}>
          <Text style={styles.titleRecent}>Your Recent Visits</Text>
          <TouchableOpacity style={styles.btnSeeAll}>
            <Text style={styles.titleSeeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listRecent}>
          <FlatList
            horizontal
            data={Recent}
            renderItem={({ item }) => (
              <RecentItem
                image={item.uri}
                name={item.name}
                place={item.place}
                assess={item.assess}
                time={item.time}
                price={item.price}
                status={item.status}
              />
            )}
          />
        </View>
        <View style={styles.listTab}>
          {ListTab.map((e) => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}
            >
              <Text
                style={[
                  styles.textTab,
                  status === e.status && styles.textTabActive,
                ]}
              >
                {e.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <CategoryItem
              image={item.uri}
              name={item.name}
              place={item.place}
              assess={item.assess}
              time={item.time}
              price={item.price}
              category={item.detail}
            />
          )}
        />
      </View>
    </ScrollView>
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
  listMain: {
    marginTop: 20,
  },
  listDetail: {
    marginTop: 20,
    borderBottomWidth: 0.2,
    borderColor: "#000",
    paddingBottom: 20,
  },
  textRecent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  titleRecent: {
    fontSize: 21,
    fontStyle: "normal",
    fontWeight: "bold",
    fontFamily: "Hellix",
  },
  titleSeeAll: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    fontFamily: "Hellix",
    color: Color.orange,
    right: 10,
  },
  btnSeeAll: {
    flex: 1,
    alignItems: "flex-end",
  },
  listRecent: {
    flex: 1,
    borderBottomWidth: 0.2,
  },
  listTab: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  btnTab: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    margin: 5,
  },
  textTab: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textTabActive: {
    color: Color.orange,
  },
  btnTabActive: {
    borderColor: Color.orange,
  },
  viewListData: {
    flex: 1,
    height: 200,
  },
});
