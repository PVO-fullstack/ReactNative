import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapScreen({ route }) {
  const {
    item: { location },
  } = route.params;

  // console.log("location", location);
  // const region = {
  //   latitude: location.latitude,
  //   longitude: location.longitude,
  // };

  return (
    <View style={styles.conteiner}>
      <MapView
        style={styles.mapConteiner}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Travel photo"
          pinColor="tomato"
        />
      </MapView>
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  mapConteiner: {
    flex: 1,
  },
});
