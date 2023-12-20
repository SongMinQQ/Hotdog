import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialBottomTabNavigation from "./MaterialBottomTabNavigation";
import DetailAnnouncement from "../components/Information/announcement/DetailAnnouncement";
import MyLike from "../components/Information/announcement/MyLike";
import PostDetail from "../components/Community/PostDetail";
import AddPost from "../components/Community/AddPost";
import Weather from "../components/Weather/Weather";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HotDogMain" component={MaterialBottomTabNavigation} options={{
        headerRight:() => <Weather/>
      }}/>
      <Stack.Screen name="DetailAnnouncement" component={DetailAnnouncement} />
      <Stack.Screen name="MyLike" component={MyLike} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="AddPost" component={AddPost} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
