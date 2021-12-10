import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../utilities/GlobalStyles';

const GoogleLogin = () => {
    return (
        <View>
            <TouchableHighlight>
                <View style={[GlobalStyles.social_login_button, { borderColor: "red" }]}>
                    <Icon name="googleplus" color='red' size={20} />
                    <Text style={[GlobalStyles.bold_text, { color: 'red', marginStart: 8 }]}>Google</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}
export default GoogleLogin;