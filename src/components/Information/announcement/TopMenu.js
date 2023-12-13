import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
          <Ionicons name="filter" size={23} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.icon]}
          onPress={() => navigation.navigate("MyLike")}
        >
          <Ionicons name="heart" size={23} color="#ff5c5c" />
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
  },

  menu1: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 9,
  },
  menu2: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 3.5,
  },
  blankMenu: {
    width: 50,
    flex: 0.5,
  },

  button: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 1,
    marginTop: 1,
    padding: 7,
  },

  menuItem: {
    backgroundColor: "#ebebeb",
  },
  menuItemText: {
    fontSize: 15,
  },

  icon: {
    width: 40,
  },
});
