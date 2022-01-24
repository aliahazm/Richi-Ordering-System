//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import { View, Image, ScrollView, Dimensions, Animated } from "react-native";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

const photos = [
  require("../assets/Sale.png"),
  require("../assets/Nasi.png"),
  require("../assets/Store.png"),
];

export default class ImageSlider extends React.Component {
  scrollX = new Animated.Value(0);

  render() {
    let position = Animated.divide(this.scrollX, width);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: "90%", height: "85%" }}>
          <ScrollView
            style={{
              backgroundColor: colors.black,
              borderRadius: 30,
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } },
            ])}
            scrollEventThrottle={16}
          >
            {photos.map((source, i) => {
              return (
                <Image
                  key={i}
                  style={{
                    width: 372.5,
                    height: 225,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={source}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row" }}>
          {photos.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 7,
                  width: 7,
                  backgroundColor: colors.anotherGrey,
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
