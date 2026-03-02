import { useEffect, useState } from "react";
import Hello from "./components/Hello";

export default function App() {
    const [count, setCount] = useState(0);
    const [isShow, setShow] = useState(true);
    // const [count2, setCount2] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    console.log("re-render");
    // Không nên xử lý tại đây

    // useEffect(() => {
    //     if (count <= 5) {
    //         setCount2(count);
    //     }
    // }, [count]);

    // useEffect(() => {
    //     console.log("useEffect callback", count);

    //     // cleanup

    //     return () => {
    //         console.log("cleanup", count);
    //     };
    // }, [count]);

    return (
        <div>
            {console.log("UI Update")}
            <h1>Count: {count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => setShow(!isShow)}>Toggle</button>
            {isShow && <Hello />}
        </div>
    );
}

// useEffect(): dùng để xử lý các side effects ( Công việc bên lề, nằm ngoài luồng chính component)
// Luồng chính của components : State thay đổi: --> Cập nhật giao diện

// Cú pháp
/*
useEffect (callback, dependencies)

callback: Hàm thực thi
depencies: Điều kiện call back thực thi
-null hoặc undefined: Khi component re-render ---> callback sẽ được thực thi
-[]  --> Component render lần đầu tiên ---> callback sẽ được thực thi
-[bien1, bien2] --> Khi state1 hoặc state2 thay đổi ---> callback sẽ chạy


Thứ tự chạy useEffect

1. State thay đổi
2. Components re-render
3. UI Update
4. Cleanup chạy ( Nếu có)
5. Callback chạy

Các trường hợp cleanup

1. tỉmer: setTimeout, setInterval
2. event listener
3. storage: localStorage, sessionStorage
4. biến, state

Vòng đời component

Mounting: Quá trình component được gửi vào DOM
Updating: QUá trình component cập nhật dữ liệu

Unmounting: QUá trình component bị loại khỏi DOM


*/
