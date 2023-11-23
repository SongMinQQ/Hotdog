import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import FilterItem from "./announcement/FilterItem";
import FilterSetting from "./announcement/FilterSetting";
import InterestList from "./announcement/InterestList";
import AnnouncementItem from "./announcement/AnnouncementItem";

import TopMenu from "./announcement/TopMenu";

import theme from "./colors";

const Announcement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>유기견 공고</Text>

      <TopMenu />
      <ScrollView>
        <AnnouncementItem />
      </ScrollView>
    </View>
  );
};

export default Announcement;

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
