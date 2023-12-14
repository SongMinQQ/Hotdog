import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialBottomTabNavigation from "./MaterialBottomTabNavigation";
import DetailAnnouncement from "../components/Information/announcement/DetailAnnouncement";
import MyLike from "../components/Information/announcement/MyLike";
// import WeatherIcon from "../components/Weather/WeatherIcon";
import Weather from "../components/Weather/Weather";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HotDogMain" component={MaterialBottomTabNavigation} options={{
        headerRight: () => <Weather/>,
        title:"HotDog"
      }}/>
      <Stack.Screen name="DetailAnnouncement" component={DetailAnnouncement} />
      <Stack.Screen name="MyLike" component={MyLike} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
