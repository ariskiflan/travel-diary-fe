import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { loginAsync } from "../async/auth";
import { IRegister } from "../../types/app";

interface IAuthState {
  user: IRegister | null | undefined;
  token: string;
  loading: boolean;
  errorMessage: string;
}

const initialState: IAuthState = {
  token: "",
  user: undefined,
  loading: false,
  errorMessage: "",
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    SET_LOGIN: (
      state,
      action: PayloadAction<{ user: IRegister; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    SET_LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.token = "";
    },
  },

  extraReducers(builder) {
    // login proccess
    builder.addCase(loginAsync.pending, (state) => {
      state.token = "";
      state.loading = true;
    });

    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.token = action.payload;
    });

    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.token = "";
      state.errorMessage = action.payload as string;
    });
  },
});

export const { SET_LOGIN, SET_LOGOUT } = counterSlice.actions;
export default counterSlice.reducer;
