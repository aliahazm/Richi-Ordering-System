import React from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import routes from "../navigation/routes";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";

const orderItems = [
  { name: "Cappucino", price: 6.9, qty: 1 },
  { name: "Espresso", price: 3, qty: 2 },
  { name: "Hazelnut Latte", price: 7.5, qty: 1 },
  { name: "Hazelnut Chocolate", price: 7.5, qty: 1 },
];

function PlaceOrder({ props, navigation }) {
  function SubTotal() {
    let subtotal = 0;
    for (let i = 0; i < orderItems.length; i++) {
      subtotal += orderItems[i].price * orderItems[i].qty;
    }
    return subtotal;
  }

  function CalculateTax() {
    let tax = 0;
    tax = SubTotal() * 0.06;
    return tax;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.backgroundGrey,
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: colors.backgroundGrey,
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Text style={styles.headerText}>Order Confirmation</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              paddingVertical: 5,
            }}
          >
            Your Order
          </Text>
          <View
            style={{
              borderBottomColor: colors.grey,
              borderBottomWidth: 1,
            }}
          />
          <FlatList
            data={orderItems}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.white,
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 5,
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      padding: 6,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      paddingBottom: 6,
                    }}
                  >
                    RM {item.price.toFixed(2)}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      padding: 12,
                    }}
                  >
                    {item.qty}
                  </Text>
                </View>
              </View>
            )}
          />
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              paddingVertical: 5,
            }}
          ></Text>

          <View
            style={{
              borderBottomColor: colors.grey,
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 19,
                  paddingVertical: 10,
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                }}
              >
                include 6% SST
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 19,
                  paddingVertical: 10,
                  textAlign: "right",
                }}
              >
                RM {SubTotal().toFixed(2)}
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  textAlign: "right",
                }}
              >
                RM {CalculateTax().toFixed(2)}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <TouchableOpacity
              style={styles.buttonConfirm}
              onPress={() => {
                navigation.navigate(routes.MY_ORDER),
                  Alert.alert("Order Sent!");
              }}
            >
              <Text style={styles.buttonText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PlaceOrder;

const styles = StyleSheet.create({
  headerText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    padding: 10,
  },
  buttonConfirm: {
    backgroundColor: colors.indigo,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: "50%",
    margin: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
