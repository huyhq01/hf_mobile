import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import MainItem from "../../components/MainItem";
import Color from "../../constants/Colors";

import GlobalVariables from "../../utilities/GlobalVariables";

const WIDTH = Dimensions.get("window");

const Menu = ({ navigation }) => {

  const [productFilter, setProductFilter] = useState(productList);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const setStatusFilter = (currentCategory) => {
    if (currentCategory !== "All") {
      setProductFilter([
        ...productList.filter(
          (e) => e.category_id.category_name === currentCategory
        ),
      ]);
    } else {
      setProductFilter(productList);
    }
    setCurrentCategory(currentCategory);
  };

  useEffect(() => {
    fetch(GlobalVariables.url + "categories/all")
      .then((response) => response.json())
      .then((json) => {
        setProductFilter(json);
        setProductList(json);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((response) => response.json())
      .then((json) => setCategoryList(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewPlace}>
        <View style={styles.viewIconPlace}>
          <FontAwesome name="map-marker-alt" size={24} color="#F55A00" />
          <Text style={styles.textPlace}>Da Lat, Viet Nam</Text>
        </View>
        <View style={styles.viewIconNotifi}>
          <FontAwesome name="bell" size={24} color="#FF5B5B" />
        </View>
      </View>
      <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categoryList}
        renderItem={({ item }) => (
          <View style={[styles.viewItem]}>
            <TouchableOpacity
              style={[
                currentCategory === item.category_name && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(item.category_name)}
            >
              <Text
                style={[
                  styles.title,
                  currentCategory === item.category_name &&
                    styles.textTabActive,
                ]}
              >
                {item.category_name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={productFilter}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => (
          <MainItem
            onPress={() =>
              navigation.navigate("ItemScreen", {
                post: item,
              })
            }
            image={item.product_image}
            name={item.product_name}
            price={item.product_price}
          />
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
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  textTabActive: {
    color: Color.orange,
    fontWeight: "700",
  },
  btnTabActive: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: Color.orange,
    alignItems: "center",
    paddingBottom: 5,
  },
  viewItem: {
    width: WIDTH.width / 4.5,
    alignItems: "center",
  },
});
