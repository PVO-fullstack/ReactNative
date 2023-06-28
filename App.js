import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { router } from "./src/navigation/router";
import "react-native-gesture-handler";
import { AuthProvider } from "./src/component/AuthContext";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

export default function App() {
  const routing = router();

  return (
    <AuthProvider>
      <NavigationContainer>{routing}</NavigationContainer>
    </AuthProvider>
  );
}
