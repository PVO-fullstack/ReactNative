import React from "react";
import { RootNavigation } from "./RootNavigation";
import { BottomNavigation } from "./BottomNavigation";
import { useSelector } from "react-redux";

export const router = (isAuth) => {
  if (!isAuth) {
    return <RootNavigation isAuth={isAuth} />;
  }
  return <BottomNavigation />;
};
