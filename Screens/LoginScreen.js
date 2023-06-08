import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import img from "../img/Union.png";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ setlogin }) {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [option, setOption] = useState("");
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsKeyboardShow(false);
    setIsHidePassword(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const toggleHidePassword = () => {
    setIsHidePassword((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView style={styles.container}>
        <View
          style={{ ...styles.form, marginBottom: isKeyboardShow ? -200 : 0 }}
        >
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            onFocus={() => {
              setOption("email");
              setIsKeyboardShow(true);
            }}
            onBlur={() => setOption("")}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#bdbdbd"
            onChangeText={(value) => {
              setState((prevState) => ({ ...prevState, email: value }));
            }}
            value={state.email}
            style={[styles.formInput, option === "email" && styles.inputFocus]}
          />
          <View style={styles.passwordInput}>
            <TextInput
              onFocus={() => {
                setOption("password");
                setIsKeyboardShow(true);
              }}
              onBlur={() => setOption("")}
              secureTextEntry={isHidePassword}
              placeholder="Пароль"
              placeholderTextColor="#bdbdbd"
              onChangeText={(value) => {
                setState((prevState) => ({ ...prevState, password: value }));
              }}
              value={state.password}
              style={[
                styles.formInput,
                option === "password" && styles.inputFocus,
              ]}
            />
            <Text onPress={toggleHidePassword} style={styles.inscriptiption}>
              {isHidePassword ? "Показати" : "Сховати"}
            </Text>
          </View>
          <TouchableHighlight onPress={keyboardHide} style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableHighlight>
          <Text onPress={() => setlogin(false)} style={styles.formEndText}>
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  forPhoto: {
    top: -60,
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
  },
  formInput: {
    width: 343,
    height: 50,
    paddingLeft: 32,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
  },
  inputFocus: {
    width: 343,
    height: 50,
    paddingLeft: 32,
    color: "#212121",
    fontSize: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#FF6C00",
  },
  passwordInput: {
    alignItems: "flex-end",
  },
  inscriptiption: {
    position: "absolute",
    padding: 16,
    color: "#1B4371",
    fontSize: 16,
  },
  button: {
    width: 343,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 27,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  formEndText: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
    marginBottom: 144,
  },
  form: {
    alignItems: "center",
    height: 489,
    left: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  plus: {
    position: "absolute",
    top: 21,
    right: 135,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: "#FF6C00",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
