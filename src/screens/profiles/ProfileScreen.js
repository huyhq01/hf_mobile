import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/fontawesome5";
import Colors from "../../constants/Colors";

const ProfileScreen = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.viewAvt}>
        <Image style={styles.img}
          source={{
            uri: 'https://cdn.nap.edu.vn/avatar/202192/trend-avatar-facebook-1-1630566628626.jpg',
          }} />

        <Text style={styles.textName}>Minh Đạo</Text>
        <Text style={styles.textMail}>Dao@gmail.com</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UpdateProfileScreen')}>
        </TouchableOpacity>
      </View>
      <View style={styles.viewCard}>
        <View>
          <Pressable  onPress={() => navigation.navigate('UpdateProfileScreen')}>
          <View style={styles.viewTitles}>
            <FontAwesome name="user-edit" size={20} color="#F55A00" />
            <Text style={styles.titles} >Chỉnh sửa thông tin</Text>
            <View style={styles.viewIcon}>
              <FontAwesome name="chevron-right" size={15} color="#F55A00" />
            </View>
          </View>
          </Pressable>
          <View style={styles.viewTitles}>
            <FontAwesome name="clipboard-list" size={20} color="#F55A00" />
            <Text style={styles.titles}>  Đơn hàng của tôi</Text>
            <View style={styles.viewIcon}>
              <FontAwesome name="chevron-right" size={15} color="#F55A00" />
            </View>
          </View>
          <View style={styles.viewTitles}>
            <FontAwesome name="map-marker-alt" size={20} color="#F55A00" />
            <Text style={styles.titles}>  Địa chỉ đã lưu</Text>
            <View style={styles.viewIcon}>
              <FontAwesome name="chevron-right" size={15} color="#F55A00" />
            </View>
          </View>
        </View>
        <View style={{height:2,width:150, backgroundColor:Colors.orange, alignSelf:'center'}}></View>
        <View style={styles.viewTitles}>
          <FontAwesome name="sign-out-alt" size={20} color="#F55A00" />
          <Text style={styles.titles}>  Đăng Xuất</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={15} color="#F55A00" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  viewCard: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFF",
    marginTop: 30,
    borderRadius: 20,
    paddingBottom:15,
    paddingTop:30,
    paddingHorizontal:15
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    paddingLeft: 40,
  },
  viewAvt: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: Colors.orange,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 47,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  viewName: {
    justifyContent: "center",
    alignItems: 'center'
  },
  textName: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.white,
    marginTop: 15
  },
  textMail: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.white
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
    marginBottom:30
  },
  titles: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.grey,
    marginLeft: 10
  },
  viewIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
});
