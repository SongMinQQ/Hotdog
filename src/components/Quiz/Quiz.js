import React from 'react';
import { View, Text } from 'react-native';
import Weather from '../Weather/Weather';

const Quiz = () => {
    return (
        <View>
            <Text>퀴즈 페이지</Text>
            <Weather></Weather>
        </View>
    );
};

export default Quiz;