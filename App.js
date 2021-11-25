<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screens/SignIn'
=======
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/homes/HomeScreen";
import CartScreen from "./src/screens/orders/CartScreen";
import ItemScreen from "./src/screens/orders/ItemScreen";
import MyTabs from "./src/navigations/NavigationTab";
>>>>>>> d6812a1b3f31cda8dcdbc2d8100bad5e9efe3941


const Stack = createNativeStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <SignIn />
=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> d6812a1b3f31cda8dcdbc2d8100bad5e9efe3941
  );
};

<<<<<<< HEAD
=======
export default App;
>>>>>>> d6812a1b3f31cda8dcdbc2d8100bad5e9efe3941
