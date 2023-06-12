import React from "react";
import RegistrationScreens from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import CreatePostsScreen from "../Screens/CreatePostsScreen";

const AuthStack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={RegistrationScreens}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <AuthStack.Screen
        options={{
          title: "Створити публікацію",
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
    </AuthStack.Navigator>
  );
};
