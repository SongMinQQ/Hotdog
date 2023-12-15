import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useSelector } from "react-redux";
import LikeItem from "./LikeItem";
import { vw, vh } from "react-native-expo-viewport-units";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const MyLike = ({ navigation: { navigate }, route }) => {
  let list = useSelector((state) => state.like);

  const navigation = useNavigation();
  return (
    <View
      style={{ width: vw(100), height: vh(100), backgroundColor: "#ffffff" }}
    >
      <View style={styles.container}>
        {list.length === 0 ? (
          <View style={styles.nullListContainer}>
            <Ionicons name="heart" size={vw(13)} color="#ffabab" />
            <Text style={styles.nullListText}>관심있는 공고가 없습니다.</Text>
          </View>
        ) : (
          <ScrollView>
            {list.map((item, idx) => (
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
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default MyLike;

const styles = StyleSheet.create({
  container: {
    width: vw(98),
    paddingHorizontal: vw(2),
    paddingTop: vw(2),
    alignSelf: "center",
    flex: 1,
  },

  nullListContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: vh(10),
  },
  nullListText: {
    marginTop: vh(1),
    fontSize: vw(4),
  },
});
