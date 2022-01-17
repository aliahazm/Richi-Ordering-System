//Author: Nor Aliah Binti Noor Azman (1814422)

import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

//import colors from "../colors";
import colors from "../config/colors";
import MyOrderCard from "../components/MyOrderCard";

function MyOrder() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      {/* Content */}
      <ScrollView style={styles.container}>
        <View>
          <Text style={{ color: colors.white, fontSize: 20, padding: 8 }}>
            Order In Progress
          </Text>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: colors.olive,
              marginBottom: 10,
              padding: 20,
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={styles.title}>Richiamo - UIA Gombak</Text>
              <Text style={styles.subTitle}>Mango Smoothie, Wedges</Text>
              <Text style={styles.subTitle}>Table 17</Text>
              <Text style={styles.subTitle}>RM11.80</Text>
              <Text style={styles.subTitle}>14 December 2021</Text>
            </View>

            <View style={{ justifyContent: "flex-end" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Order Received</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: colors.white, fontSize: 20, padding: 8 }}>
            Past Orders
          </Text>
          <MyOrderCard
            outlet="Richiamo - UIA Gombak"
            order="Iced Hazelnut Chocolate, Curly Fries"
            table="Table 10"
            price="RM14.40"
            date="10 December 2021"
          />

          <MyOrderCard
            outlet="Richiamo - Shah Alam"
            order="Biscotti Vanilla, Mushroom Soup with Garlic Bread"
            table="Table 25"
            price="RM15.50"
            date="2 December 2021"
          />

          <MyOrderCard
            outlet="Richiamo - UIA Gombak"
            order="Biscotti Chocolate, Chicken Wings"
            table="Table 16"
            price="RM22.40"
            date="14 November 2021"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
    backgroundColor: colors.orange,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 20,
  },

  subTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "300",
    paddingTop: 5,
  },
});
export default MyOrder;

// import React from "react";
// import { ScrollView, SafeAreaView, StyleSheet, View } from "react-native";

// import colors from "../config/colors";
// import AppText from "../components/AppText";
// import Order from "../components/Order";
// function MyOrder(props) {
//   return (
//     <SafeAreaView
//       style={{
//         backgroundColor: colors.backgroundGrey,
//         flex: 1,
//       }}
//     >
//       <ScrollView
//         style={{
//           backgroundColor: colors.backgroundGrey,
//           flex: 1,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: colors.backgroundGrey,
//             alignItems: "center",
//           }}
//         >
//           {/* <AppText style={styles.welcome}>Welcome, Khairul! My Order</AppText> */}
//           <Order />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   welcome: {
//     color: colors.white,
//     fontSize: 30,
//     fontWeight: "bold",
//     marginHorizontal: 25,
//     marginVertical: 10,
//     justifyContent: "center",
//     textAlign: "justify",
//   },
// });
// export default MyOrder;
