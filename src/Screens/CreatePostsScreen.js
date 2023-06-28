import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { UserCamera } from "../component/Camera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

function CreatePostsScreen() {
  const [state, setState] = useState({ name: "", place: "" });
  const [photo, setPhoto] = useState(null);
  const [location, setlocation] = useState(null);
  const { name, place } = state;
  const confirm = name !== "" && place !== "";
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      setlocation(coords);
    })();
  }, []);

  const takePhoto = async (data) => {
    setPhoto(data);
  };

  const handleCreatePost = () => {
    navigation.navigate("Posts", { photo, state, location });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-100}
        >
          <View>
            <View style={styles.photo}>
              <UserCamera
                takePhoto={takePhoto}
                style={styles.photo}
              ></UserCamera>
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
                  style={styles.photoName}
                />
              </View>
              <View style={styles.locationConteiner}>
                <TextInput
                  placeholder="Місцевість..."
                  placeholderTextColor="#BDBDBD"
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, place: value }));
                  }}
                  value={state.place}
                  style={styles.location}
                />
                <Feather
                  style={styles.locationIcon}
                  name="map-pin"
                  size={24}
                  color="#BDBDBD"
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={handleCreatePost}
              style={[styles.button, confirm && styles.confirmBtn]}
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
          </View>
          <View style={styles.deleteBtn}>
            <View style={styles.delete}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  keyboard: {
    marginTop: 32,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  photoName: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginTop: 48,
    paddingBottom: 15,
    fontSize: 16,
  },
  locationConteiner: {
    justifyContent: "center",
    marginTop: 32,
  },
  location: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingLeft: 28,
    paddingBottom: 15,
    fontSize: 16,
  },
  locationIcon: {
    position: "absolute",
    paddingBottom: 15,
  },
  deleteBtn: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 34,
    marginTop: 10,
  },
  textUnderPhoto: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 32,
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
    // flexGrow: 1,
  },
  photo: {
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default CreatePostsScreen;
