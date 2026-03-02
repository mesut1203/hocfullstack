import React from "react";

import Button from "./components/button";

export default function App() {
    // Event Handle
    const handleClick = (e) => {
        console.log("Click me");
        console.log(e);
    };
    // Event handler co tham số
    const users = ["User 1", "User 2", "User 3"];
    const handleRemove = (index) => {
        console.log(index);
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const handlClick2 = () => {
        console.log("Click me 2");
    };
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            {users.map((item, index) => (
                <h3 key={index}>
                    {item}{" "}
                    <button onClick={() => handleRemove(index)}>&times;</button>
                </h3>
            ))}
            <input
                type="text"
                placeholder="Vui lòng nhập..."
                onInput={handleChange}
            />
            <div>
                <select defaultValue={"2"}>
                    <option value="">Chọn tỉnh/ thành phố</option>
                    <option value="1">Hà Nội</option>
                    <option value="2">TP.HCM</option>
                    <option value="3">Đà Nẵng</option>
                </select>
            </div>
            <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox" defaultChecked={false} />{" "}
                Checkbox
            </label>
            <Button onClick={handlClick2} />
        </div>
    );
}
