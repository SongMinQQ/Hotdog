import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Modal, TouchableOpacity,Text } from 'react-native';
import WeatherIcon from './WeatherIcon';

const WeatherModal = (props) => {
    const [message, setMessage] = useState("오늘은 산책하기 좋은 날씨입니다.");
    useEffect(() => {
        if(props.weatherIcon === 'sunny'){
            setMessage("오늘은 산책하기 좋은 날씨입니다.");
        }
        else if(props.weatherIcon === 'rainy'){
            setMessage("오늘은 비가 옵니다. 산책에 유의하세요.")
        }
        else if(props.weatherIcon === 'cloud'){
            setMessage("오늘은 구름이 꼈습니다. 산책에 문제는 없어요.")
        }
        else {
            setMessage("오늘은 눈이 옵니다. 산책을 자제하세요.")
        }
    }, [])
    
    return (
        <Modal animationType="slide" transparent={true} visible={props.visible}>
            <View style={styles.modalContent}>
                <WeatherIcon name={props.weatherIcon} size={170}/>
                <Text style={styles.weatherText}>{props.weather}</Text>
                <Text style={styles.weatherTemp}>{props.temp}'C</Text>
                <View>
                    <Text>{message}</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={props.closeFunc}>
                    <Text style={styles.closeButtonText}>닫기</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 80,
    },
    container2: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    modalContent: {
        height: '75%',
        width: '90%',
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center', // 세로 방향으로 중앙에 위치
        alignItems: 'center', // 가로 방향으로 중앙에 위치
        alignSelf: 'center', // 부모 컨테이너에 대해 스스로를 중앙에 위치
        top: '10%'
      },
      closeButton: {
        marginTop: 20, // 위치 조정
        backgroundColor: '#e0e0e0', // 버튼 배경색
        padding: 10, // 패딩으로 버튼 크기 조정
        borderRadius: 5, // 버튼 모서리 둥글게
    },
    closeButtonText: {
        fontWeight: 'bold', // 글자 두께
    },
    weatherText: {
        fontSize: 30
    },
    weatherTemp:{
        fontSize: 40
    }
})
export default WeatherModal;