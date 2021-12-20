import React, { useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../utilities/GlobalStyles';

const screen = Dimensions.get('window');

const Register = ({ navigation }) => {
    const [e, setE] = useState('');
    const [p, setP] = useState('');

    function validate(e, p) {
        if (e.length == 0 || p.length == 0) {
            // ToastAndroid.show("Nhập thông tin đầy đủ bạn nhé!", ToastAndroid.LONG)
            console.log("empty");
            return;
        }
        return true;
    }

    function register(e, p) {
        if (validate(e,p)) {
            fetch("http://localhost:8080/api/sign-up", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ email: e, password: p }),
            })
                .then(res => {
                    if(res.status == 200){
                        // ToastAndroid.show(json.msg, ToastAndroid.SHORT);
                        return {msg: "Đăng kí thành công!"}
                        // navigation.replace("SignIn");
                    } else {
                        return res.json();
                    }
                })
                .then(data => console.log(data.msg))
                .catch(error => console.log("error: ", error.message))
        }
    }
    return (
        <ImageBackground source={require('../../assets/bg2.png')} resizeMode='cover' style={{ flex: 1, top: -100 }}>
            <View style={[GlobalStyles.input_container, { top: screen.height * 50 / 100 }]}>

                <Text style={GlobalStyles.title}>Register</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: 16,
                    width: screen.width - 100
                }}>
                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput onChangeText={(e)=>setE(e)} style={GlobalStyles.input} placeholder="Email address" />
                        <Icon name="check" size={20} style={{ marginEnd: 8 }} />
                    </View>
                    <View style={GlobalStyles.input_form}>
                        <TextInput style={GlobalStyles.input} onChangeText={(p)=>setP(p)} placeholder="Password" />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <TouchableHighlight onPress={()=>register(e,p)} style={[GlobalStyles.login_button, { marginTop: 32 }]}>
                        <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Register</Text>
                    </TouchableHighlight>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[GlobalStyles.bold_text, { marginBottom: 8 }]}>Already have account?</Text>
                        <Text onPress={() => navigation.replace("SignIn")} style={[GlobalStyles.bold_text, GlobalStyles.underline_text]}>Login</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Register
