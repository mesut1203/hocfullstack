import React, { useContext, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import UserList from "./pages/admin/users/Users";
import UserCreate from "./pages/admin/users/Create";
import UserEdit from "./pages/admin/users/Edit";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Login from "./pages/auth/Login";
import { getProfile } from "./utils/utils";

export default function App() {
    return (
        <div>
            <main>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/gioi-thieu" element={<About />} />
                        <Route path="/san-pham" element={<Products />} />
                        <Route
                            path="/san-pham/:id"
                            element={<ProductDetail />}
                        />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route element={<AuthMiddleware />}>
                        <Route element={<AdminLayout />}>
                            <Route path="/admin">
                                <Route path="" element={<Dashboard />} />
                                <Route path="users">
                                    <Route path="" element={<UserList />} />
                                    <Route
                                        path="create"
                                        element={<UserCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<UserEdit />}
                                    />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </main>
        </div>
    );
}
