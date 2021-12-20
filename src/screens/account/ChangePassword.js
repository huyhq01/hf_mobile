import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground, Image, ToastAndroid, Alert } from 'react-native'
import GlobalStyles from '../../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import GlobalVariables from '../../utilities/GlobalVariables';

const screen = Dimensions.get('window');

const ChangePassword = ({ navigation, isForgot, email }) => {
    // let {i, defaultEmail} = route.params
    let i = false;
    let defaultEmail = "huywoaytai@gmail.com";
    const [e, setE] = useState('')
    const [currentP, setCurrentP] = useState('');
    const [newP, setNewP] = useState('');
    const [newP2, setNewP2] = useState('');

    function changePassword(defaultEmail, currentP, newP, newP2) {
        if (currentP.length == 0) {
            Alert.alert("Hãy nhập mật khẩu hiện tại");
            return;
        }
        if (validateP(newP, newP2) == true) {
            fetch(GlobalVariables.url + "change-password", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ email: defaultEmail, oldP: currentP, newP: newP, newP2: newP2, forgot: false }),
            }).then(res => {
                if (res.status == 200) {
                    // ToastAndroid.show(json.msg, ToastAndroid.SHORT);
                    return { msg: "Đổi mật khẩu thành công!" }
                    // navigation.replace("SignIn");
                } else {
                    return res.json();
                }
            })
                .then(data => {
                    Alert.alert(data.msg)
                    console.log("success");
                })
                .catch(err => console.log(err.message))

        } else {
            Alert.alert(validateP(newP, newP2));
        }
    }

    function forgotP(e) {
        if (e.length == 0) {
            // ToastAndroid.show("Hãy nhập mật khẩu hiện tại",ToastAndroid.SHORT)
            console.log("Hãy nhập địa chỉ email");
            return;
        }
        fetch(GlobalVariables.url + "get-otp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email: e }),
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigation.navigate("Otp", { email: e, otp: data.data })
                } else {
                    Alert.alert(data.msg)
                }
            })
            .catch(err => console.log(err.message))
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

    function updateP(e, currentP, newP, newP2, i, defaultEmail) {
        // dùng isForgot, biến i là tạm thời
        if (i) {
            forgotP(e);
        } else {
            changePassword(defaultEmail, currentP, newP, newP2);
        }
    }

    return (
        <View style={[GlobalStyles.container, { backgroundColor: 'white', marginTop: 7, paddingTop: 20 }]}>
            {/* <Image source={require('../../assets/logo.png')} style={{width: 200, height: 200, alignSelf: 'center', resizeMode: 'contain'}} /> */}

            <Text style={GlobalStyles.title}>{i ? 'Reset Password' : 'Change Password'}</Text>
            <View style={{ flexDirection: 'column', marginTop: 16 }}>

                {i ?
                    <View>
                        <Text style={[GlobalStyles.normal_text, {marginBottom: 20}]}>Nhập email được liên kết với tài khoản của bạn và chúng tôi sẽ gửi email kèm theo mã OTP để đặt lại mật khẩu của bạn.</Text>

                        <Text style={GlobalStyles.label_text}>   Email</Text>
                        <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                            <TextInput
                                style={GlobalStyles.input}
                                onChangeText={(p) => setE(p)}
                            />
                        </View>
                    </View>
                    :
                    <View>
                        <Text style={GlobalStyles.label_text}>Mật khẩu hiện tại</Text>
                        <View style={[GlobalStyles.input_form, { marginBottom: 20, marginTop: 4 }]}>
                            <TextInput
                                style={GlobalStyles.input}
                                onChangeText={(cp) => setCurrentP(cp)}
                            />
                            <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                        </View>

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
                }
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight
                        style={[GlobalStyles.login_button, { flex: 1, backgroundColor: 'white', borderColor: Colors.orange, borderWidth: 2, marginRight: 8 }]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[GlobalStyles.bold_text, { color: Colors.orange }]}>Hủy</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[GlobalStyles.login_button, { flex: 1, marginLeft: 8 }]}
                        onPress={() => updateP(e, currentP, newP, newP2, i, defaultEmail)}
                    >
                        <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Xác nhận</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default ChangePassword
