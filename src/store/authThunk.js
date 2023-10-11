import { createAsyncThunk } from "@reduxjs/toolkit";
import { onSignIn } from "../firebaseConfig";

export const login = createAsyncThunk(
  "login",
  
  async (argument, { rejectWithValue }) => {
    let res = await onSignIn(argument);
    if (res.user.accessToken) {
      return res.user;
    } else {
      rejectWithValue("Error!!");
    }
  }
);

export const loginGoogle = createAsyncThunk();
