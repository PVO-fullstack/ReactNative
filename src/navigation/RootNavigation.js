import React from "react";
import RegistrationScreens from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";
import { useAuth } from "../component/AuthContext";

const AuthStack = createStackNavigator();

export const RootNavigation = () => {
  const { isAuth } = useAuth();

  return (
    <AuthStack.Navigator>
      {!isAuth ? (
        <>
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
        </>
      ) : (
        <>
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
          <AuthStack.Screen
            options={{
              title: "Comments",
            }}
            name="Comments"
            component={CommentsScreen}
          />
          <AuthStack.Screen
            options={{
              title: "Map",
            }}
            name="Map"
            component={MapScreen}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
