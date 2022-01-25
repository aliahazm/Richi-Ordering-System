import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";
import firebase from "../Database/firebase";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
      email: "",
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
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
    };
    return (
      <>
        <View style={styles.container}>
          <Image
            style={styles.userImg}
            source={require("../assets/profile.jpeg")}
          />
        </View>
        <View style={styles.title}>
          <AppText style={styles.textStyle}>Name</AppText>
          <TextInput
            style={{
              marginHorizontal: 19,
              backgroundColor: colors.greyCard,
              padding: 15,
              borderRadius: 50,
              marginBottom: 20,
            }}
            placeholder={this.state.displayName}
            placeholderTextColor={colors.white}
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />
        </View>

        <View style={styles.title}>
          <AppText style={styles.textStyle}>Email</AppText>
          <TextInput
            style={{
              marginHorizontal: 19,
              backgroundColor: colors.greyCard,
              padding: 15,
              borderRadius: 50,
              marginBottom: 20,
            }}
            placeholder={this.state.email}
            placeholderTextColor={colors.white}
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />
        </View>

        <View style={styles.title}>
          <AppText style={styles.textStyle}>Password</AppText>
          <TextInput
            style={{
              marginHorizontal: 19,
              backgroundColor: colors.greyCard,
              padding: 15,
              borderRadius: 50,
              marginBottom: 20,
            }}
            placeholder="●●●●●●●●"
            placeholderTextColor={colors.white}
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />
        </View>

        <View style={styles.title}>
          <AppText style={styles.textStyle}>Mobile Number</AppText>
          <TextInput
            style={{
              marginHorizontal: 19,
              backgroundColor: colors.greyCard,
              padding: 15,
              borderRadius: 50,
              marginBottom: 20,
            }}
            placeholder="0123456789"
            placeholderTextColor={colors.white}
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />
        </View>
      </>
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
  title: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.backgroundGrey,
  },
  textStyle: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.greyText,
    marginHorizontal: 25,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});
