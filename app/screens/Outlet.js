import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Map from "../components/Map";

function Outlet(props) {
  return <Map />;
}

const styles = StyleSheet.create({
  welcome: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 25,
    //marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
  },
});
export default Outlet;
