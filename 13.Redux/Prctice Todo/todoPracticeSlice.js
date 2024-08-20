import { createSlice } from "@reduxjs/toolkit";

const todoPracticeSlice = createSlice({
    name: "todos",
    initialState: { todoData: [] },
    reducers: {
        addData: (state, action) => {
            state.todoData.push(action.payload);
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        },
        deleteData: (state, action) => {
            state.todoData.splice(action.payload, 1);
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        },
        updateData: (state, action) => {
            state.todoData.splice(action.payload.index, 1, action.payload.newData);
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        },
        clearData: (state) => {
            state.todoData = [];
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        }
    }
});

export default todoPracticeSlice.reducer;
export const { addData, deleteData, updateData, clearData } = todoPracticeSlice.actions;
