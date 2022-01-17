import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../config/firebase";

class FetchListScreen extends Component {
  constructor() {
    super();
    this.docs = firebase.firestore().collection("customer");
    this.state = {
      isLoading: true,
      user: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.getCustomerData);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCustomerData = (querySnapshot) => {
    const customer = [];
    querySnapshot.forEach((res) => {
      const { name, email, mobilenum } = res.data();
      customer.push({
        key: res.id,
        name,
        email,
        mobilenum,
      });
    });
    this.setState({
      customer,
      isLoading: false,
    });
  };
}
render();
if (this.state.isLoading) {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

return (
  <ScrollView style={styles.wrapper}>
    {this.state.customer.map((res, i) => {
      return (
        <>
          <Image
            style={styles.userImg}
            source={{
              uri: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg",
            }}
          />
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.name>{res.name}</ListItem.name>
              <ListItem.email>{res.email}</ListItem.email>
              <ListItem.mobilenum>{res.mobilenum}</ListItem.mobilenum>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        </>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 22,
  },
  loader: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});

export default FetchListScreen;
