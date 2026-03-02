import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadmore } from "../../store/slice/postSlice";

export default function Loadmore() {
    const dispatch = useDispatch();
    const { loadmoreStatus, postTotal, limit } = useSelector(
        (state) => state.posts
    );

    const handleLoadmore = () => {
        dispatch(loadmore());
    };
    if (postTotal === 0) {
        return;
    }

    return (
        <div style={{ textAlign: "center" }}>
            {limit < postTotal ? (
                <button onClick={handleLoadmore}>
                    {loadmoreStatus === "pending" ? "Loading..." : "Tải thêm"}
                </button>
            ) : (
                <p>Hết trang</p>
            )}
        </div>
    );
}
