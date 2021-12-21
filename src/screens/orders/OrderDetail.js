import React, { useEffect } from 'react'
import { View, Text, TouchableHighlight, FlatList, Image } from 'react-native'
import Colors from '../../constants/Colors';
import GlobalStyles from '../../utilities/GlobalStyles';

const OrderDetail = ({ route }) => {
    let id = route.params.id;
    let products = [
        { _id: '1', name: 'Cơm gà xối mỡ', quantity: 2, price: 30000, image: "https://cdn.cet.edu.vn/wp-content/uploads/2020/04/cach-lam-com-chien-ga-xoi-mo.jpg" },
        { _id: '12', name: 'Trà đào', quantity: 1, price: 20000, image: "https://vietblend.vn/wp-content/uploads/2016/10/vb.web-tra-dao.jpg" },
        { _id: '13', name: 'Trà chanh không đường', quantity: 1, price: 15000, image: "https://cdn.dayphache.edu.vn/wp-content/uploads/2020/03/tra-chanh-giai-khat.jpg" },
    ]
    function total() {
        let total = 0;
        products.forEach(p => {
            total += p.quantity * p.price;
        })
        return total;
    }

    useEffect(() => {
        
    }, [input])

    return (
        <View style={[GlobalStyles.container, { backgroundColor: 'white', paddingVertical: 20 }]}>
            <View style={{ flex: 2 }}>
                <FlatList
                    data={products}
                    keyExtractor={i => i._id}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={(detail) => {
                        return (
                            <View>
                                <Image source={detail.item.image} style={{width: 100, height: 100, marginBottom: 10}} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={GlobalStyles.bold_text}>{detail.item.quantity}x  </Text>
                                        <Text style={GlobalStyles.bold_text}>{detail.item.name}</Text>
                                    </View>
                                    <Text style={GlobalStyles.normal_text}>{detail.item.price} vnd</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{ backgroundColor: Colors.orange, height: 2, margin: 20 }}></View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={GlobalStyles.bold_text}>Tạm tính</Text>
                    <Text style={GlobalStyles.normal_text}>{total()} vnd</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={GlobalStyles.bold_text}>Voucher</Text>
                    <Text style={GlobalStyles.normal_text}>Không có</Text>
                </View>

                <View style={{ backgroundColor: Colors.orange, height: 2, margin: 20 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[GlobalStyles.bold_text, { color: 'red' }]}>Tổng cộng</Text>
                    <Text style={[GlobalStyles.normal_text, { color: 'red' }]}>{total()} vnd</Text>
                </View>
                <View style={{ backgroundColor: Colors.orange, height: 2, margin: 20 }}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={GlobalStyles.bold_text}>Thanh toán bằng</Text>
                    <Text style={GlobalStyles.normal_text}>Ví HighFood</Text>
                </View>
            </View>
            <TouchableHighlight style={{ marginHorizontal: 10, borderRadius: 15, padding: 10, backgroundColor: Colors.orange, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Đặt lại</Text>
            </TouchableHighlight>
        </View>
    )
}

export default OrderDetail
