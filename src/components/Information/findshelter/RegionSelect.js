import React from "react";
import { View, StyleSheet } from "react-native";
import PickerSelect from "react-native-picker-select";
import theme from "../colors";

const RegionSelect = (props) => {
  const regionList = [
    { label: "서울", value: "서울" },
    { label: "부산", value: "부산" },
    { label: "대구", value: "대구" },
    { label: "인천", value: "인천" },
    { label: "광주", value: "광주" },
    { label: "대전", value: "대전" },
    { label: "울산", value: "울산" },
    { label: "경기도", value: "경기도" },
    { label: "강원도", value: "강원도" },
    { label: "충청북도", value: "충청북도" },
    { label: "충청남도", value: "충청남도" },
    { label: "전라북도", value: "전라북도" },
    { label: "전라남도", value: "전라남도" },
    { label: "경상북도", value: "경상북도" },
    { label: "경상남도", value: "경상남도" },
    { label: "제주도", value: "제주도" },
  ];

  return (
    <View>
      <PickerSelect
        onValueChange={(itemValue) => props.changeFunction(itemValue)}
        items={regionList}
        value={props.selectRegion}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false} // 안드로이드에서 네이티브 스타일을 사용하지 않도록 설정
        placeholder={{ label: "지역을 선택하세요", value: null }}
      />
    </View>
  );
};

export default RegionSelect;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#dfedf5",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // 안드로이드에서 화살표 아이콘 영역을 확보
  },
});
