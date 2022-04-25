import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  email: "",
  name: "",
  isAuthenticated: false,
  isLoading: false,
  accessToken: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, { payload }) {
      state.isLoading = true;
    },
    authLoginSuccess(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.userId = payload.data._id;
      state.email = payload.data.email;
      state.name = payload.data.name;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    authLoginFail(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    authSignUp(state, { payload }) {
      state.isLoading = true;
    },
    authSignUpSuccess(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.userId = payload.data._id;
      state.email = payload.data.email;
      state.name = payload.data.name;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    authSignUpFail(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    authLogout(state) {
      state.userId = "";
      state.email = "";
      state.name = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.accessToken = "";
      state.error = "";
    },
    authRemoveError(state) {
      state.error = "";
    },
  },
});

export const {
  authLogin,
  authLoginSuccess,
  authLoginFail,
  authSignUp,
  authSignUpSuccess,
  authSignUpFail,
  authLogout,
  authRemoveError,
} = authSlice.actions;

export default authSlice.reducer;
