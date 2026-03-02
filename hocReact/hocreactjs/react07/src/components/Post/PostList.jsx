import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPost } from "../../assets/a";

export default function PostList() {
    const { postList, loading, error } = useSelector((state) => state.posts);

    if (error) {
        return <h2>{error}</h2>;
    }
    return (
        <div>
            {loading ? (
                <h2>Loading......</h2>
            ) : (
                postList.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            display: "list-item",
                            listStyle: "inside decimal-leading-zero",
                        }}
                    >
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </div>
    );
}

//  Loading khi chưa có dữ liệu
// khi APi sai thì hiển thị ra lỗi
