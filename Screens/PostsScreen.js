import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
// import RegistrationScreens from "../components/RegistrationScreen";
import photo from "../img/foto.jpg";

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
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
