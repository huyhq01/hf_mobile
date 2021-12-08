import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/homes/HomeScreen";
import CartScreen from "./src/screens/orders/CartScreen";
import ItemScreen from "./src/screens/orders/ItemScreen";
import MyTabs from "./src/navigations/NavigationTab";
import SignIn from "./src/screens/SignIn";
import Register from "./src/screens/Register";
import OrderSceen from "./src/screens/orders/OrderSceen";
import WorldTree from "./src/screens/WorldTree";
import UpdateProfileScreen from "./src/screens/profiles/UpdateProfileScreen";
import Menu from "./src/screens/homes/Menu";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="World">
        <Stack.Screen name="Orders" component={OrderSceen} />
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
