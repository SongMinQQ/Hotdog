import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FilterItem from "./announcement/FilterItem";
import FilterSetting from "./announcement/FilterSetting";
import InterestList from "./announcement/InterestList";
import AnnouncementItem from "./announcement/AnnouncementItem";

import TopMenu from "./announcement/TopMenu";

const Announcement = ({ navigation }) => {
  const [apiResponse, setApiResponse] = useState({});
  const [items, setItems] = useState([]);

  const getAnnouncemnetList = () => {
    var xhr = new XMLHttpRequest();
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

    xhr.open("GET", url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        const resultStr = xhr.response;

        const jsonResult = JSON.parse(resultStr);

        // setApiResponse(jsonResult);
        setItems(jsonResult.response.body.items.item);
      }
    };
    xhr.send("");
  };

  useEffect(() => {
    getAnnouncemnetList();
  }, []);

  return (
    <View style={styles.container}>
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
          >
            <AnnouncementItem
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
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10, // bottom은 scrollView 있기 때문에 padding 없이
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
});
