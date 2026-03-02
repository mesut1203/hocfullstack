import React from "react";

export default function Button({ onClick }) {
    // const handleClick = () => {
    //     console.log("CLick me 2");
    //     onClick("Click me 2 vừa click");
    // };
    return (
        <div>
            <button onClick={onClick}>Click me 2</button>
        </div>
    );
}
