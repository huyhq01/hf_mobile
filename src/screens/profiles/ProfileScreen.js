import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/fontawesome5";
import Colors from "../../constants/Colors";

const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewAvt}>
        <Image style={styles.img}></Image>
        <View style={styles.viewName}>
          <Text style={styles.textName}>Chào Bạn!</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('UpdateProfileScreen')}>
            <Text style={styles.textUD}>Cập nhật thông tin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.viewTitle}>
          <FontAwesome name="info-circle" size={20} color="#7E7B7B" />
          <Text style={styles.title}>Thông tin Chung</Text>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Về High Food</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Danh sách quán</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.viewTitle}>
          <FontAwesome name="life-ring" size={20} color="#7E7B7B" />
          <Text style={styles.title}>Trung Tâm Hỗ Trợ</Text>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Câu hỏi thường gặp</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Phản hồi & hỗ trợ</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.viewTitle}>
          <FontAwesome name="info-circle" size={20} color="#7E7B7B" />
          <Text style={styles.title}>Khác</Text>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Ngôn ngữ</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Điều Khoản & Điều kiện</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.titles}>Về ứng dụng</Text>
          <View style={styles.viewIcon}>
            <FontAwesome name="chevron-right" size={20} color="#7E7B7B" />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.viewExit}>
          <FontAwesome name="sign-out-alt" size={20} color="#7E7B7B" />
          <Text style={styles.title}>Thoát ứng dụng</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewAvt: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFF",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  viewName: {
    justifyContent: "center",
    marginLeft: 20,
  },
  textName: {
    fontSize: 20,
    fontWeight: "700",
  },
  textUD: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: Colors.pale,
  },
  card: {
    padding: 20,
    backgroundColor: "#FFF",
    marginTop: 20,
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
    marginTop: 15,
  },
  titles: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.grey,
  },
  viewIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  viewExit: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },
});
