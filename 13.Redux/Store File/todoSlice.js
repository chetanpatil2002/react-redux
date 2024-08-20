import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoTask: JSON.parse(localStorage.getItem("todoTask")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todoTask?.push(action.payload);
      localStorage.setItem("todoTask", JSON.stringify(state.todoTask));
    },

    deleteTodo: (state, action) => {
      state.todoTask.splice(action.payload, 1);
      localStorage.setItem("todoTask", JSON.stringify(state.todoTask));
    },

    updateTodo: (state, action) => {
      state.todoTask.splice(action.payload.index, 1, action.payload.newData);
      localStorage.setItem("todoTask", JSON.stringify(state.todoTask));
    },

    serachtodo: (state, action) => {
      let searchData = JSON.parse(localStorage.getItem("todoTask"));
      state.todoTask = searchData;
    },
    cleartodo: (state) => {
      state.todoTask = [];
      localStorage.setItem("todoTask", JSON.stringify(state.todoTask));

    },
  },
});

export default todoSlice.reducer;
export const { addtodo, deleteTodo, updateTodo, serachtodo, cleartodo } =
  todoSlice.actions;
