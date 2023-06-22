import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

export const UserCamera = ({ takePhoto, photo }) => {
  const [newPhoto, setNewPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setNewPhoto(uri);
      takePhoto(uri);
    }
  };

  return (
    <View style={styles.container}>
      {newPhoto ? (
        <View style={styles.imgConteiner}>
          <Image source={{ uri: newPhoto }} style={styles.camera} />
          <View style={styles.snapContainer}>
            <MaterialIcons name="camera-alt" size={24} color={"#ffffff"} />
          </View>
        </View>
      ) : (
        <Camera style={styles.camera} ref={setCameraRef}>
          <TouchableOpacity
            onPress={handleTakePhoto}
            style={styles.snapContainer}
          >
            <MaterialIcons name="camera-alt" size={24} color={"#BDBDBD"} />
          </TouchableOpacity>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imgConteiner: {
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#ffffff4d",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
