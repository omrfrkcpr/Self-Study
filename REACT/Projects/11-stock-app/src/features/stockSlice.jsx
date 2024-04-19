import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    categories: [],
    brands: [],
    firms: [],
    products: [],
    purchases: [],
    sales: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    // base success reducer for all success cases. We should not use dot notation for dynamic object keys.(payload) Instead of we should use square bracket notation.
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    // firmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },
    // brandsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload;
    // },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  // firmsSuccess,
  // brandsSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
