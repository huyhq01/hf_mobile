import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableHighlight, ImageBackground, Image } from 'react-native'
import GlobalStyles from '../utilities/GlobalStyles'
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';

const screen = Dimensions.get('window');

const ChangePassword = ({ navigation, isForgot }) => {
    let i = false;
    // , height:  
    return (
        <View style={{ flex: 2, backgroundColor: Colors.white }}>
            <Image source={require('../assets/logo.png')} style={{ marginHorizontal: screen.width * 25 / 100, flex: 1, width: screen.width * 50 / 100, resizeMode: 'contain' }} />

            <View style={GlobalStyles.input_container}>
                <Text style={GlobalStyles.title}>Change Password</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 16, width: screen.width - 100 }}>

                    {!i &&
                        <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                            <TextInput style={GlobalStyles.input} placeholder="Current Password" />
                            <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                        </View>
                    }

                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput style={GlobalStyles.input} placeholder="New Password" />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <View style={[GlobalStyles.input_form, { marginBottom: 16 }]}>
                        <TextInput style={GlobalStyles.input} placeholder="Confirm New Password" />
                        <Icon name="eye" color="gray" size={20} style={{ marginEnd: 8 }} />
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableHighlight 
                            style={[GlobalStyles.login_button, {flex: 1, backgroundColor: 'white', borderColor: Colors.orange, borderWidth: 2, marginRight: 8}]}
                            onPress={()=> navigation.goBack()}    
                        >
                            <Text style={[GlobalStyles.bold_text, { color: Colors.orange }]}>Cancel</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={[GlobalStyles.login_button, {flex: 1, marginLeft: 8}]}>
                            <Text style={[GlobalStyles.bold_text, { color: 'white' }]}>Change</Text>
                        </TouchableHighlight>
                    </View>


                </View>
            </View>
        </View>
    )
}

export default ChangePassword
