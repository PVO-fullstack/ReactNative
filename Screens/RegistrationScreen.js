import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreens({ setlogin }) {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [option, setOption] = useState("");
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const toggleHidePassword = () => {
    setIsHidePassword((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          onFocus={() => {
            setOption("login");
          }}
          onBlur={() => setOption("")}
          placeholder="Логін"
          placeholderTextColor="#bdbdbd"
          onChangeText={(value) => {
            setState((prevState) => ({ ...prevState, login: value }));
          }}
          value={state.login}
          style={[styles.formInput, option === "login" && styles.inputFocus]}
        />
        <TextInput
          onFocus={() => {
            setOption("email");
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
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableHighlight>
        <Text onPress={() => setlogin(true)} style={styles.formEndText}>
          Вже є акаунт? Увійти
        </Text>
        <View style={styles.forPhoto}>
          <EvilIcons
            style={styles.plus}
            name="plus"
            size={24}
            color="#FF6C00"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
    marginTop: 82,
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
    marginBottom: 78,
  },
  form: {
    alignItems: "center",
    height: 549,
    left: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  plus: {
    position: "absolute",
    top: 81,
    left: 107,
  },
});
