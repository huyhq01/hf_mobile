import React from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FacebookLogin from '../../components/FacebookLogin';
import GoogleLogin from '../../components/GoogleLogin';
import GlobalStyles from '../../utilities/GlobalStyles'

const screen = Dimensions.get('window');

const Register = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/bg2.png')} resizeMode='cover' style={{ flex: 1 }}>
            <View style={[GlobalStyles.input_container, { top: screen.height * 45 / 100 }]}>

                <Text style={GlobalStyles.title}>Register</Text>
                <Text style={GlobalStyles.bold_text}>With</Text>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: 16,
                    width: screen.width - 100
                }}>
                    <View style={GlobalStyles.wrap_social_login_button}>
                        <FacebookLogin />
                        <GoogleLogin />
                    </View>

                    <Text style={[GlobalStyles.bold_text, { alignSelf: 'center', marginBottom: 8 }]}>
                        Or With Email
                    </Text>

                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput style={GlobalStyles.input} placeholder="Username" />
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
