import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
// import RegistrationScreens from "../components/RegistrationScreen";
import photo from "../../img/foto.jpg";

import { Feather } from "@expo/vector-icons";

const posts = [
  {
    id: 1,
    photo: photo,
    email: "email@example.com",
    userName: "Natali Romanova",
  },
];

export default function PostsScreeen() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.posts}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image source={item.photo} />
              </View>
              <View style={{ justifyContent: "center", paddingLeft: 8 }}>
                <Text>{item.userName}</Text>
                <Text>{item.email}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* <View style={styles.btnPosition}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: { flex: 1, backgroundColor: "#ffffff" },
  posts: {
    paddingTop: 32,
    paddingLeft: 16,
    justifyContent: "center",
    backgroundColor: "#ffffff",
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
    // justifyContent: "flex-end",
    marginTop: 550,
  },
});
