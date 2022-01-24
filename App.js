//Author: Muhammad Aidil Fahmiey Bin Osman (1819369), Nur Sabrina Fasha binti Zaidi Sham (1813526)

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/login";
import Signup from "./components/signup";
import AppNavigator from "./app/navigation/AppNavigator";
import { CartProvider } from "./app/components/CartContext";

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
    <CartProvider>
      <NavigationContainer theme={navigationTheme}>
        {<AppNavigator />}
      </NavigationContainer>
    </CartProvider>
  );
}

//-----------------------------
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import navigationTheme from "./app/navigation/navigationTheme";
// import AppNavigator from "./app/navigation/AppNavigator";

// export default function App() {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       {<AppNavigator />}
//     </NavigationContainer>
//   );
// }

//------------------

// import React from "react";
// import MyOrderCard from "./app/components/MyOrderCard";
// //import MyOrder from "./app/components/MyOrder";
// import ColdBeverageMenu from "./app/screens/ColdBeverageMenu";
// import Home from "./app/screens/Home";
// import HotBeverageMenu from "./app/screens/HotBeverageMenu";
// import IceBlendedMenu from "./app/screens/IceBlendedMenu";
// import MenuCategory from "./app/screens/MenuCategory";
// import MyAccount from "./app/screens/MyAccount";
// //import Map from "./app/components/Map";
// //import FetchListScreen from "./app/components/Profile";
// import Map from "./app/components/Map";
// //import MyOrder from "./app/screens/MyOrder";

// export default function App() {
//   return <Map />;
// }
