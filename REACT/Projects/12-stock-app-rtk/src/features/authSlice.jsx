import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state,{payload})=>{
      state.loading = false;
      state.currentUser = payload.data.username
      state.token = payload.token
    },
     //! user bilgisi farklı geldiği için ayrı slice açtık
     loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.token;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  registerSuccess,
  logoutSuccess,
  loginSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
