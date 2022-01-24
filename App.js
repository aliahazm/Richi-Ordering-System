import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { CartProvider } from "./app/components/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer theme={navigationTheme}>
        {<AppNavigator />}
      </NavigationContainer>
    </CartProvider>
  );
}

// import React from "react";
// import ColdBeverageMenu from "./app/screens/ColdBeverageMenu";
// import Home from "./app/screens/Home";
// import HotBeverageMenu from "./app/screens/HotBeverageMenu";
// import IceBlendedMenu from "./app/screens/IceBlendedMenu";
// import MenuCategory from "./app/screens/MenuCategory";
// import MyAccount from "./app/screens/MyAccount";
// import MyOrder from "./app/screens/MyOrder";

// export default function App() {
//   return <Home />;
// }
