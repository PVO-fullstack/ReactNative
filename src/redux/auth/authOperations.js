import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerDB = createAsyncThunk(
  "user/signUp",
  async (credential, thunkAPI) => {
    try {
      const { login, email, password } = credential;
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = await updateProfile(auth.currentUser, {
        displayName: login,
      });
      console.log(result);
      // console.log(result.user.displayName);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authStateChanged = createAsyncThunk(
  "user/onChanged",
  async (_, thunkAPI) => {
    try {
      const result = await onAuthStateChanged(auth, (user) => {
        console.log("tfgui", user);
      });
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginDB = createAsyncThunk(
  "user/signIn",
  async (credential, thunkAPI) => {
    try {
      const { email, password } = credential;
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  "user/logOut",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateUserProfile = async (update) => {
//   const user = auth.currentUser;

//   // якщо такий користувач знайдений
//   if (user) {
//     // оновлюємо його профайл
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };
