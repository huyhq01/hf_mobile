import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../../utilities/GlobalStyles';

const OrderSceen = ({ navigation }) => {
    let statuslist = [
        { _id: 0, name: 'Tất cả' },
        { _id: 1, name: 'Đang chờ' },
        { _id: 2, name: 'Đang xử lí' },
        { _id: 3, name: 'Đang giao' },
        { _id: 4, name: 'Đã giao' },
        { _id: 5, name: 'Đã hủy' }
    ];
    const [orderList, setOrderList] = useState([
        { _id: '1', createdTime: '31/02/2021 23:59', status: 'Đã giao', total: '200000', products: [{ _id: '1', name: 'Cơm gà xối mỡ', quantity: 2 }, { _id: '2', name: 'Trà đào', quantity: 3 }] },
        { _id: '2', createdTime: '29/09/2021 03:50', status: 'Đã giao', total: '100000', products: [{ _id: '1', name: 'Phở gà Bắc Cực', quantity: 1 }] }
    ]);

    const [currentStatus, setCurrentStatus] = useState(statuslist[0]._id);
    // useEffect
    function renderStatus({ item }) {
        return (
            <TouchableOpacity
                style={{ borderBottomWidth: 2, borderBottomColor:currentStatus==item._id?'white':'#F55A00', }}
                onPress={() => {
                    setCurrentStatus(item._id);
                    console.log(currentStatus);
                }}
            >
                <Text style={[GlobalStyles.bold_text, {marginVertical: 10, marginHorizontal: 7, color: item._id==currentStatus?'#F55A00':''}]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    function renderOrders({ item }) {
        return (
            <View style={GlobalStyles.item_order}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={GlobalStyles.normal_text} >Đặt lúc: <Text style={GlobalStyles.bold_text}>{item.createdTime}</Text>
                    </Text>
                    <Text style={GlobalStyles.bold_text}>{item.status}</Text>
                </View>
                <FlatList
                    data={item.products}
                    keyExtractor={i => i._id}
                    renderItem={(product) => {
                        return <Text style={GlobalStyles.normal_text}>{product.item.name} x{product.item.quantity}</Text>
                    }}
                />
                <Text style={[GlobalStyles.bold_text, { color: 'red', textAlign: 'right' }]}>Tổng: {item.total} vnd</Text>
            </View>
        )
    }
    return (
        <View style={[GlobalStyles.container, { backgroundColor: 'white', paddingLeft: 30, paddingRight: 10 }]}>
            <View>
                <FlatList
                    data={statuslist}
                    horizontal
                    keyExtractor={item => item._id}
                    renderItem={renderStatus}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginVertical: 16, }}

                />
            </View>

            {/* <View style={{ height: 2, marginBottom: 10, backgroundColor: '#F55A00' }}></View> */}
            <Text style={[GlobalStyles.bold_text, {color: '#F55A00', marginVertical:5, textAlign:'center'}]}>Chọn để xem chi tiết</Text>
            <View>
                <FlatList
                    data={orderList}
                    keyExtractor={item => item._id}
                    renderItem={renderOrders}
                />
            </View>
        </View>
    )
}

export default OrderSceen

const styles = StyleSheet.create({})
