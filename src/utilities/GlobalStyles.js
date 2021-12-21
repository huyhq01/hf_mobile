import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../constants/Colors';
import GlobalVariables from '../utilities/GlobalVariables';
import theme from "../utilities/GlobalVariables";

const screen =Dimensions.get('window')

export default StyleSheet.create({
    container: {
        // height: screen.height,
        flex: 3,
        flexDirection: 'column',
        paddingLeft: 40,
        paddingRight: 20,
    },
    input_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: Colors.orange,
        fontSize: 30,
        margin: 8,
    },
    underline_text: {
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    bold_text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.dark_blue,
    },
    normal_text: {
        fontSize: 16,
    },
    social_login_button: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 8,
        width: 130,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_form: {
        height: 45,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'darkgray'
    },
    input: {
        paddingStart: 16,
        paddingEnd: 32,
        color: 'black',
        fontSize: 16,
        flex: 1,
    },
    wrap_social_login_button: {
        marginBottom: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    login_button: {
        borderRadius: 20,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 16,
        marginBottom: 16,
    },
    item_order:{
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 10,
        shadowColor: Colors.orange,
        shadowRadius: 9,
    },
    label_text: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.orange,
    },
})
