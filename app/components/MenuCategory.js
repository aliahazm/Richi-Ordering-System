import React, {useEffect, useState} from "react";
import { 
  Text, 
  Image, 
  ScrollView, 
  FlatList, 
  SafeAreaView, 
  StyleSheet, 
  View 
} from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";
import { TouchableOpacity } from "react-native-gesture-handler";

const menuCategory = [
  {
    image: require("../assets/HotBeverage.jpg"), 
    cat:'Hot Beverage',
    screenDisplay: routes.HOT_BEVERAGE_MENU,
  }, 
  {
    image: require("../assets/IcedBeverage.jpg"), 
    cat:'Cold Beverage',
    screenDisplay: routes.COLD_BEVERAGE_MENU,
  }, 
  {
    image: require("../assets/IceBlended.jpg"), 
    cat:'Ice Blended',
    screenDisplay: routes.ICE_BLENDED_MENU,
  },
  {
    image: require("../assets/westernDelight.jpg"), 
    cat:'Western Delight' //dummy data
  }
];

function MenuCategory({ navigation }) {

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.backgroundGrey,
        flex: 1
      }}
    >
        <View>
          <Text style={styles.label}>
            Categories
          </Text>
        </View>
        <FlatList
        style={{flex:1}}
        data={menuCategory}
        renderItem={({item}) => (           
            <View 
              style={styles.boxCategory}
            >
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}  
                onPress={() => navigation.navigate(item.screenDisplay)}
              >
                <Image 
                  source={item.image}
                  style={{
                    width: 165, height: 150,
                    borderRadius: 5
                  }}
                />
                <Text 
                  style={styles.category}
                >
                  {item.cat}
                </Text>
              </TouchableOpacity>
            </View>
        )}
        numColumns={2}
        keyExtractor={(index) => index}
        />
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
  label:{
    color: colors.white,
    fontSize: 20,
    marginTop:20,
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: '600'
  },
  boxCategory:{
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  category: {
    padding: 5,
    fontSize: 18,
    color:colors.anotherGrey
  }
});
export default MenuCategory;
