import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useSelector } from "react-redux";
import LikeItem from "./LikeItem";

import { useNavigation } from "@react-navigation/native";

const MyLike = ({ navigation: { navigate }, route }) => {
  let list = useSelector((state) => state.like);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {list.length === 0 ? (
        <Text style={styles.nullListText}>관심있는 공고가 없습니다.</Text>
      ) : (
        list.map((item, idx) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailAnnouncement", {
                desertionNo: item.desertionNo,
                noticeNo: item.noticeNo,
                filename: item.filename,
                popfile: item.popfile,
                noticeSdt: item.noticeSdt,
                noticeEdt: item.noticeEdt,
                happenPlace: item.happenPlace,
                kindCd: item.kindCd,
                sexCd: item.sexCd,
                weight: item.weight,
                age: item.age,
                colorCd: item.colorCd,
                neuterYn: item.neuterYn,
                specialMark: item.specialMark,
                processState: item.processState,
                careAddr: item.careAddr,
                careNm: item.careNm,
                careTel: item.careTel,
              })
            }
            key={item.desertionNo}
          >
            <LikeItem
              key={item.desertionNo}
              desertionNo={item.desertionNo}
              filename={item.filename}
              noticeSdt={item.noticeSdt}
              noticeEdt={item.noticeEdt}
              kindCd={item.kindCd}
              sexCd={item.sexCd}
              careAddr={item.careAddr}
              happenPlace={item.happenPlace}
              processState={item.processState}
            />
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default MyLike;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
  nullListText: {
    alignSelf: "center",
  },
});
