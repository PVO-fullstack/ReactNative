import { createSlice } from "@reduxjs/toolkit";
import { loginDB, registerDB, userLogOut } from "./authOperations";

export const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      uid: null,
      displayName: null,
      email: null,
      uid: null,
      photoUrl: null,
    },
    isLogin: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registerDB.fulfilled, (state, { payload }) => {
        state.user.uid = payload.uid;
        state.user.email = payload.email;
        state.user.displayName = payload.displayName;
        state.isLogin = true;
      })
      .addCase(loginDB.fulfilled, (state, { payload }) => {
        state.user.uid = payload.uid;
        state.user.email = payload.email;
        state.user.displayName = payload.displayName;
        state.isLogin = true;
      })
      .addCase(userLogOut.fulfilled, (state, { payload }) => {
        (state.isLogin = null),
          (state.user.displayName = null),
          (state.user.email = null),
          (state.user.photoUrl = null),
          (state.user.uid = null);
      }),
});
