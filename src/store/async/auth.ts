import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../libs/api/call/user";
import { ILogin } from "../../types/app";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (body: ILogin, thunkAPI) => {
    try {
      const res = await login(body);

      const token = res.data.data;
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      const err = error as unknown as Error;
      console.log(err);

      thunkAPI.rejectWithValue(err.message);
    }
  }
);
