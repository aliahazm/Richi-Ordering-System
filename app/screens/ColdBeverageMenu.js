import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  SectionList,
  Text,
  View,
  Alert,
} from "react-native";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getItems } from "../components/menuItems";
import { Product } from "../components/Product";
import routes from "../navigation/routes";

export function ColdBeverageMenu({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={
          () => Alert.alert(product.name + " has been added to cart")
          // {
          // navigation.navigate('ProductDetails', {
          //   productId: product.id
          // });
          // }
        }
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getItems());
  });

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
            keyExtractor={(item) => item.id.toString()}
            sections={products}
            renderItem={renderProduct}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
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
export default ColdBeverageMenu;
