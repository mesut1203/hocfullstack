import React from "react";
import { useFetch } from "./hooks/use-fetch";
import { useScrollTop } from "./hooks/use-scroll-top";

export default function App() {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [isScroll, handleBackToTop] = useScrollTop(100);
    return (
        <div>
            <div>
                {data &&
                    data.map((item) => <h3 key={item.id}>{item.title}</h3>)}
            </div>
            {isScroll && (
                <button
                    onClick={handleBackToTop}
                    style={{
                        position: "fixed",
                        right: 10,
                        bottom: 10,
                    }}
                >
                    Top
                </button>
            )}
        </div>
    );
}

// Bài tập viết hook useScrollTop(value)
// - Trả về giá trị true/ false
//- Trả về true khi ng dùng kéo thanh cuộn tới vị trí >= value

//Áp dụng: GỌi hook đó vào component App với value là 100
// const isScroll = useScrollTop(100);
// Sử dụng giá trị isScroll trả về để hiển thị nút Top ở phía dưới trang web
