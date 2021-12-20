import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./src/screens/login/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "./src/screens/orders/CartScreen";
import ItemScreen from "./src/screens/orders/ItemScreen";
import MyTabs from "./src/navigations/NavigationTab";
import UpdateProfileScreen from "./src/screens/profiles/UpdateProfileScreen";
import Colors from "./src/constants/Colors";
import Register from "./src/screens/login/Register";
import SplashScreen from "./src/screens/login/SplashScreen";
import VoucherScreen from "./src/screens/homes/VoucherScreen";
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyTabs"
          component={MyTabs}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerTitle: "Thanh toán",
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.orange },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{
            headerTitle: "Sản Phẩm",
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.orange },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="UpdateProfileScreen"
          component={UpdateProfileScreen}
          options={{
            headerTitle: "Cập Nhập Thông Tin",
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.orange },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="VoucherScreen"
          component={VoucherScreen}
          options={{
            headerTitle: "Ưu đãi",
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.orange },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
