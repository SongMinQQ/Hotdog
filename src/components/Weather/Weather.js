import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WeatherIcon from './WeatherIcon';
import WeatherModal from './WeatherModal';
//Ionicons의 name을 sunny로 하면 해 아이콘
const Weather = () => {
    const [data, setData] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState('');
    const [modal, setModal] = useState(false);
    const key = 'AyubNIaSXmtsRH6lOKHbuLlh8x6KqA4zoQfyNVcQ1lRTV8IMnkd7MCaUDNGYgEwlAciphXq1EWORmpQkOISXSg%3D%3D';
    const url = 'https://apis.data.go.kr/1360000/VilageFcstMsgService/getLandFcst';
    const params = {
        pageNo : '1',
        numOfRows : '10',
        dataType : 'JSON',
        regId : '11C20301',
    }

    const reqUrl = url + '?serviceKey=' + key + '&' + new URLSearchParams(params);
    
    const getWeatherinfo = async() => {
        try{
            const response = await axios.get(reqUrl);
            
            const reqData = response.data.response.body.items.item;
            // console.log(response.data.response.body.items.item);
            setData([...reqData])
            if(reqData[0].wf === '흐리고 비' || reqData[0].wf === '흐리고 가끔 비'){
                setWeatherIcon('rainy');
            }
            else if(reqData[0].wf === '맑음'){
                setWeatherIcon('sunny');
            }
            else if(reqData[0].wf === '구름많음'){
                setWeatherIcon('cloud');
            }
            else if(reqData[0].wf === '흐리고 눈' || reqData[0].wf === '흐리고 비/눈'){
                setWeatherIcon('snow');
            }
            else{
                setWeatherIcon('sunny');
            }
            // console.log(weatherIcon);
            // console.log(reqData[0].wf);
            console.log(reqData);
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(() => {
        getWeatherinfo();
    }, [])

    const modalOpen = () => {
        setModal(true);
    }
    const modalClose = () => {
        setModal(false);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={modalOpen}>
            {data && data.length > 0 && 
                <View style={styles.weatherArea}>
                    <WeatherIcon name={weatherIcon} size={24}/>
                    {/* <Text>{data[0].wf}</Text> */}
                    <Text>{data[0].ta ? data[0].ta : data[1].ta}'C</Text>
                </View>
            }
            {modal && 
                <WeatherModal 
                    weatherIcon={weatherIcon} 
                    size= {40} 
                    temp={data[0].ta ? data[0].ta : data[1].ta} 
                    weather={data[0].wf} 
                    visible={modal}
                    closeFunc={modalClose}
                />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        marginRight: 13
    },
    weatherArea: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    }
})
export default Weather;