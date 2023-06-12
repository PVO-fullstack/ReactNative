import React from "react";

import { RootNavigation } from "./RootNavigation";
import { BottomNavigation } from "./BottomNavigation";

export const router = (isAuth) => {
  if (!isAuth) {
    return <RootNavigation />;
  }
  return <BottomNavigation />;
};
