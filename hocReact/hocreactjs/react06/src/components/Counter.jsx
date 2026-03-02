import { useState } from "react";
import Listitems from "./Listitems";

export default function Counter() {
    const [count, setCount] = useState(0);
    console.log("COunter render");

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Listitems count={1} />
        </div>
    );
}
