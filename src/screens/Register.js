import React from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FacebookLogin from './custom_button/FacebookLogin';
import GoogleLogin from './custom_button/GoogleLogin';

const screenwidth = Dimensions.get('window').width;
const styles = require('./GlobalStyles')

const Register = () => {
    return (
        <View style={[styles.container, { top: 200 }]}>

            <Text style={styles.title}>Register</Text>
            <Text style={styles.bold_text}>With</Text>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: 16,
                width: screenwidth - 100
            }}>
                <View style={styles.wrap_social_login_button}>
                    <FacebookLogin />
                    <GoogleLogin />
                </View>

                <Text style={[styles.bold_text, { alignSelf: 'center', marginBottom: 8 }]}>
                    Or With Email
                </Text>

                <View style={[styles.input_form, { marginBottom: 16 }]}>
                    <TextInput style={styles.input} placeholder="Username" />
                    <Icon name="check" size={20} style={{ marginEnd: 8 }} />
                </View>
                <View style={[styles.input_form, { marginBottom: 16 }]}>
                    <TextInput style={styles.input} placeholder="Email address" />
                    <Icon name="check" size={20} style={{ marginEnd: 8 }} />
                </View>
                <View style={styles.input_form}>
                    <TextInput style={styles.input} placeholder="Password" />
                    <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                </View>

                <TouchableHighlight style={[styles.login_button, {marginTop: 32}]}>
                    <Text style={[styles.bold_text, { color: 'white' }]}>Sign In</Text>
                </TouchableHighlight>

                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.bold_text, { marginBottom: 8 }]}>Already have account?</Text>
                    <Text style={[styles.bold_text, styles.underline_text]}>Login</Text>
                </View>
            </View>
        </View>
    )
}

export default Register
