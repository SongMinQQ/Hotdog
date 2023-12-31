import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { insertLike, deleteLike } from "../../../redux/slices/likeSlice";
import { useDispatch, useSelector } from "react-redux";

import Like from "./Like";

import { vw, vh } from "react-native-expo-viewport-units";
import { theme } from "../colors";

const AnnouncementItem = ({
  desertionNo,
  noticeNo,
  filename,
  popfile,
  noticeSdt,
  noticeEdt,
  happenPlace,
  kindCd,
  sexCd,
  weight,
  age,
  colorCd,
  neuterYn,
  specialMark,
  processState,
  careAddr,
  careNm,
  careTel,
}) => {
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
      <View style={styles.cellBox}>
        <View style={styles.cellRow}>
          <View style={styles.imgBox}>
            <Image
              source={{
                uri: filename,
              }}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.infoBox}>
            <View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitleText}>공고기간</Text>
                <Text style={styles.info1TextBold}>
                  {noticeSdt + "~" + noticeEdt}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitleText}>보호품종</Text>
                <Text style={styles.infoText}>{kindCd}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitleText}>보호지역</Text>
                <View style={styles.textWrap}>
                  <Text style={styles.infoText}>{careAddr}</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitleText}>구조장소</Text>
                <Text style={styles.infoText}>{happenPlace}</Text>
              </View>
            </View>

            <View style={styles.c_infoProcessSexInterest}>
              <View style={styles.infoProcessSex}>
                {(() => {
                  if (processState === "보호중")
                    return (
                      <Text style={styles.processIng}>{processState}</Text>
                    );
                  else
                    return (
                      <Text style={styles.processEtc}>{processState}</Text>
                    );
                })()}

                {(() => {
                  if (sexCd === "M")
                    return <Text style={styles.infoSexM}>수컷</Text>;
                  else if (sexCd === "F")
                    return <Text style={styles.infoSexF}>암컷</Text>;
                  else return <Text style={styles.infoSexQ}>미상</Text>;
                })()}
              </View>

              <TouchableOpacity
                style={styles.interestBtn}
                onPress={toggleHeart}
              >
                <Like
                  heartOn={heartOn}
                  like={like}
                  setLike={setLike}
                  iconSize={vw(5.2)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default AnnouncementItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellBox: {
    marginVertical: vh(0.3),
  },

  line: {
    borderColor: "#cccccc",
    borderWidth: vh(0.05),
  },

  cellRow: {
    flexDirection: "row",
  },

  imgBox: {
    flex: 1,
    marginRight: vw(0.5),
    marginVertical: vh(0.6),
    justifyContent: "center",
  },

  imageStyle: {
    width: vw(30),
    height: vh(14),
    borderRadius: vw(4),
  },
  infoBox: {
    flex: 2,
    justifyContent: "center",
    padding: vw(2.4),
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vh(0.4),
  },

  infoTitleText: {
    fontWeight: "700",
    marginRight: vw(1.5),
    fontSize: vw(3.3),
  },

  textWrap: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginRight: vw(12),
  },

  infoText: {
    fontSize: vw(3.3),
  },

  info1TextBold: {
    fontWeight: "700",
    fontSize: vw(3.3),
  },

  c_infoProcessSexInterest: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: vw(1),
  },

  infoProcessSex: {
    flex: 7,
    flexDirection: "row",
  },

  interestBtn: {
    flex: 1,
    justifyContent: "center",
  },

  processIng: {
    padding: vw(1),
    marginRight: vw(1.5),
    color: theme.ingAnnouncement,
    borderColor: theme.ingAnnouncement,
    borderWidth: vw(0.3),
    borderRadius: vw(1.8),
    alignSelf: "center",
    fontSize: vw(3.3),
  },

  processEtc: {
    padding: vw(1),
    marginRight: vw(1.5),
    color: theme.etcAnnouncement,
    borderColor: theme.etcAnnouncement,
    borderWidth: vw(0.3),
    borderRadius: vw(1.8),
    alignSelf: "center",
    fontSize: vw(3.3),
  },

  infoSexF: {
    color: theme.sexF,
    borderColor: theme.sexF,
    padding: vw(1),
    borderWidth: vw(0.3),
    borderRadius: vw(1.8),
    fontSize: vw(3.3),
    alignSelf: "center",
  },
  infoSexM: {
    padding: vw(1),
    borderWidth: vw(0.3),
    borderRadius: vw(1.8),
    color: theme.sexM,
    borderColor: theme.sexM,
    fontSize: vw(3.3),
    alignSelf: "center",
  },
  infoSexQ: {
    padding: vw(1),
    borderWidth: vw(0.3),
    borderRadius: vw(1.8),
    color: theme.sexQ,
    fontSize: vw(3.3),
    borderColor: theme.sexQ,
    alignSelf: "center",
  },
});
