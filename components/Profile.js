import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";
import firebase from "../Database/firebase";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      displayEmail: firebase.auth().currentUser.displayEmail,
      mobileNumber: firebase.auth().currentUser.mobileNumber,
      uid: firebase.auth().currentUser.uid,
    };
    return (
      <View style={styles.container}>
        <Image
          style={styles.userImg}
          source={require("../assets/profile.jpeg")}
        />

        <AppText style={styles.textStyle}>
          Name: {this.state.displayName}
        </AppText>

        <Button color="#b28525" title="Logout" onPress={() => this.signOut()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: colors.backgroundGrey,
  },
  textStyle: {
    fontSize: 15,
    marginVertical: 20,
    color: colors.greyText,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});
