import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { useState } from "react";
import {
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

export const UserCamera = ({ takePhoto }) => {
  const [newPhoto, setNewPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

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
      setIsLoader(true);
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setNewPhoto(uri);
      takePhoto(uri);
      setIsLoader(false);
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
        <View style={[!hasPermission && styles.camera]}>
          <Camera style={styles.camera} ref={setCameraRef}>
            {isLoader ? (
              <ActivityIndicator size="large" color="#FF6C00" />
            ) : (
              <TouchableOpacity
                onPress={handleTakePhoto}
                style={styles.snapContainer}
              >
                <MaterialIcons name="camera-alt" size={24} color={"#BDBDBD"} />
              </TouchableOpacity>
            )}
          </Camera>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgConteiner: {
    justifyContent: "center",
  },
  camera: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
