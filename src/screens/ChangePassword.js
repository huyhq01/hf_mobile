import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground, Image, ToastAndroid } from 'react-native'
import GlobalStyles from '../utilities/GlobalStyles'
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import GlobalVariables from '../utilities/GlobalVariables';

const screen = Dimensions.get('window');

const ChangePassword = ({ navigation, isForgot }) => {
    let i = true;
    const [e, setE] = useState('')
    const [currentP, setCurrentP] = useState('');
    const [newP, setNewP] = useState('');
    const [newP2, setNewP2] = useState('');

    function changePassword(currentP, newP, newP2) {
        if (currentP.length == 0) {
            // ToastAndroid.show("Hãy nhập mật khẩu hiện tại",ToastAndroid.SHORT)
            console.log("Hãy nhập mật khẩu hiện tại");
            return;
        }
        validateP(newP, newP2);
        fetch(GlobalVariables.url + "change-password", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem('email'), oldP: currentP, newP: newP }),
        }).then(res => {
            if (res.status == 200) {
                // ToastAndroid.show(json.msg, ToastAndroid.SHORT);
                return { msg: "Đăng kí thành công!" }
                // navigation.replace("SignIn");
            } else {
                return res.json();
            }
        })
            .then(data => console.log(data.msg))
            .catch(err => console.log(err.message))
    }

    function forgotP(e, newP, newP2) {
        if (e.length == 0) {
            // ToastAndroid.show("Hãy nhập mật khẩu hiện tại",ToastAndroid.SHORT)
            console.log("Hãy nhập địa chỉ email");
            return;
        }
        validateP(newP, newP2);
        fetch(GlobalVariables.url + "forgotP", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem('email'), newP: newP }),
        }).then(res => {
            if (res.status == 200) {
                // ToastAndroid.show(json.msg, ToastAndroid.SHORT);
                return { msg: "Đăng kí thành công!" }
                // navigation.replace("SignIn");
            } else {
                return res.json();
            }
        })
            .then(data => console.log(data.msg))
            .catch(err => console.log(err.message))
    }

    function validateP(p, p2) {
        if (p.length == 0 || p2.length == 0) {
            // ToastAndroid.show("Hãy nhập mật khẩu",ToastAndroid.SHORT)
            console.log("Hãy nhập mật khẩu");
            return;
        }
        if (p !== p2) {
            // ToastAndroid.show("Mật khẩu không trùng khớp",ToastAndroid.SHORT)
            console.log("Mật khẩu không trùng khớp");
            return;
        }
    }

    function updateP(e, currentP, newP, newP2) {
        if (isForgot) {
            forgotP(e, newP, newP2);
        } else {
            changePassword(currentP, newP, newP2);
        }
    }

    return (
        <View style={{ flex: 2, backgroundColor: Colors.white }}>
            <Image source={require('../assets/logo.png')} style={{ marginHorizontal: screen.width * 25 / 100, flex: 1, width: screen.width * 50 / 100, resizeMode: 'contain' }} />

            <View style={GlobalStyles.input_container}>
                <Text style={GlobalStyles.title}>{i ? 'Forgot Password' : 'Change Password'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 16, width: screen.width - 100 }}>

                    {!i ?
                        <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder="Current Password"
                                onChangeText={(p) => setCurrentP(p)}
                            />
                            <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                        </View>
                        :
                        <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder="Email address"
                                onChangeText={(p) => setE(p)}
                            />
                            <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                        </View>
                    }

                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="New Password"
                            onChangeText={(p) => setNewP(p)}
                        />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="Confirm New Password"
                            onChangeText={(p) => setNewP2(p)}
                        />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight
                            style={[GlobalStyles.login_button, { flex: 1, backgroundColor: 'white', borderColor: Colors.orange, borderWidth: 2, marginRight: 8 }]}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={[GlobalStyles.bold_text, { color: Colors.orange }]}>Cancel</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={[GlobalStyles.login_button, { flex: 1, marginLeft: 8 }]}
                            onPress={() => updateP(currentP, newP, newP2)}
                        >
                            <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Change</Text>
                        </TouchableHighlight>
                    </View>


                </View>
            </View>
        </View>
    )
}

export default ChangePassword
