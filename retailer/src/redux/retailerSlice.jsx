import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  retailer: null,
  isRetailerLogin: false,
  products: [],
  category: [],
  orderStore: [],
  statusStore: [],
  loading: false,
};

const retailerSlice = createSlice({
  name: "RetailerStore",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isRetailerLogin = true;
      state.retailer = action.payload;
    },

    setOrder: (state, action) => {
      state.orderStore = action.payload;
    },

    setStatus: (state, action) => {
      state.statusStore = action.payload;
    },

    logout: (state) => {
      state.isRetailerLogin = false;
      state.retailer = null;
      state.products = [];
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setLogin, setStatus, setOrder, logout, setProducts, setLoading } =
  retailerSlice.actions;
export default retailerSlice.reducer;
