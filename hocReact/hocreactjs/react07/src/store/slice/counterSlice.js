import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", //tên feature
    initialState: {
        count: 0, //chứa các state
    },
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },

        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },
});

// Action creator

// console.log(todoSlice.actions);
export const { increment, decrement } = counterSlice.actions;
