import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "./src/screens/orders/CartScreen";
import ItemScreen from "./src/screens/orders/ItemScreen";
import Register from "./src/screens/account/Register";
import OrderSceen from "./src/screens/orders/OrderSceen";
import WorldTree from "./src/screens/WorldTree";
import Menu from "./src/screens/homes/Menu";
import OrderDetail from "./src/screens/orders/OrderDetail";
import Colors from "./src/constants/Colors";
import ChangePassword from "./src/screens/account/ChangePassword";
import OtpScreen from "./src/screens/account/OtpScreen";
import ForgotPassword from './src/screens/account/ForgotPassword';
import SplashScreen from './src/screens/login/SplashScreen';
import MyTabs from './src/navigations/NavigationTab';
import UpdateProfileScreen from "./src/screens/profiles/UpdateProfileScreen";
import VoucherScreen from "./src/screens/homes/VoucherScreen";
import SignIn from "./src/screens/login/SignIn";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Otp" component={OtpScreen}
        options={{
          headerTitle: "Xác thực OTP",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.orange },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: 'white' }
        }}/>
        <Stack.Screen name="ForgotP" component={ForgotPassword}
        options={{
          headerTitle: "Đổi mật khẩu",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.orange },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: 'white' }
        }} />
        <Stack.Screen name="CP" component={ChangePassword}
        options={{
          headerTitle: "Cập nhật mật khẩu",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.orange },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: 'white' }
        }}/>
        <Stack.Screen name="Orders" component={OrderSceen}
          options={{
            headerTitle: "Đơn Hàng",
            headerTintColor: 'white',
            headerStyle: { backgroundColor: Colors.orange },
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: 'white' }
          }}
        />
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
