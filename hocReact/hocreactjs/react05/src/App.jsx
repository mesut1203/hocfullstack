import React, { useState } from "react";
import Counter from "./component/Counter";
import TodoList from "./component/TodoList";
import ThemeToggle from "./component/ThemeToggle";
export const AppContext = React.createContext();

export default function App() {
    const [theme, setTheme] = useState("light");
    return (
        <div>
            {/* <Counter /> */}
            <AppContext.Provider
                value={{ message: "Unicode", theme, setTheme }}
            >
                <ThemeToggle />
                <TodoList />
            </AppContext.Provider>
        </div>
    );
}

/*
useReducer: Tư duy reducer ( giống method array)
- Tách logic cập nhật state ra ngoài
- Xử lý logic phức tạp hoặc muốn gộp lại
- Hữu dụng các bài toán state toàn cục (Share dữ liệu giữa các component)

Cú pháp:
const [state, dispatch] = useReducer(reducer, initialState)


Context: Component bọc component khác nhằm mục đích chia sẻ dữ liệu tới các component mà nó bọc ( khong cần truyền props)

- Provider: Gửi dữ liệu
- Consumer: Nhận dữ liệu ( sử dụng hook useCOntext)
*/
