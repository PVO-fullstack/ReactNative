import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import RegistrationScreens from "../components/RegistrationScreen";
import bg from "../img/Photo_BG.jpg";

export default function PostsScreeen() {
  return (
    <View>
      {/* <ImageBackground source={bg} resizeMode="cover"> */}
      <RegistrationScreens />
      {/* </ImageBackground> */}
    </View>
  );
}
