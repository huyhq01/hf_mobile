import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FontAwesome from "@expo/vector-icons/FontAwesome5";
import HomeScreen from "../screens/homes/HomeScreen";
import ProfileScreen from "../screens/profiles/ProfileScreen";
import UpdateProfileScreen from "../screens/profiles/UpdateProfileScreen";

import Menu from "../screens/homes/Menu";
import CartScreen from "../screens/orders/CartScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        labelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: "#F55A00",
        tabBarInactiveTintColor: "#7E7B7B",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown:false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown:false,
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clipboard" size={22} color={color} />
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown:false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={22} color={color} />
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown:false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
