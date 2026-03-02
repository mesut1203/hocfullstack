import React from "react";
import { memo } from "react";

function Listitems() {
    console.log("Listitems render");

    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    );
}

const ListItemMemo = memo(Listitems);
export default ListItemMemo;

// Memo: Kiểm tra xem props có thay đổi hay không? Nếu không thay đổi hoặc không có  --> Chặn re-render component con
