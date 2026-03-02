import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context/ContextProvider";

export default function AdminLayout() {
    const { auth } = useContext(AppContext);
    console.log(auth);

    return (
        <div>
            <aside>
                {auth.isLoading ? (
                    "Loading.."
                ) : (
                    <div>
                        <span>Chào bạn: {auth.user.name}</span>
                        <button>Logout</button>
                    </div>
                )}

                <h3>Menu</h3>
                <ul>
                    <li>
                        <a href="/admin">Dashboard</a>
                    </li>
                </ul>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
