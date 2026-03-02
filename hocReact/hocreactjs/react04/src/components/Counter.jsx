import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const myObj = useRef(0);
    const inputRef = useRef();
    const items = ["Item1", "Item2", "Item3"];
    const itemsRef = useRef([]);
    const handleIncrement = () => {
        setCount(count + 1);
        myObj.current++;
    };
    useEffect(() => {
        inputRef.current.focus();
        console.log(itemsRef);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <input type="text" ref={inputRef} />
            <h2>myobj: {myObj.current}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <ul>
                {items.map((item, index) => (
                    <li
                        ref={(el) => {
                            itemsRef.current[index] = el;
                        }}
                        key={index}
                    >
                        {index}
                    </li>
                ))}
            </ul>
        </div>
    );
}
