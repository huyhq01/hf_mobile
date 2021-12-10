import React from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FacebookLogin from '../components/FacebookLogin';
import GoogleLogin from '../components/GoogleLogin';
import GlobalStyles from '../utilities/GlobalStyles'

const screen = Dimensions.get('window');

const Register = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/bg2.png')} resizeMode='cover' style={{ flex: 1, top: -100 }}>
            <View style={[GlobalStyles.input_container, { top: screen.height * 50 / 100 }]}>

                <Text style={GlobalStyles.title}>Register</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: 16,
                    width: screen.width - 100
                }}>
                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput style={GlobalStyles.input} placeholder="Name" />
                        <Icon name="check" size={20} style={{ marginEnd: 8 }} />
                    </View>
                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput style={GlobalStyles.input} placeholder="Email address" />
                        <Icon name="check" size={20} style={{ marginEnd: 8 }} />
                    </View>
                    <View style={GlobalStyles.input_form}>
                        <TextInput style={GlobalStyles.input} placeholder="Password" />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <TouchableHighlight style={[GlobalStyles.login_button, { marginTop: 32 }]}>
                        <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Sign In</Text>
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
