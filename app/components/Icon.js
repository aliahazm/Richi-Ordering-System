//Author: Nur Sabrina Fasha binti Zaidi Sham (1813526)

import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function Icon({ name, size = 40, iconColor = colors.white }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
