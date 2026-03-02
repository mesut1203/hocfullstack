import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from "@reduxjs/toolkit";
import Loadmore from "../../components/Post/Loadmore";
const LIMIT = 20;

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        postList: [],

        loading: true,
        error: null,
        limit: 20,
        hasMore: "idle",
        postTotal: 0,
    },
    reducers: {
        loadmore: (state) => {
            state.limit += LIMIT;
            state.hasMore = "pending";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.postList = action.payload.data;
            state.hasMore = "idle";
            state.loading = false;
            state.postTotal = action.payload.total;
        });

        builder.addCase(fetchPost.rejected, (state, action) => {
            state.error = action.payload;

            state.loading = false;
        });
    },
});

export const { loadmore } = postSlice.actions;

// Middleware
// export const fetchPost = () => {
//     return async (dispatch) => {
//         // dispatch hàm dùng để dispatch lên reducer
//         //getState: Hàm trả về tất cả state của store
//         try {
//             const response = await fetch(
//                 `https://jsonplaceholder.typicode.com/posts1`
//             );
//             if (!response.ok) {
//                 throw new Error();
//             }
//             const data = await response.json();
//             dispatch(postSlice.actions.fetchPost(data));
//         } catch (error) {
//             dispatch(postSlice.actions.setError("Đã có lỗi"));
//         }
//     };
// };

export const fetchPost = createAsyncThunk(
    "fetchPost",
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const limit = state.posts.limit;
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}
                `
            );

            if (!response.ok) {
                throw new Error();
            }

            const total = response.headers.get("x-total-count");

            const data = await response.json();
            return { data, total };
        } catch {
            return rejectWithValue("Đã có lỗi khi gọi Api");
        }
    }
);

// Trạng thái createAsyncThunk  ---> giống trạng thái Promise

// --pending
//--fulfiled
//--
