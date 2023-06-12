import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { router } from "./src/navigation/router";
import "react-native-gesture-handler";

export default function App() {
  const routing = router();

  return <NavigationContainer>{routing}</NavigationContainer>;
}
