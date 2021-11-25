import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/homes/HomeScreen';
import OrderSceen from '../screens/orders/OrderSceen';
import SaveScreen from '../screens/saves/SaveScreen';
import ProfileScreen from '../screens/profiles/ProfileScreen';
import CartScreen from '../screens/orders/CartScreen';
import ItemScreen from '../screens/orders/ItemScreen';



const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
        },
        activeTintColor: '#F55A00',
        inactiveTintColor: '#7E7B7B',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={ItemScreen}
        options={{
          tabBarLabel: 'My Order',
          tabBarIcon: ({color}) => (
            <FontAwesome name="clipboard" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SaveScreen"
        component={SaveScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
