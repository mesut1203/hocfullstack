import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/slice/postSlice";
import PostList from "./PostList";
import Loadmore from "./Loadmore";

export default function Posts() {
    const dispatch = useDispatch();
    const limit = useSelector((state) => state.posts.limit);
    useEffect(() => {
        dispatch(fetchPost());
    }, [limit]);

    return (
        <div>
            <PostList />
            <Loadmore />
        </div>
    );
}

// Cách làm cũ: call component --> Dispatch Store

// Theo Redux: Dispatch Action --> Middleware (Thunk, Saga) --> Reducer ---> Store
