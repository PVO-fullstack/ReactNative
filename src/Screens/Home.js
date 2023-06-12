import React from "react";
// import { View, Text } from "react-native";
import { BottomNavigation } from "../navigation/BottomNavigation";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return <BottomNavigation />;
}
