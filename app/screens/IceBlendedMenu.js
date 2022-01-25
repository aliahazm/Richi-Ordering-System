import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  SectionList,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "COFFEE",
    data: [
      { name: "Cappucino", price: 6.9 },
      { name: "Mochaccino", price: 7 },
      { name: "Hazelnut Cappucino", price: 8 },
      { name: "Biscotti Cappucino", price: 6 },
      { name: "Caramello Cappucino", price: 7.5 },
    ],
  },
  {
    title: "NON-COFFEE",
    data: [
      { name: "Chocolate", price: 8 },
      { name: "Hazelnut Chocolate", price: 7.9 },
      { name: "Classy Dark Chocolate", price: 8 },
      { name: "Vanilla", price: 6.9 },
      { name: "Biscotti Vanilla", price: 6.9 },
      { name: "Double Choc Chip", price: 9 },
      { name: "Caramello Chocolate", price: 8.5 },
      { name: "Biscotti Chocolate", price: 9.5 },
    ],
  },
  {
    title: "TEA",
    data: [
      { name: "Matcha (Green Tea)", price: 8 },
      { name: "Matcha Choc Chip", price: 7.9 },
      { name: "Fresh Lemon Tea", price: 8 },
      { name: "Fresh Apple Tea", price: 6.9 },
    ],
  },
];

function IceBlendedMenu({ props, navigation }) {
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
        <View style={styles.container}>
          <SectionList
            sections={[...menuItems]}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>RM {item.price.toFixed(2)}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert(item.name + " has been added to cart")
                    }
                    style={styles.addButton}
                  >
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
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.PLACE_ORDER)}
          style={styles.orderButton}
        >
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGrey,
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  sectionHeader: {
    color: colors.white,
    margin: 10,
    fontSize: 18,
    marginTop: 20,
    fontWeight: "600",
  },
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
  buttonStyle: {
    backgroundColor: colors.indigo,
    alignItems: "center",
    justifyContent: "center",
  },
  orderButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 17,
    color: colors.white,
  },
});
export default IceBlendedMenu;
