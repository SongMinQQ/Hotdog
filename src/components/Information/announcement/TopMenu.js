import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { toggleOff, toggleOn } from "../../../redux/slices/switchSlice";

import MenuButton from "./MenuButton";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { vw, vh } from "react-native-expo-viewport-units";
import { theme } from "../colors";

const TopMenu = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const switchValue = useSelector((state) => state.switchSlice.active);

  const toggleSwitchHandler = () => {
    if (switchValue == true) {
      dispatch(toggleOff());
    } else {
      dispatch(toggleOn());
    }
  };

  return (
    <View style={styles.topMenu}>
      <View style={styles.menu1}>
        <TouchableOpacity style={[styles.button, styles.menuItem]}>
          <Text style={styles.menuItemText}>최근3개월</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSwitchHandler}>
          <MenuButton closing={switchValue} btnName={"마감임박순"} />
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
    backgroundColor: theme.menuItem,
  },
  menuItemText: {
    fontSize: vw(3.5),
  },

  icon: {
    padding: vw(0),
    alignSelf: "center",
  },
});
