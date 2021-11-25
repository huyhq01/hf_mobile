import { StyleSheet } from 'react-native'
import theme from "../utilities/GlobalVariables";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: theme.bright_orange,
        fontSize: 30,
        margin: 8,
    },
    bold_text: {
        fontWeight: 'bold',
        color: theme.dark_blue,
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
        backgroundColor: theme.bright_orange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 16,
        marginBottom: 16,
    },
    underline_text: {
        textDecorationLine: 'underline',
    }
})
