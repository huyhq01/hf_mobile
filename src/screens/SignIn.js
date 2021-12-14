import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../utilities/GlobalStyles'

const screen = Dimensions.get('window');

const SignIn = ({navigation}) => {

    return (
        <ImageBackground source={require('../assets/bg1.png')} resizeMode='cover' style={{ flex: 1, top: -100 }}>
            <View style={[GlobalStyles.input_container, { top: screen.height*50/100 }]}>
                <Text style={GlobalStyles.title}>Sign In</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 16, width: screen.width - 100 }}>
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
                        <Text onPress={()=> navigation.replace("Register")} style={[GlobalStyles.bold_text, GlobalStyles.underline_text]}>Register now</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignIn
