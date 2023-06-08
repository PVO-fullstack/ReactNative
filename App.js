import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import PostsScreeen from "./Screens/PostsScreen";
import bg from "./img/Photo_BG.jpg";
import RegistrationScreens from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  function setValue(bool) {
    setIsLogin(bool);
  }

  return (
    <View style={styles.conteiner}>
      <ImageBackground style={styles.image} resizeMode="cover" source={bg}>
        {isLogin ? (
          <LoginScreen setlogin={setValue} />
        ) : (
          <RegistrationScreens setlogin={setValue} />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
