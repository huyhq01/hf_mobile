import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../utilities/GlobalStyles'

const FacebookLogin = () => {
    return (
        <View>
            <TouchableHighlight>
                <View style={[GlobalStyles.social_login_button, { borderColor: 'blue' }]}>
                    <Icon name="facebook-square" color="blue" size={20} />
                    <Text style={[GlobalStyles.bold_text, { color: "blue", marginStart: 8 }]}>Facebook</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}
export default FacebookLogin
