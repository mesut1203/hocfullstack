import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        TodoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.TodoList.push(action.payload);
        },

        removeTodo: (state, action) => {
            state.TodoList.splice(action.payload, 1);
        },
        completedTodo: (state, action) => {
            state.TodoList[action.payload].completed =
                !state.TodoList[action.payload].completed;
        },
    },
});

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;
