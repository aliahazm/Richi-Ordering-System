import React from "react";
import { Text, View, StyleSheet } from "react-native";

//import colors from "../colors";
import colors from "../config/colors";

function MyOrderCard({ outlet, order, table, price, date }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{outlet}</Text>
      <Text style={styles.subTitle}>{order}</Text>
      <Text style={styles.subTitle}>{table}</Text>
      <Text style={styles.subTitle}>{price}</Text>
      <Text style={styles.subTitle}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.darkGrey2,
    marginBottom: 5,
    padding: 20,
    margin: 10
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

export default MyOrderCard;