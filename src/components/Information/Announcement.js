import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AnnouncementItem from "./announcement/AnnouncementItem";
import TopMenu from "./announcement/TopMenu";
import Loading from "../Loading/Loading";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Announcement = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getAnnouncemnet = async () => {
    var url =
      "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic";
    var queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "wR34V8YlK4Q0LeJio9OgWCIEFSNjOqSZ9nay8hJAJQEVQ1HOQ91RC0gtt1uPkud6%2FBkxjmVNpbl798wCvxA1YA%3D%3D";

    queryParams +=
      "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("50");
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

  useEffect(() => {
    getAnnouncemnet();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <TopMenu />
      <ScrollView>
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
  );
};

export default Announcement;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
});
