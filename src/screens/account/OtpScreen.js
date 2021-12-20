import React, { useEffect, useState } from 'react'
import { Image, View, Text, Alert, TextInput, TouchableHighlight } from 'react-native'
import Colors from '../../constants/Colors';
import GlobalStyles from '../../utilities/GlobalStyles';
import GlobalVariables from '../../utilities/GlobalVariables';

const OtpScreen = ({ navigation, route }) => {
    let { email, otp } = route.params;
    // let email = "huywoaytai@gmail.com"
    // let otp = 111111;
    const [userOtp, setUserOtp] = useState('')
    const [systemOtp, setSystemOtp] = useState(otp);
    const [preventRequest, setPR] = useState(true);

    function requestOtp() {
        setPR(true);
        countdownGetOtp()
        fetch(GlobalVariables.url + "forgotP", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email: email, forgot: true }),
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    setSystemOtp(data.data);
                } else {
                    Alert.alert(data.msg)
                }
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        if (userOtp.length == 6) {
            if (userOtp == systemOtp) {
                navigation.replace("ForgotP", { email: email })
            }
            else {
                Alert.alert("Mã OTP không trật khớp. Vui lòng nhập lại!")
                setUserOtp('');
            }
        }
    }, [userOtp])

    function hideEmail(email) {
        return email.replace(/(.{2})(.*)(?=@)/,
            function (gp1, gp2, gp3) {
                for (let i = 0; i < gp3.length; i++) {
                    gp2 += "*";
                } return gp2;
            });
    };

    function countdownGetOtp() {
        setTimeout(() => setPR(false), 183000);
    }

    useEffect(() => {
        countdownGetOtp();
    }, [])
    return (
        <View style={[GlobalStyles.container, { backgroundColor: 'white', marginTop: 10, paddingTop: 20 }]}>
            <Text style={[GlobalStyles.title, { alignSelf: 'flex-start' }]}>Lấy mã OTP</Text>
            <View style={{ flexDirection: 'column', marginTop: 16}}>

                <View style={[GlobalStyles.input_form, { marginVertical: 16 }]}>
                    <TextInput
                        style={[GlobalStyles.input, { paddingEnd: 16, letterSpacing: 9, textAlign: 'center' }]}
                        placeholder='🍕🍕🍕🍕🍕🍕'
                        onChangeText={(o) => setUserOtp(o)}
                    />
                </View>

                <TouchableHighlight
                    style={[GlobalStyles.login_button, { marginLeft: 8, backgroundColor: preventRequest ? 'grey' : Colors.orange }]}
                    onPress={() => requestOtp()}
                    disabled={preventRequest}
                >
                    <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Yêu cầu mã OTP</Text>
                </TouchableHighlight>
                {preventRequest && <Text style={GlobalStyles.normal_text}>Quý khách vui lòng nhập mã OTP đã được gửi đến địa chỉ {hideEmail(email)}</Text>}
            </View>
        </View>
    )
}

export default OtpScreen
