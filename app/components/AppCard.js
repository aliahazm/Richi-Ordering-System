import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
function AppCard({ location, order, table, price, date, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.location}>{location}</AppText>
          <AppText numberOfLines={1} style={styles.orderDetail}>
            {order}
          </AppText>
          <AppText style={styles.orderDetail}>{table}</AppText>
          <AppText style={styles.orderDetail}>{price}</AppText>
          <AppText style={styles.orderDetail}>{date}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.greyCard,
    marginBottom: 10,
    overflow: "hidden",
  },

  detailsContainer: {
    padding: 20,
    marginHorizontal: 5,
    marginVertical: -5,
  },

  location: {
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 5,
  },

  orderDetail: {
    color: colors.white,
    fontSize: 13,
    marginVertical: 2.5,
  },
});

export default AppCard;
