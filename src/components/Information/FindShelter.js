import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import theme from "./colors";
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
    paddingTop: 10, // bottom은 scrollView 있기 때문에 padding 없이
    // width:     // 윈도우 사이즈 - 양쪽 마진    남기고 삭제
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
});
