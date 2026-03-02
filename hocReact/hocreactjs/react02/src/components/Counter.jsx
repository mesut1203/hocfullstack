import React from "react";

import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    console.log(count);
    const handleIncrement = () => {
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
    };
    const handleState = () => {
        setCount((preCount) => {
            const newCount = preCount - 1;
            return newCount >= 0 ? newCount : 0;
        });
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleState}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}
