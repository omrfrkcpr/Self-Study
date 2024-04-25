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
    // firmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },
    // brandsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload;
    // },
    // getSuccess: (state, { payload }) => {
    //   console.log(payload);
    //   state.loading = false;
    //   // state.brands = payload;
    //   state[payload.url] = payload.data
    // },
    getSuccess: (state, { payload:{data,url} }) => {
      // console.log(payload);
      state.loading = false;
      state[url] = data; // state["brands"] - state["firms"]
    },
    getProCatBrandSuccess : (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },
    getProPurcFirBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0].data;
      state.purchases = payload[1].data;
      state.firms = payload[2].data;
      state.brands = payload[3].data;
    },
    getProSalBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0].data;
      state.brands = payload[1].data;
      state.sales = payload[2].data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  // firmsSuccess,
  getSuccess,
  // brandsSuccess,
  getProCatBrandSuccess,
  getProPurcFirBrandsSuccess,
  getProSalBrandsSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
