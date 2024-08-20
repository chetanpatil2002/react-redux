import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

export const fetchData = createAsyncThunk("product/fetchData", () => {
  return axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log("🚀 ~ returnaxios.get ~ res.data:", res.data);
    return res.data;
  });
});
const fakeProductSlice = createSlice({
  name: " product",
  initialState: { productData: [], error: "", pending: false },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.productData = action.payload;
      state.pending = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.error.message;
      state.pending = false;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.pending = true;
    });
  },
});
export default fakeProductSlice.reducer;
