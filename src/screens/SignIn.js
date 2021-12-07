import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FacebookLogin from '../components/FacebookLogin';
import GoogleLogin from '../components/GoogleLogin';
import GlobalStyles from '../utilities/GlobalStyles'

const screenwidth = Dimensions.get('window').width;

const SignIn = () => {
    return (
        <View style={[GlobalStyles.container, { top: 200 }]}>

            <Text style={GlobalStyles.title}>Sign In</Text>
            <Text style={GlobalStyles.bold_text}>With</Text>

            <View style={{ flex: 1, flexDirection: 'column', marginTop: 16, width: screenwidth - 100 }}>
                <View style={GlobalStyles.wrap_social_login_button}>
                    <FacebookLogin />
                    <GoogleLogin />
                </View>

                <Text style={[GlobalStyles.bold_text, { alignSelf: 'center', marginBottom: 8 }]}>
                    Or With Email
                </Text>

                <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                    <TextInput style={GlobalStyles.input} placeholder="Email address" />
                    <Icon name="check" size={20} style={{ marginEnd: 8 }} />
                </View>
                <View style={GlobalStyles.input_form}>
                    <TextInput style={GlobalStyles.input} placeholder="Password" />
                    <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                </View>

                <Text style={{ alignSelf: 'flex-end', color: '#1f222b', marginVertical: 16 }}>Forgot password?</Text>

                <TouchableHighlight style={GlobalStyles.login_button}>
                    <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Sign In</Text>
                </TouchableHighlight>

                <View style={{ alignItems: 'center' }}>
                    <Text style={[GlobalStyles.bold_text, { marginBottom: 8 }]}>Do you have account?</Text>
                    <Text style={[GlobalStyles.bold_text, GlobalStyles.underline_text]}>Register now</Text>
                </View>
            </View>
        </View>
    )
}

export default SignIn
