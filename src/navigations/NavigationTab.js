import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FontAwesome from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/homes/HomeScreen";
import ProfileScreen from "../screens/profiles/ProfileScreen";
import Menu from "../screens/homes/Menu";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
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
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
        }}
      >
        {() => (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
              />
              <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
          )}
      </Tab.Screen>
      <Tab.Screen
        name="Menu "
        component={Menu}
        options={{
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
