import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const WeatherIcon = (props) => {
    return (
        <>  
            <Ionicons name={props.name} size={props.size} color="black"/>
        </>
    );
};

export default WeatherIcon;