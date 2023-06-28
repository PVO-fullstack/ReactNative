import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";

function ProfileScreen() {
  return (
    <View style={styles.conteiner}>
      <Text>Profile</Text>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});
