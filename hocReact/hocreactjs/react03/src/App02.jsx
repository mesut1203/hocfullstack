import React, { useEffect, useState } from "react";

export default function App() {
    const [isShow, setShow] = useState(0);
    const data = [
        {
            id: 1,
            title: "Title 1",
            content: "Content 1",
        },
        {
            id: 2,
            title: "Title 2",
            content: "Content 2",
        },
        {
            id: 3,
            title: "Title 3",
            content: "Content 3",
        },
    ];

    const handleToggle = (itemId) => {
        if (itemId === isShow) {
            setShow(!isShow ? itemId : 0);
        } else {
            setShow(itemId);
        }
    };
    

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h3>
                        {item.title}{" "}
                        <button onClick={() => handleToggle(item.id)}>
                            Show
                        </button>
                    </h3>

                    {item.id === isShow && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    );
}
