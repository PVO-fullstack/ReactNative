import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { router } from "../navigation/router";
import { useSelector } from "react-redux";
import { authStateChanged } from "../redux/auth/authOperations";

export const Main = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const name = useSelector((state) => state.auth.user.displayName);
  console.log("Main", isLogin);

  useEffect(() => {
    authStateChanged();
  }, []);

  const routing = router(isLogin);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
