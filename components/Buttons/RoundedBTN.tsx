import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS } from "../../styles/global";

export const RoundedBTN = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert("Button Pressed!")}>
        <Ionicons name="add" size={20} color={COLORS.main_accent_color} /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.main_bg,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.main_accent_color,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
