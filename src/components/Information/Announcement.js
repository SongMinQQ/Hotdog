import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import AnnouncementItem from "./announcement/AnnouncementItem";
import TopMenu from "./announcement/TopMenu";
import Loading from "../Loading/Loading";

import { useSelector } from "react-redux";

const Announcement = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const switchValue = useSelector((state) => state.switchSlice.active);

  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getAnnouncemnet();
  }, []);

  useEffect(() => {
    if (switchValue) {
      getAnnouncemnetClosing();
    } else {
      getAnnouncemnet();
    }
  }, [switchValue]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    if (switchValue) {
      getAnnouncemnetClosing();
    } else {
      getAnnouncemnet();
    }
    setIsRefreshing(false);
  };

  const getAnnouncemnet = async () => {
    var url =
      "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic";
    var queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "wR34V8YlK4Q0LeJio9OgWCIEFSNjOqSZ9nay8hJAJQEVQ1HOQ91RC0gtt1uPkud6%2FBkxjmVNpbl798wCvxA1YA%3D%3D";

    queryParams +=
      "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("100");
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
    queryParams +=
      "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");
    queryParams +=
      "&" + encodeURIComponent("upkind") + "=" + encodeURIComponent("417000");

    try {
      setLoading(true);

      const response = await fetch(url + queryParams);
      const jsonData = await response.json();

      setItems(jsonData.response.body.items.item);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getAnnouncemnetClosing = async () => {
    var url =
      "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic";
    var queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "wR34V8YlK4Q0LeJio9OgWCIEFSNjOqSZ9nay8hJAJQEVQ1HOQ91RC0gtt1uPkud6%2FBkxjmVNpbl798wCvxA1YA%3D%3D";

    queryParams +=
      "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("100");
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
    queryParams +=
      "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");
    queryParams +=
      "&" + encodeURIComponent("upkind") + "=" + encodeURIComponent("417000");

    queryParams +=
      "&" + encodeURIComponent("state") + "=" + encodeURIComponent("protect");

    try {
      setLoading(true);

      const response = await fetch(url + queryParams);
      const jsonData = await response.json();

      const arr = jsonData.response.body.items.item;
      arr.sort((a, b) => {
        return a.noticeEdt - b.noticeEdt;
      });

      setItems(arr);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{ width: vw(100), height: vh(100), backgroundColor: "#ffffff" }}
    >
      <View style={styles.container}>
        {loading && <Loading />}
        <TopMenu style={styles.topMenu} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        >
          {Object.values(items).map((item) => (
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
              <AnnouncementItem
                style={styles.announcementItem}
                key={item.desertionNo}
                desertionNo={item.desertionNo}
                noticeNo={item.noticeNo}
                filename={item.filename}
                popfile={item.popfile}
                noticeSdt={item.noticeSdt}
                noticeEdt={item.noticeEdt}
                happenPlace={item.happenPlace}
                kindCd={item.kindCd}
                sexCd={item.sexCd}
                weight={item.weight}
                age={item.age}
                colorCd={item.colorCd}
                neuterYn={item.neuterYn}
                specialMark={item.specialMark}
                processState={item.processState}
                careAddr={item.careAddr}
                careNm={item.careNm}
                careTel={item.careTel}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  container: {
    width: vw(98),
    paddingHorizontal: vw(2),
    paddingTop: vw(2),
    alignSelf: "center",
    flex: 1,
  },
});
