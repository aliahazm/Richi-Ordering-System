import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function MenuCategory({ navigation }) {
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
            backgroundColor: colors.backgroundGrey,
            alignItems: "center",
          }}
        >
          <AppText style={styles.welcome}>Welcome, Khairul! Menu</AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
  },
});
export default MenuCategory;
