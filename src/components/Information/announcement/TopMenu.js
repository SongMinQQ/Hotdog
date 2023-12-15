import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { vw, vh } from "react-native-expo-viewport-units";

import { useNavigation } from "@react-navigation/native";

const TopMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topMenu}>
      <View style={styles.menu1}>
        <TouchableOpacity style={[styles.button, styles.menuItem]}>
          <Text style={styles.menuItemText}>최근3개월</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.menuItem]}>
          <Text style={styles.menuItemText}>마감임박순</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.menuItem]}>
          <Text style={styles.menuItemText}>모든 지역</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blankMenu}></View>

      <View style={styles.menu2}>
        <TouchableOpacity style={[styles.button, styles.icon]}>
          <Feather name="filter" size={vw(5.2)} color="#777778" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.icon]}
          onPress={() => navigation.navigate("MyLike")}
        >
          <Ionicons name="heart" size={vw(5.4)} color="#ff5c5c" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: vw(1.2),
  },

  menu1: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menu2: {
    flex: 3.2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  blankMenu: {
    flex: 0.3,
  },

  button: {
    height: vh(3.5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vw(1.3),
    padding: vw(2),
  },

  menuItem: {
    backgroundColor: "#f5f5f5",
  },
  menuItemText: {
    fontSize: vw(3.5),
  },

  icon: {
    padding: vw(0),
    alignSelf: "center",
  },
});
