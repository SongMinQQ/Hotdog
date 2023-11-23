import React from "react";
import { View, Text, StyleSheet } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import theme from "../colors";

const AnnouncementItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cellBox}>
        <View style={styles.cellRow}>
          <View style={styles.imgBox}></View>
          <View style={styles.infoBox}>
            <View style={styles.info1}>
              <View style={styles.info1Column}>
                <Text style={styles.infoText}>공고기간</Text>
                <Text style={styles.infoText}>품종</Text>
                <Text style={styles.infoText}>지역</Text>
                <Text style={styles.infoText}>구조장소</Text>
              </View>
              <View style={styles.info1Column}>
                <Text style={styles.info1TextBold}>2023.10.23~2023.11.23</Text>
                <Text style={styles.infoText}>믹스견</Text>
                <Text style={styles.infoText}>보령시 남천대로 91</Text>
                <Text style={styles.infoText}>경북 의성</Text>
              </View>
            </View>
            <View style={styles.info23inBox}>
              <View style={styles.info23}>
                <Text style={styles.info2}>공고중</Text>
                <Text style={styles.info3}>암컷</Text>
              </View>
              <Text style={styles.interestBtn}>♡</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>

      <View style={styles.cellBox}>
        <View style={styles.cellRow}>
          <View style={styles.imgBox}></View>
          <View style={styles.infoBox}>
            <View style={styles.info1}>
              <View style={styles.info1Column}>
                <Text style={styles.infoText}>공고기간</Text>
                <Text style={styles.infoText}>품종</Text>
                <Text style={styles.infoText}>지역</Text>
                <Text style={styles.infoText}>구조장소</Text>
              </View>
              <View style={styles.info1Column}>
                <Text style={styles.info1TextBold}>2023.10.23~2023.11.23</Text>
                <Text style={styles.infoText}>믹스견</Text>
                <Text style={styles.infoText}>보령시 남천대로 91</Text>
                <Text style={styles.infoText}>경북 의성</Text>
              </View>
            </View>
            <View style={styles.info23inBox}>
              <View style={styles.info23}>
                <Text style={styles.info2}>공고중</Text>
                <Text style={styles.info3}>암컷</Text>
              </View>
              <Text style={styles.interestBtn}>♡</Text>
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
    // backgroundColor: "green",
  },
  cellBox: {
    // backgroundColor: "grey",
    marginVertical: 8,
    borderRadius: 15,
  },

  line: {
    borderColor: "#cccccc",
    borderWidth: 0.5,
  },

  cellRow: {
    // backgroundColor: "yellow",
    flexDirection: "row",
  },

  imgBox: {
    backgroundColor: "#cccccc",
    flex: 1,
    margin: 5,
    borderRadius: 20,
  },
  infoBox: {
    // backgroundColor: "tomato",
    flex: 2.2,
    margin: 5,
    marginRight: 10,
  },

  info1: {
    // backgroundColor: "skyblue",
    flexDirection: "row",
  },

  info1Column: {
    margin: 4,
    marginRight: 10,
    justifyContent: "space-around",
  },

  infoText: {
    marginBottom: 3,
    fontSize: 15,
  },

  info1TextBold: {
    fontWeight: "700",
    marginBottom: 3,
    fontSize: 15,
  },

  info23inBox: {
    flexDirection: "row",
    // backgroundColor: "grey",
    justifyContent: "space-between",
    marginVertical: 3,
  },

  info23: {
    flexDirection: "row",
  },

  info2: {
    padding: 4,
    marginRight: 10,
    marginLeft: 4,
    color: "#5fb51d",
    borderColor: "#5fb51d",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },

  info3: {
    padding: 4,
    color: "#e864aa",
    borderColor: "#e864aa",
    borderWidth: 1.2,
    borderRadius: 7,
    alignSelf: "center",
  },

  interestBtn: {
    fontSize: 24,
  },
});
