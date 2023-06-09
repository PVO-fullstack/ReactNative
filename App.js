import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import bg from "./img/Photo_BG.jpg";
import RegistrationScreens from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  function setValue(bool) {
    setIsLogin(bool);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.conteiner}>
        <ImageBackground style={styles.image} resizeMode="cover" source={bg}>
          {isLogin ? (
            <LoginScreen setlogin={setValue} />
          ) : (
            <RegistrationScreens setlogin={setValue} />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
