import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../../utilities/GlobalStyles';
import GlobalVariables from '../../utilities/GlobalVariables';
import AsyncStorage from '@react-native-async-storage/async-storage'

const moment = require('moment')
const OrderSceen = ({ navigation }) => {
    let statuslist = [
        { _id: 0, name: 'Tất cả', code: "all" },
        { _id: 1, name: 'Đang xử lí', code: "dangxuli" },
        { _id: 2, name: 'Đang giao', code: "danggiao" },
        { _id: 3, name: 'Đã giao', code: "dagiao" },
        { _id: 4, name: 'Đã hủy', code: "dahuy" }
    ];
    const [orderList, setOrderList] = useState([]);
    const [dList, setDList] = useState([]);

    useEffect(() => {
        console.log("code, ", currentStatus);
        if (currentStatus == "all") {
            setDList(orderList);
            return;
        } else {
            setDList([
                ...orderList.filter(
                    (e) => e.status.toLowerCase() === code
                ),
            ]);
        }
        console.log("currentStatus ", currentStatus);

    }, [currentStatus])
    function filterO(code) {

    }

    useEffect(() => {
        async function getOrders() {
            let token = await AsyncStorage.getItem("t");
            fetch(GlobalVariables.ipv4 + "orders", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.list);
                    if (json.success) {
                        setOrderList(json.list);
                        setDList(json.list);
                    }
                })
                .catch((err) => console.log(err));
        }
        getOrders();
    }, [])

    function getDate(date) {
        return moment(date).format("DD-MM-yyyy");
    }

    function getStatus(code) {
        if (code == "dangxuli") {
            return 'Đang xử lí';
        }
        if (code == "danggiao") {
            return 'Đang giao'
        }
        if (code == "dagiao") {
            return 'Đã giao'
        }
        if (code == "dahuy") {
            return 'Đã hủy';
        }
    }

    const [currentStatus, setCurrentStatus] = useState(statuslist[0]._id);
    // useEffect
    function renderStatus({ item }) {
        return (
            <TouchableOpacity
                style={{ borderBottomWidth: 2, borderBottomColor: currentStatus == item._id ? 'white' : '#F55A00', }}
                onPress={() => {
                    setCurrentStatus(item.code);
                    console.log(currentStatus);
                }}
            >
                <Text style={[GlobalStyles.bold_text, { marginVertical: 10, marginHorizontal: 7, color: item._id == currentStatus ? '#F55A00' : '' }]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    function renderOrders({ item }) {
        return (
            <TouchableOpacity style={GlobalStyles.item_order} onPress={() => navigation.navigate("OrderDetail", { id: item._id })}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={GlobalStyles.normal_text} >Đặt lúc: <Text style={GlobalStyles.bold_text}>{getDate(item.createdTime)}</Text>
                    </Text>
                    <Text style={GlobalStyles.bold_text}>{getStatus(item.status.toLowerCase())}</Text>
                </View>
                <FlatList
                    data={item.list}
                    keyExtractor={i => i._id}
                    renderItem={(product) => {
                        return <Text style={GlobalStyles.normal_text}>{product.item.product_name}</Text>
                    }}
                />
                <Text style={[GlobalStyles.bold_text, { color: 'red', textAlign: 'right' }]}>Tổng: {item.total} vnd</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={[GlobalStyles.container, { backgroundColor: 'white', paddingLeft: 30, paddingRight: 10 }]}>

            {/* <View style={{ height: 2, marginBottom: 10, backgroundColor: '#F55A00' }}></View> */}
            <Text style={[GlobalStyles.bold_text, { color: '#F55A00', marginVertical: 5, textAlign: 'center' }]}>Chọn để xem chi tiết</Text>
            <View>
                <FlatList
                    data={dList}
                    keyExtractor={item => item._id}
                    renderItem={renderOrders}
                />
            </View>
        </View>
    )
}

export default OrderSceen

const styles = StyleSheet.create({})
