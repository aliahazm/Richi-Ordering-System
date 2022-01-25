//Author: Muhammad Aidil Fahmiey Bin Osman (1819369), Nur Sabrina Fasha binti Zaidi Sham (1813526)
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/login";
import Signup from "./components/signup";
import AppNavigator from "./app/navigation/AppNavigator";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerLeft: null }}
      />
      <Stack.Screen
        name="Dashboard"
        component={AppNavigator}
        options={{ headerLeft: null }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}