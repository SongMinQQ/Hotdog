import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WeatherIcon from './WeatherIcon';
//Ionicons의 name을 sunny로 하면 해 아이콘
const Weather = () => {
    const [data, setData] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState('');
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
            if(reqData[0].wf === '흐리고 비'){
                setWeatherIcon('rainy');
            }
            else if(reqData[0].wf === '맑음'){
                setWeatherIcon('sunny');
            }
            else if(reqData[0].wf === '구름많음'){
                setWeatherIcon('cloud');
            }
            else if(reqData[0].wf === '흐리고 눈'){
                setWeatherIcon('snow');
            }
            else{
                setWeatherIcon('sunny');
            }
            console.log(weatherIcon);
            console.log(reqData[0].wf);
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(() => {
        getWeatherinfo();
    }, [])
    console.log(reqUrl);
    return (
        <TouchableOpacity style={styles.container}>
            {data && data.length > 0 && 
                <View style={styles.weatherArea}>
                    <WeatherIcon name={weatherIcon} size={24}/>
                    {/* <Text>{data[0].wf}</Text> */}
                    <Text>{data[0].ta}'C</Text>
                </View>
            }
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