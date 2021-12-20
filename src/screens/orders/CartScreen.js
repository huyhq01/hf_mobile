import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import Colors from '../../constants/Colors';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:2,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b9',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53',
        productName: 'Salmon Sushi',
        categoryProduct: 'Restorant',
        uri: "https://genki.vn/wp-content/uploads/2020/03/GK.05-min.png",
        price: 7.99,
        quantity:1,
    },

];
const CartScreen = props => {
    const renderItem = ({ item }) => {
        return (
            <Pressable>
                <View style={styles.item}>

                    <Image style={{ width: '30%', height: '80%', borderRadius: 50 }}
                        source={{ uri: item.uri }} />

                    <View style={styles.wrapText}>
                        <Text style={styles.productName}>{item.productName}</Text>
                        <Text style={styles.categoryProduct}>{item.categoryProduct}</Text>
                        <Text style={styles.price}>{item.price}$</Text>
                    </View>
                    <View style={styles.soLuong}>
                        <Text style={{fontSize:23,fontWeight:'bold'}}>{item.quantity}</Text>
                    </View>

                    <View style={styles.upDown}>
                        <TouchableOpacity style={styles.btnUpDown}>
                            <Text style={styles.textUpDown}>+</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.btnUpDown}>
                            <Text style={styles.textUpDown}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
        )
    };

    return (
        <>
        <View style={{alignItems:'center',padding:10}}>
            <Text style={{fontSize:25}}>My Cart</Text>
        </View>

            <FlatList
            
            style={styles.container}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.checkOut}>
                <View style={styles.CheckOut1}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textCheckOut}>Subtotal(1item)</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text style={styles.textCheckOut}>$150</Text>
                    </View>
                </View>

                <View style={styles.CheckOut1}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textCheckOut}>Ship Fee(1,5km)</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text style={styles.textCheckOut}>$10</Text>
                    </View>
                </View>

                <View style={styles.CheckOut1}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textCheckOutTotal}>Total</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text style={styles.textCheckOutTotal2}>$160</Text>
                    </View>
                </View>

                <View style={{alignItems:'center', flex:1}}>
                    <Pressable style={styles.btnCheckout}>
                        <Text style={{fontWeight:'bold',
                        color:Colors.white,
                        fontSize:17}}>CheckOut</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}

export default CartScreen

const styles = StyleSheet.create({
    
    textUpDown:{
        fontSize:22,
        textAlign:'center'
    },
    btnUpDown:{
        backgroundColor:'#DCDCDC',
        marginBottom:10,
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        borderRadius:20,
    },
    upDown:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    soLuong:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },
    btnCheckout:{
        width: '80%',
        height: '80%',
        backgroundColor: Colors.orange,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 5,
        // marginLeft: 20,
    },
    textCheckOut: {
        fontSize: 18,
        color: '#696969'
    },
    textCheckOutTotal: {
        fontSize: 20,
        color: 'black',
        fontWeight:'bold'
    },
    textCheckOutTotal2: {
        fontSize: 22,
        color: Colors.orange,
        fontWeight:'bold'
    },

    CheckOut1: {
        flexDirection: 'row',
        alignItems: 'center',
        height:40
    },
    container: {
        flex: 1,
    },
    checkOut: {
        flex: 0.35,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    images: {
        width: '30%', height: '82%', borderRadius: 50
    },
    item: {
        backgroundColor: Colors.white,
        padding: 18,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    categoryProduct: {
        fontSize: 12,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    wrapText: {
        marginLeft: 10,
        // marginTop: 16,
        justifyContent: 'center',

    },
})
