import React, { useContext } from "react";
import Nav from "../components/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../context/ContextProvider";
import { useUser } from "../hooks/use-user";

export default function MainLayout() {
    const { auth } = useContext(AppContext);

    const navigate = useNavigate();
    const { logout } = useUser();
    return (
        <div>
            {auth.isLoading ? (
                "Loading"
            ) : (
                <div>
                    {auth.isAuthenticated ? (
                        <>
                            <span>Chào bạn : {auth.user.name}</span>
                            <button onClick={logout}>Đăng xuất</button>
                        </>
                    ) : (
                        <button onClick={() => navigate("/login")}>
                            Đăng nhập
                        </button>
                    )}
                </div>
            )}
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
