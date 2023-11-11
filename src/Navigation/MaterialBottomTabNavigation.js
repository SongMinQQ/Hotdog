import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import DogInfo from '../components/Information/DogInfo';
import Gpt from '../components/GPT/Gpt';
import Quiz from '../components/Quiz/Quiz';
import Community from '../components/Community/Community';

const Tab = createMaterialBottomTabNavigator();
const MaterialBottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={DogInfo}/>
            <Tab.Screen name='GPT' component={Gpt}/>
            <Tab.Screen name='Quiz' component={Quiz}/>
            <Tab.Screen name='Community' component={Community}/>
        </Tab.Navigator>
    );
};

export default MaterialBottomTabNavigation;