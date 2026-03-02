import React from "react";
import Counter from "./components/Counter";
// import Input from "./components/input";
import Form from "./components/Form";
import Users from "./components/Users";

export default function App() {
    return (
        <div>
            {/* Counter */}
            {/* <Input /> */}
            {/* <Form /> */}
            <Users />
        </div>
    );
}

/*
State: Quản lý dữ liệu trong nội bộ component
Trong function component, muốn làm việc state thông qua React Hook (Hàm đặc biệt)

- Sử dụng thông qua Hook useState
- Đối tượng bất biến (Không thay đổi trực tiếp )
- Muốn thay đổi state thông qua hàm set do Hook cung cấp
- Khi state bị thay đổi --> Cả component sẽ bị gọi lại (re-render)

Cú pháp:
const [tenstate, hamSetState] = useState(giatrikhoitao)


*/
