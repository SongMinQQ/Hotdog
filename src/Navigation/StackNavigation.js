import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialBottomTabNavigation from "./MaterialBottomTabNavigation";
import DetailAnnouncement from "../components/Information/announcement/DetailAnnouncement";
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HotDogMain" component={MaterialBottomTabNavigation} />
      <Stack.Screen name="DetailAnnouncement" component={DetailAnnouncement} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
