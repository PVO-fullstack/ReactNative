import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreeen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import RegistrationScreens from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { Feather } from "@expo/vector-icons";

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const router = (isAuth) => {
  if (!isAuth) {
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
      </AuthStack.Navigator>
    );
  }
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { paddingHorizontal: 60 },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#212121" },
          headerRight: () => (
            <Feather
              style={{ marginRight: 10 }}
              name="log-out"
              size={24}
              color="#BDBDBD"
            />
          ),
        }}
        name="Posts"
        component={PostsScreeen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={[styles.tabBar, focused && styles.tabBarFocused]}>
              <Feather name="plus" size={24} color="#fff" />
            </View>
          ),
          headerTitle: "Створити пост",
          headerTitleStyle: { color: "#212121" },
          headerTitleAlign: "center",
          headerRight: () => (
            <Feather
              style={{ marginRight: 10 }}
              name="log-out"
              size={24}
              color="#BDBDBD"
            />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerTitle: "Профіль",
          headerTitleStyle: { color: "#212121" },
          headerTitleAlign: "center",
          headerRight: () => (
            <Feather
              style={{ marginRight: 10 }}
              name="log-out"
              size={24}
              color="#BDBDBD"
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  tabBar: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ff6c00",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarFocused: {
    backgroundColor: "blue",
  },
});
