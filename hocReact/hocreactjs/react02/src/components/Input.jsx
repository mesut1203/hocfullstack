import React, { useState } from "react";

export default function Input() {
    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="Vui lòng nhập ..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <h4>Bạn vừa nhập: {value}</h4>
        </div>
    );
}
