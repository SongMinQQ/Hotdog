import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import DogInfo from "../components/Information/DogInfo";
import Gpt from "../components/GPT/Gpt";
import Quiz from "../components/Quiz/Quiz";
import Community from "../components/Community/Community";

import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const MaterialBottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DogInfo}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="GPT"
        component={Gpt}
        options={{
          tabBarLabel: "GPT",
          tabBarIcon: () => (
            <SimpleLineIcons name="bulb" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarLabel: "Quiz",
          tabBarIcon: () => (
            <SimpleLineIcons name="pencil" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: () => (
            <AntDesign name="aliwangwang-o1" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MaterialBottomTabNavigation;
