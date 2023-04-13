import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    email: null,
    firstName: null,
    lastName: null,
    image: null,
    password: null,
    loading: false,
    error: false,
    token: "0cf01d0f07118ff554256d02c86a96c3ffd5cc1d",
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.email = null;
      state.image = null;
      // state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.password = payload?.password;
      state.email = payload?.email;
      state.firstName = payload?.first_name;
      state.lastName = payload?.last_name;
      state.image = payload?.image;
      state.error = false;
    },
    changeUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.firstName = payload?.first_name;
      state.lastName = payload?.last_name;
      state.email = payload?.email;
      state.error = false;
    },
    changePasswordSuccess: (state, { payload }) => {
      state.loading = false;
      state.password = payload?.new_password1;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
  changeUserSuccess,
  changePasswordSuccess,
} = authSlice.actions;
export default authSlice.reducer;
