import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import MenuCategory from "../screens/MenuCategory";
import HotBeverageMenu from "../screens/HotBeverageMenu";
import IceBlendedMenu from "../screens/IceBlendedMenu";
import ColdBeverageMenu from "../screens/ColdBeverageMenu";
import ProductDetails from "../screens/ProductDetails";
import { CartProvider } from "../components/CartContext";
import PlaceOrder from "../screens/PlaceOrder";

const Stack = createNativeStackNavigator();

const MenuNavigator = () => (
  <CartProvider>
    <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
      <Stack.Screen
        name="MenuCategory"
        component={MenuCategory}
        options={{
          title: "MENU",
          headerTintColor: colors.black,
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          headerStyle: { backgroundColor: colors.white },
          headerShown: true,
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
          headerShown: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
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
          headerShown: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
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
          headerShown: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: "PRODUCT DETAILS",
          headerTintColor: colors.black,
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          headerStyle: { backgroundColor: colors.white },
          headerShown: true,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="PlaceOrder"
        component={PlaceOrder}
        options={{
          title: "PLACE ORDER",
          headerTintColor: colors.black,
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          headerStyle: { backgroundColor: colors.white },
          headerShown: true,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  </CartProvider>
);

export default MenuNavigator;
