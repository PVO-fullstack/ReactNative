import React from "react";
import { BottomNavigation } from "../navigation/BottomNavigation";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <BottomNavigation />
      {/* <TouchableOpacity
        // style={[styles.tabBar, focused && styles.tabBarFocused]}
        onPress={() => navigation.navigate("CreatePostsScreen")}
      >
        <View style={{ position: "absolute", bottom: 45, alignSelf: "center" }}>
          <Feather
            name="plus"
            size={24}
            // color={focused ? "#ffffff" : "#212121cc"}
          />
        </View>
      </TouchableOpacity> */}
    </>
  );
}
