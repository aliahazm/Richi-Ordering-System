//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import MenuCategory from "../screens/MenuCategory";

const Stack = createNativeStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="MenuCategory"
      component={MenuCategory}
      options={{
        title: "MENU",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShown: true,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default MenuNavigator;
