import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../nestedScreens/Home";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { BottomNavigation } from "../../navigation/BottomNavigation";

const NestedScreen = createStackNavigator();

const PostsScreeen = () => {
  return (
    <BottomNavigation />
    // <NestedScreen.Navigator>
    //   <NestedScreen.Screen
    //     options={{
    //       headerShown: false,
    //     }}
    //     name="Home"
    //     component={Home}
    //   />
    //   <NestedScreen.Screen
    //     options={{
    //       title: "Коментарі",
    //       headerTitleAlign: "center",
    //     }}
    //     name="Comments"
    //     component={CommentsScreen}
    //   />
    //   <NestedScreen.Screen
    //     options={{
    //       title: "Карта",
    //       headerTitleAlign: "center",
    //     }}
    //     name="Map"
    //     component={MapScreen}
    //   />
    // </NestedScreen.Navigator>
  );
};

export default PostsScreeen;
