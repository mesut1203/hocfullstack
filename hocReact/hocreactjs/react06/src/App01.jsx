import React, { use } from "react";
import Title from "./components/Title";
import Content from "./hoc/Content";
import Color from "./components/Color";
import Listitems from "./components/Listitems";
import Counter from "./components/Counter";
import Input from "./components/Input";
import { useRef, useEffect } from "react";

export default function App() {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef);
    }, []);
    return (
        <div>
            {/* <Title title="Học React không khó" />
            <Content />
            <Color>
                <Listitems />
            </Color> */}
            {/* <Counter /> */}
            {/* <Input ref={inputRef} /> */}
        </div>
    );
}

// HOC = Higher Order Component
//  - Component cấp cao hơn
// - Components bọc components hiện tại
//  - Tác dụng: Thêm logic cho bất kì component nào mà k sửa lại nó

// React có sẵn các HOC: forwardRef, memo

// Custom hook : Tạo hook mới theo logic riêng, trong hook đó được sử dụng các hook khác

// Tác dụng:
// - Kế thừa logic
//- Dễ dàng sử dụng hook khác .các component, khác không có giao diện

// cách tạo: tạo 1 hàm bắt đầu từ khóa use
