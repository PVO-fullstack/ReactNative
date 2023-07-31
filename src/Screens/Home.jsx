import React from "react";
import { BottomNavigation } from "../navigation/BottomNavigation";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <BottomNavigation />
    </>
  );
}
