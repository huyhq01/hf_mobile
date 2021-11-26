import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Pressable, FlatList, Modal, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome2 from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const DATA = [
    {
        id: 1,
        uri: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-poached-egg-icon-free-buckle-illustration-png-image_4625156.jpg",
    },
    {
        id: 2,
        uri: "https://png.pngtree.com/element_our/png_detail/20181227/meat-vector-icon-png_293589.jpg",
    },
    {
        id: 3,
        uri: "https://png.pngtree.com/png-clipart/20190118/ourlarge/pngtree-green-vegetables-vegetable-illustration-hand-drawn-vegetables-hand-drawn-lettuce-png-image_453446.jpg",
    },
    {
        id: 4,
        uri: "https://png.pngtree.com/png-clipart/20190726/ourlarge/pngtree-cartoon-hand-drawn-onion-vegetable-illustration-png-image_1568467.jpg",
    },
];

const renderItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image style={{ width: "100%", height: '100%' }}
                source={{ uri: item.uri }} />
        </View>
    )
};

const ItemScreen = props => {
    const [visible, setVisible] = useState(false);
    const { navigation, route: { params: { post } } } = props
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.viewBack}>
                    <View style={styles.back}>
                        <FontAwesome name="chevron-left" size={24} />
                    </View>
                    <View style={styles.bell}>
                        <FontAwesome name="bell" size={24} color="#FF5B5B" />
                    </View>
                </View>
                <View style={styles.viewImages}>
                    <View style={styles.viewCard}>
                        <Image style={styles.image}
                            source={{uri: post.product_image}} />
                    </View>

                </View>
                <View style={styles.viewQuantity}>
                    <View style={styles.quantity}>
                        <Pressable style={styles.up}>
                            <Text style={{ fontSize: 20 }}>-</Text>
                        </Pressable>

                        <Text style={{ marginLeft: 15, marginRight: 15, fontSize: 18, fontWeight: 'bold' }}>1</Text>

                        <Pressable >
                            <Text style={{ fontSize: 16 }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.viewDetail}>
                    <Text style={{ fontWeight: '200', fontSize: 20 }}>{post.category_id.category_name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={styles.name}>{post.product_name}</Text>
                        </View>

                        <Text style={styles.price}>${post.product_price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 0.3 }}>
                            <FontAwesome2 name="star" size={20} color="#FF5B5B" />
                            <Text style={styles.textIcons}>4,9</Text>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 0.3 }}>
                            <FontAwesome name="clock" size={20} color="#A9A9A9" />
                            <Text style={styles.textIcons}>10 Mins</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome2 name="map-marker" size={20} color="#A9A9A9" />
                            <Text style={styles.textIcons}>250M</Text>
                        </View>
                    </View>
                    <View style={styles.viewTextDetails}>
                        <Text style={styles.textDetails}>
                            DETAILS
                        </Text>
                        <Text style={styles.textDetails2}>
                            {post.description}
                        </Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            style={{ flex: 0.5, margin: 10, borderRadius: 30 }}
                            horizontal
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        <Pressable style={styles.btnAdd} onPress={()=> setVisible(true)}>

                            <Text style={styles.textAdd}>+</Text>

                        </Pressable>
                    </View> */}
                </View>
            </View>
            <View style={styles.view2}>
                <Pressable style={styles.btnAddCart}>
                    <Text style={styles.textAddCart}>Add To Cart</Text>
                </Pressable>
            </View>
            <Modal animationType='fade'
                transparent={true}
                visible={visible}>
                    <View style={styles.viewModal}>
                        <Text style={styles.name}>Add Topings</Text>
                    </View>
            </Modal>
        </View>
        
    )
}


export default ItemScreen

const styles = StyleSheet.create({
    viewModal:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'#f2f2f2',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:Dimensions.get('window').height*0.5,
        maxHeight:Dimensions.get('window').height*0.5,
        alignItems:'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    textAddCart:{
        fontWeight:'bold',
        color:Colors.white,
        fontSize:17
    },
    btnAddCart:{
        width:'70%',
        height:50,
        backgroundColor:Colors.orange,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    view2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    view1:{
        flex:8,
        backgroundColor:'#ffffff',
        paddingLeft: 30,
        paddingRight: 30,
        borderBottomRightRadius:30,
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
    },
    textAdd: {
        fontSize: 50,
        color: Colors.orange,
        textAlign: 'center'
    },
    btnAdd: {
        width: 80,
        height: 80,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.orange,
        borderWidth:2,

    },
    item: {
        backgroundColor: '#ffffff',
        flexDirection: "row",
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // elevation: 5,
        width: 75,
        height: 75
    },
    viewTextDetails: {
        marginTop: 15
    },
    textDetails2: {
        fontSize: 16,
        fontWeight: '300'
    },
    textDetails: {
        fontSize: 20,
        fontWeight: '600',
    },
    textIcons: {
        fontWeight: '200',
        marginLeft: 5
    },
    price: {
        justifyContent: 'flex-end',
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.orange
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    viewQuantity: {
        alignItems: 'center',
        marginTop: 25
    },
    quantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 35,
        backgroundColor: Colors.white,
        borderRadius: 20,
        elevation: 5
    },
    image: {
        width: '70%',
        height: 210,
        borderRadius: 200
    },
    viewCard: {
        width: '100%',
        height: 310,
        backgroundColor: '#F3F2F3',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewDetail: {
        flex: 8
    },
    viewImages: {
        // position:'absolute',
        flex: 6,
        borderRadius: 300,
        alignItems: 'center'
    },
    bell: {
        alignItems: 'flex-end',
        margin: 10
    },
    back: {
        flex: 1,
        margin: 10
    },
    viewBack: {
        flexDirection: 'row',
        flex: 1.2
    },
    container: {
        flex: 1,
        backgroundColor:'#c0bfc0'
    },
})
