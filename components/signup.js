//Author: Muhammad Aidil Fahmiey Bin Osman (1819369)

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from "../Database/firebase";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      mobileNumber: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
            mobileNumber: this.state.mobileNumber,
          });
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
            mobileNumber: "",
          });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={{
            resizeMode: "contain",
            height: 200,
            width: 400,
            marginBottom: 50
          }}
          source={require("../assets/logo2.jpeg")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Mobile Number"
          value={this.state.mobileNumber}
          onChangeText={(val) => this.updateInputVal(val, "mobileNumber")}
          keyboardType={"numeric"}
          maxLength={11}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.registerUser()}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Already Registered? Click here to login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 45,
    backgroundColor: "#fff"
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#b28525",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#b28525",
    padding: 10,
    width: 90,
    borderRadius: 10,
  },
});
