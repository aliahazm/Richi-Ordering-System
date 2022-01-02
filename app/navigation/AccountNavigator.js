import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import MyAccount from "../screens/MyAccount";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="MyAccount"
      component={MyAccount}
      options={{
        title: "MY ACCOUNT",
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

export default AccountNavigator;
