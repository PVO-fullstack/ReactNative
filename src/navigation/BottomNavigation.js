import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreeen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { paddingHorizontal: 60, height: 83, paddingBottom: 30 },
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
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather
                style={{ marginRight: 10 }}
                name="log-out"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
        }}
        name="Posts"
        component={PostsScreeen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              style={styles.tabBar}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              {/* <View style={[styles.tabBar, focused && styles.tabBarFocused]}>
               {focused ? ( */}
              {/* <Feather name="trash-2" size={24} color="#BDBDBD" /> */}

              <Feather name="plus" size={24} color="#fff" />
              {/* )}
            </View>  */}
            </TouchableOpacity>
          ),
          headerTitle: "Створити публікацію",
          headerTitleStyle: { color: "#212121" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                style={{ marginLeft: 16 }}
                name="arrow-left"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
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
});