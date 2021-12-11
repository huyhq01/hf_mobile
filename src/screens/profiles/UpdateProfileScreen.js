import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/fontawesome5";
import Colors from "../../constants/Colors";

const UpdateProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <View style={styles.viewBack}>
        <FontAwesome name="chevron-left" size={20} color="#ffffff" />
      </View>
      </TouchableOpacity>
      <View style={styles.viewAvt}>
        <TouchableOpacity>
          <Image style={styles.imgAvt} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.viewInput}>
          <FontAwesome name="user" size={24} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Tên</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập tên đầy đủ của bạn"
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="envelope" size={24} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập email của bạn"
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="venus-mars" size={24} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Giới tính</Text>
            <TextInput
              style={styles.input}
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="calendar-alt" size={24} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Ngày Sinh</Text>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={styles.input}
              value="16/09/2001"
            ></TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <FontAwesome name="phone-alt" size={24} color="#F55A00" />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Số điện thoại</Text>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={styles.input}
              value="0369756908"
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewBack: {
    margin: 20,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: Colors.pale,
    position: "absolute",
  },
  viewAvt: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
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
    fontSize: 14,
    fontWeight: "400",
  },
  input: {
    fontSize: 18,
    fontWeight: "400",
    height: 40,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
});
