import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/ContextProvider";
import { getProfile } from "../../utils/utils";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { auth } = useContext(AppContext);
    console.log(auth);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "https://api.escuelajs.co/api/v1/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            }
        );
        if (!response.ok) {
            setMessage("Email không chính xác");
            return;
        }
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        // Lưu thông tin vào store
        const user = await getProfile();
        auth.setUser(user);
        auth.setAuthenticated(true);
        auth.setLoading(false);

        navigate("/admin");
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email..."
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password..."
                        name="password"
                        required
                        onChange={handleChange}
                    />
                </div>
                <button>Login</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
