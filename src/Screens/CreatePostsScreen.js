import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import nature from "../../img/nature.jpg";

function CreatePostsScreen() {
  const [photo, setPhoto] = useState({});
  const [state, setState] = useState({ name: "", place: "" });

  const { name, place } = state;
  const confirm = name !== "" && place !== "";

  return (
    <View style={styles.conteiner}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "flex-end" }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-150}
      >
        <View style={{ marginBottom: 34, marginHorizontal: 16 }}>
          <View style={styles.photo}>
            {photo && <Image source={nature}></Image>}
            <View style={[styles.elips, photo && styles.elipsInPhoto]}>
              <MaterialIcons
                name="camera-alt"
                size={24}
                color={photo ? "#ffffff" : "#BDBDBD"}
              />
            </View>
          </View>

          <Text style={styles.textUnderPhoto}>
            {photo ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <View>
            <View>
              <TextInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, name: value }));
                }}
                value={state.name}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#E8E8E8",
                  marginTop: 48,
                  paddingBottom: 15,
                  fontSize: 16,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                marginTop: 32,
              }}
            >
              <TextInput
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, place: value }));
                }}
                value={state.place}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#E8E8E8",
                  paddingLeft: 28,
                  paddingBottom: 15,
                  fontSize: 16,
                }}
              />
              <Feather
                style={{ position: "absolute", paddingBottom: 15 }}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, photo && confirm && styles.confirmBtn]}
          >
            <Text
              style={[
                styles.buttonText,
                photo && confirm && styles.confirmBtnText,
              ]}
            >
              Опубліковати
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View style={styles.delete}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  elipsInPhoto: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  elips: {
    position: "absolute",
    backgroundColor: "#ffffff",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textUnderPhoto: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
  },
  button: {
    // width: 343,s
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 32,
    marginBottom: 120,
    fontSize: 16,
  },
  confirmBtn: {
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  confirmBtnText: {
    color: "#ffffff",
  },
  delete: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    // marginBottom: 34,
  },
});

export default CreatePostsScreen;
