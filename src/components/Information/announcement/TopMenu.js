import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TopMenu = () => {
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
        <TouchableOpacity style={[styles.button, styles.filter]}>
          <Text>F1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.filter]}>
          <Text>F2</Text>
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
    // backgroundColor: "#ebebeb",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 9,
  },
  menu2: {
    // backgroundColor: "#ebebeb",
    flexDirection: "row",
    justifyContent: "center",
    flex: 3.5,
  },
  blankMenu: {
    // backgroundColor: "blue",
    width: 50,
    flex: 0.5,
  },

  button: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    // width: "auto",
    // height: "auto",
    marginHorizontal: 1,
    marginTop: 1,
    padding: 8,
  },

  menuItem: {
    backgroundColor: "#ebebeb",
  },
  menuItemText: {
    fontSize: 15,
  },

  filter: {
    // backgroundColor: "tomato",
    width: 40,
  },
});
