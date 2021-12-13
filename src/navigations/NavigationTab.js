import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FontAwesome from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/homes/HomeScreen";
import ProfileScreen from "../screens/profiles/ProfileScreen";
import UpdateProfileScreen from "../screens/profiles/UpdateProfileScreen";

import Menu from "../screens/homes/Menu";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
        },
        activeTintColor: "#F55A00",
        inactiveTintColor: "#7E7B7B",
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
