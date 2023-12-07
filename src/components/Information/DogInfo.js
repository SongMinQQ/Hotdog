import React from "react";
import { View, Text, ScrollView } from "react-native";
import Announcement from "./Announcement";
import FindShelter from "./FindShelter";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const DogInfo = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="유기견 공고" component={Announcement} />
      <Tab.Screen name="보호소 찾기" component={FindShelter} />
    </Tab.Navigator>
  );
};

export default DogInfo;
