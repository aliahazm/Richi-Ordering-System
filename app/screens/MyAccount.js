import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Alert,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Profile from "../../components/Profile";
import routes from "../navigation/routes";

function MyAccount({ navigation }) {
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
          }}
        >
          <Profile />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="green"
              title="Update"
              onPress={() =>
                Alert.alert(
                  "Update Successful",
                  "Your profile has been updated!"
                )
              }
            />
            <Button
              color="red"
              title="Logout"
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGrey,
    flex: 1,
  },

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
export default MyAccount;
