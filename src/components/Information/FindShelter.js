import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import FindShelterItem from "./findshelter/FindShelterItem";

const FindShelter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>보호소 찾기</Text>
      <FindShelterItem />
    </View>
  );
};

export default FindShelter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
});
