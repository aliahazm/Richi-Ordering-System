import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
export function Product({ name, price, onPress }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>RM {price.toFixed(2)}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.addButton}>
          <Text
            style={{
              color: colors.anotherGrey,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 18,
    color: colors.anotherGrey,
    margin: 3,
  },
  price: {
    margin: 3,
    marginTop: 0,
    fontSize: 15,
    color: colors.anotherGrey,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderColor: colors.anotherGrey,
    height: 40,
    width: 40,
    borderRadius: 1000,
    borderWidth: 1,
  },
});
