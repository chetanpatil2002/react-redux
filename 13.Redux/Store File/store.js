import { configureStore } from "@reduxjs/toolkit";
// import countReducer from "./countSlice";
import countSlice from "./countSlice";
import todoSlice from "./todoSlice";
import todoPracticeSlice from "../Prctice Todo/todoPracticeSlice";
import fakeProductSlice from "../Fake ApiProduct/fakeProductSlice";
import practiceSlice from "../Api Practice/practiceSlice"
 
export const store = configureStore({
  reducer: {
    countSlice: countSlice,
    todoSlice: todoSlice,
    todoPracticeSlice,
    fakeProductSlice,
    practiceSlice,
  },
});
