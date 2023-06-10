import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { router } from "./router";

export default function App() {
  const routing = router({});

  return <NavigationContainer>{routing}</NavigationContainer>;
}
