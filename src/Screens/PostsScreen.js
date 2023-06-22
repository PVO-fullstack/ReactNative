import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import userPhoto from "../../img/foto.jpg";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const user = {
  id: 1,
  photo: userPhoto,
  email: "email@example.com",
  userName: "Natali Romanova",
};

export default function PostsScreeen({ route }) {
  const [photos, setPhotos] = useState([]);
  const post = route.params;

  console.log("post", post);

  useEffect(() => {
    if (post) {
      setPhotos((prev) => [...prev, post]);
    }
  }, [route.params]);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.posts}>
        <View style={{ flexDirection: "row" }}>
          <Image source={user.photo} />
          <View style={styles.userData}>
            <Text>{user.email}</Text>
            <Text>{user.userName}</Text>
          </View>
        </View>
        {photos.length > 0 && (
          <FlatList
            data={photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.post}>
                <Image style={styles.camera} source={{ uri: item.photo }} />
                <Text style={styles.postText}>{item.state.name}</Text>
                <View style={styles.description}>
                  <Feather
                    onPress={() => navigation.navigate("Comments", { item })}
                    style={{ marginRight: 9 }}
                    name="message-circle"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text style={styles.postText}>0</Text>
                  <Feather
                    onPress={() => navigation.navigate("Map", { item })}
                    style={{ marginLeft: 49, marginRight: 13 }}
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text style={styles.postText}>{item.state.place}</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  userData: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  posts: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
  },
  post: {
    marginTop: 32,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    position: "absolute",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ff6c00",
    justifyContent: "center",
    alignItems: "center",
  },
  btnPosition: {
    flex: 1,
    marginTop: 550,
  },
  camera: {
    flex: 1,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  postText: {
    color: "#212121",
    fontSize: 16,
  },
  description: {
    flexDirection: "row",
    marginTop: 10,
  },
});
