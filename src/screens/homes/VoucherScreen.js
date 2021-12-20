import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'

const VoucherScreen = ({route,navigation}) => {
    let post = route.params.post;
    return (
        <View style={styles.container}>
            <View style={styles.viewVocher}>
                <Image style={styles.image} source={{uri : post.voucher_image}}/>
                <Text style={styles.textName}>{post.name}</Text>
                <Text style={styles.textCode} ></Text>
                <TextInput style={styles.textCode} value={post.code}/>
            </View>
            <View style={styles.viewDes}>
                <Text style={styles.textDes}>{post.description}</Text>
            </View>
        </View>
    )
}

export default VoucherScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:20
    },
    viewVocher:{
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        borderWidth:0.8,
        borderColor:Colors.orange,
        marginTop:20,
        paddingHorizontal:10,
        paddingVertical:15
    },
    image:{
        
        width:"100%",
        height:200,
        borderRadius:5
    },
    textName:{
        fontSize:21,
        fontWeight:"600",
        marginTop:10
    },textCode:{
        fontSize:18,
        fontWeight:"600",
        marginTop:10,
        textDecorationLine:"underline",
        opacity:0.5,
        fontStyle:"italic",
        textAlign:"center"
    },
    textDes:{
        fontSize:16,
        fontWeight:"400",
    },
    viewDes:{
        flex:1,
        borderRadius:8,
        borderWidth:0.8,
        borderColor:Colors.orange,
        marginTop:10,
        paddingHorizontal:10,
        paddingVertical:15,
        marginBottom:20
    }
})
