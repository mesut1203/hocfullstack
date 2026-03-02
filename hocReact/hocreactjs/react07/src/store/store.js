import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice/todoSlice";
import { counterSlice } from "./slice/counterSlice";
import { postSlice } from "./slice/postSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
        posts: postSlice.reducer,
    },
});
