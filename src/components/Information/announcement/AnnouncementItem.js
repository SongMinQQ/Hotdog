import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AnnouncementItem = ({
  filename,
  noticeSdt,
  noticeEdt,
  kindCd,
  sexCd,
  careAddr,
  happenPlace,
  processState,
}) => {
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
                <Text style={styles.infoText}>{careAddr}</Text>
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
              <TouchableOpacity style={styles.interestBtn}>
                <Ionicons name="heart-outline" size={23} color="black" />
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
  container: {},
  cellBox: {
    marginVertical: 6,
  },

  line: {
    borderColor: "#cccccc",
    borderWidth: 0.5,
  },

  cellRow: {
    flexDirection: "row",
  },

  imgBox: {
    backgroundColor: "#cccccc",
    flex: 1,
    margin: 5,
    borderRadius: 20,
    justifyContent: "center",
  },

  imageStyle: {
    width: 110,
    height: 120,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  infoBox: {
    flex: 2.2,
    margin: 7,
    marginRight: 10,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },

  infoTitleText: {
    fontWeight: "800",
    marginRight: 15,
  },

  infoText: {
    fontSize: 14,
    width: "auto",
  },

  info1TextBold: {
    fontWeight: "700",
    fontSize: 15,
  },

  c_infoProcessSexInterest: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },

  infoProcessSex: {
    flexDirection: "row",
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

  infoSexF: {
    padding: 4,
    color: "#e864aa",
    borderColor: "#e864aa",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },
  infoSexM: {
    padding: 4,
    color: "#2480d6",
    borderColor: "#2480d6",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },
  infoSexQ: {
    padding: 4,
    color: "#7e8387",
    borderColor: "#7e8387",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },

  interestBtn: {},
});
