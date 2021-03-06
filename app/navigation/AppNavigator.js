//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import MenuNavigator from "./MenuNavigator";
import HomeNavigator from "./HomeNavigator";
import AccountNavigator from "./AccountNavigator";
import OutletNavigator from "./OutletNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Menu"
      component={MenuNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Fontisto name="coffeescript" color={color} size={20} />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Outlet"
      component={OutletNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="location-on" color={color} size={27} />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="My Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
