import React from "react";
import { forwardRef } from "react";

function Input(props, ref) {
    return (
        <div>
            <input type="text" placeholder="Vui lòng nhập..." ref={ref} />
        </div>
    );
}

const InputWithRef = forwardRef(Input);
export default InputWithRef;

// Ở phiên bản mới nhất ----> Có thể truyền trực tiếp ref qua component bằng cách dùng props
// Ỏ phiên bản cũ hơn ----> Bọc forwardRef
