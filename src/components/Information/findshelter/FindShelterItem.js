import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../colors";
import RegionSelect from "./RegionSelect";
import { useState } from "react";

const FindShelterItem = () => {
  const [region, setRegion] = useState("서울");

  const changeRegion = (region) => {
    setRegion(region);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectRow}>
        <Text style={styles.selectText}>지역 선택</Text>
        <RegionSelect
          selectRegion={region}
          changeFunction={changeRegion}
        ></RegionSelect>
      </View>
      <View style={styles.mapBox}></View>
      <View style={styles.locationBox}></View>
    </View>
  );
};

export default FindShelterItem;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
  },
  selectRow: {
    flexDirection: "row",
  },

  selectText: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 3,
  },
  mapBox: {
    marginVertical: 10,
    backgroundColor: "#d6d6d6",
    height: 200,
  },
});
