import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  Share,
} from "react-native";
import { insertLike, deleteLike } from "../../../redux/slices/likeSlice";
import { useDispatch, useSelector } from "react-redux";

import Like from "./Like";

import { Feather } from "@expo/vector-icons";
import { vw, vh } from "react-native-expo-viewport-units";
import { theme } from "../colors";

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

  const callPhone = async () => {
    try {
      await Linking.openURL(`tel:${careTel}`);
    } catch (e) {
      Alert.alert("전화 연결 오류", "기기 전화에 연결할 수 없습니다");
      console.log(e);
    }
  };

  const shareAddr = async () => {
    try {
      await Share.share({ message: `${careAddr}` });
    } catch (e) {
      Alert.alert("공유 할 수 없음", "기기가 공유 기능을 사용할 수 없습니다.");
      console.log(e);
    }
  };

  return (
    <View
      style={{ width: vw(100), height: vh(100), backgroundColor: "#ffffff" }}
    >
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
          <View style={styles.emptyFlex1}></View>
          <View style={styles.titleShareRow}>
            <Text style={styles.title}>{kindCd}</Text>
            <TouchableOpacity style={styles.icon} onPress={shareAddr}>
              <Feather name="copy" size={vw(5.2)} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={toggleHeart}>
              <Like
                heartOn={heartOn}
                like={like}
                setLike={setLike}
                iconSize={vw(6)}
              />
            </TouchableOpacity>
          </View>
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
            <TouchableOpacity onPress={callPhone}>
              <Text style={styles.infoCareTelText}>{careTel}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitleText}>보호주소</Text>
            <View style={styles.textWrap}>
              <Text>{careAddr}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailAnnouncement;

const styles = StyleSheet.create({
  container: {
    margin: vw(1),
  },

  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vw(8),
  },
  c_ProcessImg: {
    flexDirection: "row",
    padding: vw(2),
  },
  imgBox: {
    width: vw(65),
    height: vh(35),
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

  emptyFlex1: {
    flex: 1,
  },

  c_TitleShare: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },

  titleShareRow: {
    flexDirection: "row",
    marginRight: vw(6),
    alignItems: "center",
  },
  title: {
    fontSize: vw(6),
    fontWeight: "700",
    marginRight: vw(15),
  },

  icon: {
    marginHorizontal: vw(1.3),
  },

  c_infoCell: {
    flexDirection: "row",
    marginHorizontal: vw(4),
    marginVertical: vh(1),
    padding: vw(1.6),
    borderWidth: vw(0.16),
    borderRadius: vw(2.5),
    borderColor: theme.detail_cellBorder,
    justifyContent: "space-around",
  },
  infoCellColumn: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoCellCategori: {
    fontWeight: "700",
    fontSize: vw(3.4),
  },

  infoCellText: {
    margin: vw(0.4),
    fontSize: vw(3.4),
  },

  c_specialMark: {
    marginHorizontal: vw(4),
  },
  specialMarkText: {
    fontSize: vw(3.2),
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    backgroundColor: theme.detail_specialMark,
  },

  c_info: {
    paddingVertical: vh(1),
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: vh(0.5),
    paddingHorizontal: vw(5),
    alignItems: "center",
  },
  infoTitleText: {
    fontWeight: "800",
    marginRight: vw(3.5),
    fontSize: vw(3.4),
  },

  textWrap: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginRight: vw(13),
  },

  infoCareTelText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
