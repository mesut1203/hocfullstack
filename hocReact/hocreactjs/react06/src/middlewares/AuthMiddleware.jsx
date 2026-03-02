import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/ContextProvider";

export default function AuthMiddleware() {
    const { auth } = useContext(AppContext);
    if (auth.isLoading) {
        return;
    }
    console.log(auth);

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
