import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import FontAwesome2 from "@expo/vector-icons/FontAwesome";
import Color from "../../constants/Colors";

import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../../utilities/GlobalVariables";

const WIDTH = Dimensions.get("window");
const numColumns = 2;

const Menu = ({ navigation }) => {
  const [productFilter, setProductFilter] = useState(productList);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [keyWord, setKeyWord] = useState([]);

  // const formData = (productFilter, numColumns) => {
  //   let totalRow = Math.floor(productList.length  / numColumns);
  //   let totalLastRow = productList.length - (totalRow * numColumns);

  //   while (totalLastRow !== 0 && totalLastRow !== numColumns) {
  //     productFilter.push({ id: `blank-${totalLastRow}`, empty: true });
  //     totalLastRow++;
  //   }
  //   return productFilter;
  // };

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
    fetch(url.ipv4 + "categories/all")
      .then((response) => response.json())
      .then((json) => {
        setProductFilter(json);
        setProductList(json);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(url.ipv4 + "categories")
      .then((response) => response.json())
      .then((json) => setCategoryList(json))
      .catch((err) => console.log(err));
  }, []);

  const search = async () => {
    if (keyWord == "") {
      return;
    }
    await fetch(url.ipv4 + "search/" + keyWord)
      .then((response) => response.json())
      .then((json) => setProductFilter(json))
      .catch((error) => console.error(error));
  };

  const renderItem = ({ item }) => {
    // if (item.empty) {
    //   return <View style={styles.invisible}>{item.id}</View>;
    // }
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ItemScreen", {
            post: item,
          })
        }
        style={styles.item}
      >
        <View>
          <Image
            style={{ width: "100%", height: 100, borderRadius: 10 }}
            source={{ uri: item.product_image }}
          />
          <Text style={styles.productName}>{item.product_name}</Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.price}>{item.product_price} đ</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewPlace}>
        <View style={styles.viewIconPlace}>
          <FontAwesome name="map-marker-alt" size={24} color="#F55A00" />
          <Text style={styles.textPlace}>Da Lat, Viet Nam</Text>
        </View>
      </View>

      <View style={styles.viewSearch}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Search for food"
          onChangeText={(aaa) => {
            setKeyWord(aaa);
          }}
        />
        <FontAwesome
          onPress={() => search()}
          name="search"
          size={20}
          color="#F55A00"
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoryList}
          keyExtractor={(item) => item._id}
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
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={productFilter}
          keyExtractor={(item) => `${item._id}`}
          renderItem={renderItem}
        />
      </View>
      <TouchableOpacity style={styles.viewCart} onPress={()=>navigation.navigate('CartScreen')}>
        <FontAwesome2
          name="shopping-cart"
          size={24}
          color="#fff"
        />
        <View style={styles.viewQuantity}>
          <Text style={styles.textQuantity}>6</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFF",
    paddingTop: 10,
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
  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingRight: 5,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },
  inputSearch: {
    flex: 1,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
  },
  wrapText: {
    justifyContent: "center",
  },
  productName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
  },
  item: {
    flex: 1,
    width: "50%",
    backgroundColor: Color.white,
    padding: 10,
    margin: 8,
    borderRadius: 5,
    shadowColor: Color.orange,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    justifyContent:"space-between"
  },
  invisible: {
    backgroundColor: "transparent",
  },
  viewCart: {
    backgroundColor: Color.orange,
    width: 55,
    height: 55,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius:30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Color.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  viewQuantity: {
    backgroundColor: "#fff",
    width: 20,
    height: 20,
    top: 0,
    right: 0,
    position: "absolute",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Color.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  textQuantity: {
    fontSize: 14,
    fontWeight: "600",
    color: 'red',
  },
});
