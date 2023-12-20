import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

export default function MenuButton({ closing, btnName }) {
  return (
    <View>
      {closing === true ? (
        <View style={[styles.button, styles.menuItemOn]}>
          <Text style={styles.menuItemText}>{btnName}</Text>
        </View>
      ) : (
        <View style={[styles.button, styles.menuItemOff]}>
          <Text style={styles.menuItemText}>{btnName}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: vh(3.5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vw(1.3),
    padding: vw(2),
  },

  menuItemOff: {
    backgroundColor: "#f5f5f5",
  },
  menuItemOn: {
    backgroundColor: "#6ee3fa",
  },
  menuItemText: {
    fontSize: vw(3.5),
  },
});
