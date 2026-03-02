import React, { useState } from "react";
import { use } from "react";

let initialUser = [];

export default function Form({ onSubmit, users }) {
    console.log(users);

    // Tạo state để chứa dữ liệu các ô input
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setError] = useState({
        name: "",
        password: "",
    });

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form);
        const errorBag = {};
        const { email, password } = form;
        if (!email) {
            errorBag.name = "Vui lòng nhập email";
        }
        if (!password) {
            errorBag.password = "Vui lòng nhập password";
        }
        setError(errorBag);

        if (!Object.keys(errorBag).length) {
            onSubmit(form);
        }

        // if (!Object.keys(errorBag).length) {
        //     if (update === null) {
        //         // Thêm mới
        //         setUsers([...users, form]);
        //     } else {
        //         setUsers(
        //             users.map((user, index) => {
        //                 if (index === update) {
        //                     return form;
        //                 }
        //                 return user;
        //             })
        //         );
        //         setUpdate(null);
        //     }
    };

    // So sánh initialUser với prop
    if (initialUser.length !== users.length) {
        setForm({
            email: "",
            password: "",
        });
        initialUser = users;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                {errors && <span style={{ color: "red" }}>{errors.name}</span>}

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                {errors && (
                    <span style={{ color: "red" }}>{errors.password}</span>
                )}

                <button type="submit">
                    {/* {update !== null ? "Update" : "Add"} */}
                    Submit
                </button>
            </form>
        </div>
        // Tạo 1 state mảng khi submit add email password mảng rồi map mảng ra hiển thị list
    );
}
