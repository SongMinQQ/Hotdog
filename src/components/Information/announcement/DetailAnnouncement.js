import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Like from "./Like";
import { insertLike, deleteLike } from "../../../redux/slices/likeSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailAnnouncement = ({ navigation: { navigate }, route }) => {
  const desertionNo = route.params.desertionNo;
  const noticeNo = route.params.noticeNo;
  const filename = route.params.filename;
  const popfile = route.params.popfile;
  const noticeSdt = route.params.noticeSdt;
  const noticeEdt = route.params.noticeEdt;
  const happenPlace = route.params.happenPlace;
  const kindCd = route.params.kindCd;
  const sexCd = route.params.sexCd;
  const weight = route.params.weight;
  const age = route.params.age;
  const colorCd = route.params.colorCd;
  const neuterYn = route.params.neuterYn;
  const specialMark = route.params.specialMark;
  const processState = route.params.processState;
  const careAddr = route.params.careAddr;
  const careNm = route.params.careNm;
  const careTel = route.params.careTel;

  let dispatch = useDispatch();
  const [like, setLike] = useState(false);
  let list = useSelector((state) => state.like);
  const heartOn =
    list.map((item) => item.desertionNo).find((key) => key === desertionNo) ===
    desertionNo;

  const toggleHeart = () => {
    setLike(!false);
    if (heartOn === true) dispatch(deleteLike(desertionNo));
    if (heartOn === false) {
      dispatch(
        insertLike({
          key: desertionNo,
          desertionNo: desertionNo,
          noticeNo: noticeNo,
          filename: filename,
          popfile: popfile,
          noticeSdt: noticeSdt,
          noticeEdt: noticeEdt,
          happenPlace: happenPlace,
          kindCd: kindCd,
          sexCd: sexCd,
          weight: weight,
          age: age,
          colorCd: colorCd,
          neuterYn: neuterYn,
          specialMark: specialMark,
          processState: processState,
          careAddr: careAddr,
          careNm: careNm,
          careTel: careTel,
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.c_ProcessImg}>
        <View style={styles.emptyFlex1}>
          {(() => {
            if (processState === "보호중")
              return <Text style={styles.processIng}>{processState}</Text>;
            else return <Text style={styles.processEtc}>{processState}</Text>;
          })()}
        </View>
        <View style={styles.imgBox}>
          <Image
            source={{
              uri: popfile,
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.emptyFlex1}></View>
      </View>
      <View style={styles.c_TitleShare}>
        <Text style={styles.title}>{kindCd}</Text>
        <TouchableOpacity style={styles.icon}>
          <Entypo name="share" size={23} color="#545454" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.interestBtn} onPress={toggleHeart}>
          <Like heartOn={heartOn} like={like} setLike={setLike} />
        </TouchableOpacity>
      </View>

      <View style={styles.c_infoCell}>
        <View style={styles.infoCellColumn}>
          <View style={styles.infoCellRow1}>
            <Text style={[styles.infoCellCategori, styles.infoCellText]}>
              성별
            </Text>
          </View>
          {(() => {
            if (sexCd === "M")
              return <Text style={styles.infoCellText}>수컷</Text>;
            else if (sexCd === "F")
              return <Text style={styles.infoCellText}>암컷</Text>;
            else return <Text style={styles.infoCellText}>미상</Text>;
          })()}
        </View>
        <View style={styles.infoCellColumn}>
          <View style={styles.infoCellRow1}>
            <Text style={[styles.infoCellCategori, styles.infoCellText]}>
              중성화
            </Text>
          </View>
          {(() => {
            if (neuterYn === "Y")
              return <Text style={styles.infoCellText}>완료</Text>;
            else if (neuterYn === "N")
              return <Text style={styles.infoCellText}>안함</Text>;
            else return <Text style={styles.infoCellText}>미상</Text>;
          })()}
        </View>

        <View style={styles.infoCellColumn}>
          <View style={styles.infoCellRow1}>
            <Text style={[styles.infoCellCategori, styles.infoCellText]}>
              색
            </Text>
          </View>
          <Text style={styles.infoCellText}>{colorCd}</Text>
        </View>
        <View style={styles.infoCellColumn}>
          <View style={styles.infoCellRow1}>
            <Text style={[styles.infoCellCategori, styles.infoCellText]}>
              무게
            </Text>
          </View>
          <Text style={styles.infoCellText}>{weight}</Text>
        </View>
        <View style={styles.infoCellColumn}>
          <View style={styles.infoCellRow1}>
            <Text style={[styles.infoCellCategori, styles.infoCellText]}>
              나이
            </Text>
          </View>
          <Text style={styles.infoCellText}>{age}</Text>
        </View>
      </View>

      <View style={styles.c_specialMark}>
        <Text style={styles.specialMarkText}>{specialMark}</Text>
      </View>

      <View style={styles.c_info}>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitleText}>공고번호</Text>
          <Text>{noticeNo}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitleText}>공고기간</Text>
          <Text>{noticeSdt + "~" + noticeEdt}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitleText}>발견장소</Text>
          <Text>{happenPlace}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitleText}>보호센터</Text>
          <Text>{careNm + "  "}</Text>
          <Text style={styles.infoCareTelText}>{careTel}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitleText}>보호주소</Text>
          <Text>{careAddr}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailAnnouncement;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  title: {},

  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 23,
  },
  c_ProcessImg: {
    flexDirection: "row",
    padding: 10,
  },
  imgBox: {
    width: 260,
    height: 300,
    flex: "auto",
  },

  processIng: {
    padding: 4,
    marginRight: 10,
    marginLeft: 4,
    color: "#5fb51d",
    borderColor: "#5fb51d",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },

  processEtc: {
    padding: 4,
    marginRight: 10,
    marginLeft: 4,
    color: "#7e8387",
    borderColor: "#7e8387",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },
  emptyFlex1: {
    flex: 1,
  },

  c_TitleShare: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "35%",
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  icon: {},

  c_infoCell: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 8,
    padding: 5,
    borderWidth: 1,
    justifyContent: "space-around",
  },
  infoCellColumn: {
    alignItems: "center",
    height: 35,
    justifyContent: "space-between",
  },

  infoCellCategori: {
    fontWeight: "700",
    height: 15,
  },

  infoCellRow1: {},

  infoCellText: {
    margin: 1,
  },

  c_specialMark: {
    marginHorizontal: 25,
  },
  specialMarkText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#dedede",
  },

  c_info: {
    paddingVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  infoTitleText: {
    fontWeight: "800",
    marginRight: 15,
  },

  infoCareTelText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
