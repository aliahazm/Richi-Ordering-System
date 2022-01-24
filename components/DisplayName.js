//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../Database/firebase";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";

export default class DisplayName extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
    };

    return (
      <View>
        <AppText style={styles.welcome}>
          Welcome, {this.state.displayName}!
        </AppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 20
  },

  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});
