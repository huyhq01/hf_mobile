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


const Menu = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dataC, setDataC] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((response) => response.json())
      .then((json) => setDataC(json))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/categories/"+id)
  //     .then((response) => response.json())
  //     .then((json) => setDataC(json))
  //     .catch((err) => console.log(err));
  // }, []);


  return (
    
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
        <View style={styles.listDetail}>
          <FlatList
            horizontal
            data={dataC}
            renderItem={({ item }) => (
              <DetailItem 
              
              image={item.category_image} 
              name={item.category_name} 
              />
            )}
          />
        </View>
        
          <FlatList
            // horizontal
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <MainItem
                onPress={()=>navigation.navigate('ItemScreen', {
                  post: item})}
                image={ item.product_image}
                name={item.product_name}
                // place={item.place}
                // assess={item.assess}
                // time={item.time}
                price={item.product_price}
                // status={item.status}
              />
              // <View style={{flex:1}}>
              //   <Text style={{fontSize:16}}>{item.name}</Text>
              // </View>
            )}
          />
        </View>
        
      
    
  );
};

export default Menu;

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
