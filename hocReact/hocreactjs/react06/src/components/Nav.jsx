import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gioi-thieu">Home</NavLink>
            <NavLink to= "/san-pham">Product</NavLink>
        </div>
    );
}
