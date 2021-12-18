import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "./src/screens/orders/CartScreen";
import ItemScreen from "./src/screens/orders/ItemScreen";
import SignIn from "./src/screens/SignIn";
import Register from "./src/screens/Register";
import OrderSceen from "./src/screens/orders/OrderSceen";
import WorldTree from "./src/screens/WorldTree";
import Menu from "./src/screens/homes/Menu";
import OrderDetail from "./src/screens/orders/OrderDetail";
import GlobalVariables from "./src/utilities/GlobalVariables";
import Colors from "./src/constants/Colors";
import ChangePassword from "./src/screens/ChangePassword";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="CP"component={ChangePassword} options={{headerShown: false}}/>
        <Stack.Screen name="Orders" component={OrderSceen}
          options={{
            headerTitle: "Đơn Hàng",
            headerTintColor: 'white',
            headerStyle: { backgroundColor: Colors.orange },
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: 'white' }
          }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="World" component={WorldTree} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="OrderDetail" component={OrderDetail}
          options={{
            headerTitle: "Chi Tiết Đơn Hàng", 
            headerTintColor: 'white',
            headerStyle: {backgroundColor: Colors.orange} ,
            headerTitleStyle: {fontWeight: 'bold', fontSize: 20, color: 'white'}}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
