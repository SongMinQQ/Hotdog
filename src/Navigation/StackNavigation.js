import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialBottomTabNavigation from './MaterialBottomTabNavigation';
const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HotDogMain' component={MaterialBottomTabNavigation}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;