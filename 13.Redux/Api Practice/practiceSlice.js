import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productData = createAsyncThunk("productData",()=>{
  return  axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log("🚀 ~ returnaxios.get ~ res:", res.data)
    return res.data
  
  })
})


const practiceSlice = createSlice({
    name : "apiPractice",
    initialState:{apiData :[],error:"",pending:false},
    extraReducers:(builder)=>{
     builder.addCase(productData.fulfilled,(state,action) => {
         state.apiData = action.payload
        state.pending  = false

     	
     }),
     builder.addCase(productData.rejected,(state,action) => {
        state.error = action.error.message
        state.pending  = false
        
    }),
    builder.addCase(productData.pending,(state,action) => {
        state.pending  = true
        
    })
    }
})

export default practiceSlice.reducer