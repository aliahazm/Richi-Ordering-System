import React, {Component} from "react";
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

export default class Withdraw extends Component {

  alert = () => {
    alert("Thank you for your order!")
  }

  render(){
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
          <Text style={{ color: colors.greyText, fontSize: 20, padding: 8, marginTop: 10 }}>
            Order in progress..
          </Text>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: colors.olive,
              marginBottom: 10,
              padding: 20,
              flexDirection: "row",
              margin: 10
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
              <TouchableOpacity style={styles.button} onPress={this.alert}>
                <Text style={styles.buttonText}>Order Received</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: colors.greyText, fontSize: 20, padding: 8 }}>
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
    backgroundColor: colors.orange,
    width: "90%",
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
    fontSize: 15,
    fontWeight: "300",
    paddingTop: 5,
  },
});