import React, { useState } from 'react'
import { Image, View, Text, Alert, TextInput, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../utilities/GlobalStyles';
import Colors from '../../constants/Colors';

const ForgotPassword = ({ navigation, route }) => {
    // let email = route.params.email;
    let email = "huywoaytai@gmail.com";
    const [newP, setNewP] = useState('');
    const [newP2, setNewP2] = useState('');

    function changePassword(defaultEmail, newP, newP2) {
        if (validateP(newP, newP2) == true) {
            fetch(GlobalVariables.url + "change-password", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ email: defaultEmail, newP: newP, newP2: newP2, forgot: false }),
            }).then(res => res.json())
                .then(data => {
                    if (data.success) {
                        Alert.alert(data.msg)
                        navigation.replace("SignIn");
                    } else{}
                        
                })
                .catch(err => console.log(err.message))

        } else {
            Alert.alert(validateP(newP, newP2));
        }
    }

    function validateP(p, p2) {
        if (p.length == 0 || p2.length == 0) {
            return "Hãy nhập mật khẩu";
        }
        if (p.length < 6 || p2.length < 6) {
            return "Mật khẩu tối thiểu 6 ký tự";
        }
        if (p !== p2) {
            return "Mật khẩu không mới trùng khớp";
        }
        return true;
    }

    return (
        <View style={[GlobalStyles.container, { backgroundColor: 'white', marginTop: 7, paddingTop: 20 }]}>
            <Text style={[GlobalStyles.title, { alignSelf: 'flex-start' }]}>Reset Password</Text>

            <View style={{ flex: 1, flexDirection: 'column', marginTop: 16 }}>
                <View>
                    <Text style={GlobalStyles.label_text}>Mật khẩu mới</Text>
                    <View style={[GlobalStyles.input_form, { marginBottom: 20, marginTop: 4 }]}>
                        <TextInput
                            style={GlobalStyles.input}
                            onChangeText={(p) => setNewP(p)}
                        />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <Text style={GlobalStyles.label_text}>Nhập lai mật khẩu mới</Text>
                    <View style={[GlobalStyles.input_form, { marginBottom: 20, marginTop: 4 }]}>
                        <TextInput
                            style={GlobalStyles.input}
                            onChangeText={(p2) => setNewP2(p2)}
                        />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight
                        style={[GlobalStyles.login_button, { flex: 1, backgroundColor: 'white', borderColor: Colors.orange, borderWidth: 2, marginRight: 8 }]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[GlobalStyles.bold_text, { color: Colors.orange }]}>Hủy</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[GlobalStyles.login_button, { flex: 1, marginLeft: 8 }]}
                        onPress={() => changePassword(email, newP, newP2)}
                    >
                        <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Xác nhận</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword
