import React, { useState } from "react";
import Form from "./Form";
import UserList from "./UserList";

export default function Users() {
    // state mảng người dùng
    const [users, setUsers] = useState([]);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (form) => {
        setForm(form);
        console.log(form);

        if (update === null) {
            // Thêm mới
            setUsers([...users, form]);
        } else {
            setUsers(
                users.map((user, index) => {
                    if (index === update) {
                        return form;
                    }
                    return user;
                })
            );
            setUpdate(null);
        }

        setForm({
            email: "",
            password: "",
        });
    };
    console.log(form);

    // state update người dùng
    const [update, setUpdate] = useState(null);
    // Xóa
    const handleDelete = (index) => {
        setUsers(users.filter((user, i) => i !== index));
    };

    // Cập nhật
    const handleEdit = (index) => {
        // console.log(index);
        // const user = users[index];
        // setForm({ ...form, ...user });
        // setUpdate(index);
    };

    // Cập nhật lên giao diện
    return (
        <div>
            <Form onSubmit={handleSubmit} formData={form} users={users} />
            <UserList
                users={users}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}

/*
App
  User
    -Form
    -UserList


*/
