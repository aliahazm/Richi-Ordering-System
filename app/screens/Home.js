//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ImageSlider from "../components/ImageSlider";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import AppCard from "../components/AppCard";
import routes from "../navigation/routes";
import Map from "../components/Map";
import DisplayName from "../../components/DisplayName";

function Home({ navigation }) {
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
          <DisplayName />
        </View>
        <ImageSlider />
        <ScrollView horizontal style={{ marginLeft: 15 }}>
          <AppButton
            title="Hot Beverages"
            color="turquoise"
            onPress={() => navigation.navigate(routes.HOT_BEVERAGE_MENU)}
          ></AppButton>
          <AppButton
            title="Cold Beverages"
            color="aqua"
            onPress={() => navigation.navigate(routes.COLD_BEVERAGE_MENU)}
          ></AppButton>
          <AppButton
            title="Ice Blended"
            color="indigo"
            onPress={() => navigation.navigate(routes.ICE_BLENDED_MENU)}
          ></AppButton>
        </ScrollView>

       
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.MY_ORDER)}
          >
             <View style={{ flexDirection: "row" }}>
            <AppText style={styles.recentTitle}>Recent Orders</AppText>
            <Icon
              name="navigate-next"
              size={45}
              backgroundColor={colors.backgroundGrey}
              iconColor={colors.greyText}
            />
            </View>
          </TouchableOpacity>
        

        <View style={{ marginHorizontal: 25 }}>
          <AppCard
            location="Richiamo - UIA Gombak"
            order="Curly Fries, Iced Hazelnut Chocolate"
            table="Table 12"
            price="RM14.40"
            date="10 January 2022"
          ></AppCard>
          <AppCard
            location="Richiamo - Shah Alam"
            order="Biscotti Vanilla, Mushroom Soup With Garlic Bread, Wedges"
            table="Table 9"
            price="RM15.50"
            date="2 January 2022"
          ></AppCard>
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

  recentTitle: {
    color: colors.greyText,
    fontSize: 18,
    //marginHorizontal: 25,
    marginLeft: 25,
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
  },
});
export default Home;
