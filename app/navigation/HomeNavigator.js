//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import Home from "../screens/Home";
import HotBeverageMenu from "../screens/HotBeverageMenu";
import ColdBeverageMenu from "../screens/ColdBeverageMenu";
import IceBlendedMenu from "../screens/IceBlendedMenu";
import MyOrder from "../screens/MyOrder";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: "HOME",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShown: false,
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="HotBeverageMenu"
      component={HotBeverageMenu}
      options={{
        title: "MENU",
        headerTintColor: colors.black,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerBackVisible: true,
      }}
    />
    <Stack.Screen
      name="ColdBeverageMenu"
      component={ColdBeverageMenu}
      options={{
        title: "MENU",
        headerTintColor: colors.black,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerBackVisible: true,
      }}
    />
    <Stack.Screen
      name="IceBlendedMenu"
      component={IceBlendedMenu}
      options={{
        title: "MENU",
        headerTintColor: colors.black,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerBackVisible: true,
      }}
    />
    <Stack.Screen
      name="MyOrder"
      component={MyOrder}
      options={{
        title: "MY ORDER",
        headerTintColor: colors.black,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerBackVisible: true,
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
