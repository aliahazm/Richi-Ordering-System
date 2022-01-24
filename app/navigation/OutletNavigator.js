//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import Outlet from "../screens/Outlet";

const Stack = createNativeStackNavigator();

const OutletNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="Outlet"
      component={Outlet}
      options={{
        title: "OUTLETS",
        headerTintColor: colors.darkGrey,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        //headerShown: false,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default OutletNavigator;
