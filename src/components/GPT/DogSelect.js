
import React from 'react';
import PickerSelect from 'react-native-picker-select'
import { View, StyleSheet } from 'react-native';

const DogSelect = (props) => {
    const dogs = [
        { label: '진돗개', value: '진돗개' },
        { label: '삽살개', value: '삽살개' },
        { label: '시베리안 허스키', value: '시베리안 허스키' },
        { label: '푸들', value: '푸들' },
        { label: '도베르만 핀셔', value: '도베르만 핀셔' },
        { label: '골든 리트리버', value: '골든 리트리버' },
        { label: '웰시코기', value: '웰시코기' },
        { label: '시바 이누', value: '시바 이누' },
        { label: '비숑', value: '비숑' },
        { label: '시추', value: '시추' },
        { label: '포메라니안', value: '포메라니안' },
        { label: '말티즈', value: '말티즈' },
        { label: '닥스훈트', value: '닥스훈트' },
        { label: '치와와', value: '치와와' },
        { label: '퍼그', value: '퍼그' },
        { label: '프렌치불독', value: '프렌치불독' },
        { label: '비글', value: '비글' },
        { label: '저먼 셰퍼드', value: '저먼 셰퍼드' },
        { label: '요크셔태리어', value: '요크셔태리어' },
        { label: '믹스견', value: '믹스견' }
    ];
    
    return (
        <View>
            <PickerSelect
                onValueChange={(itemValue) => props.changeFunction(itemValue)}
                items={dogs}
                value={props.selectDog}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false} // 안드로이드에서 네이티브 스타일을 사용하지 않도록 설정
                placeholder={{ label: "견종을 선택하세요", value: null }} // 기본 플레이스홀더 설정>
            />
        </View>
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // iOS에서 화살표 아이콘 영역을 확보
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // 안드로이드에서 화살표 아이콘 영역을 확보
    },
  });

export default DogSelect;
