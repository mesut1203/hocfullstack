import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(AppContext);
    const changeTheme = (value) => {
        setTheme(value);
    };
    return (
        <div>
            <button
                onClick={() => changeTheme("light")}
                className={theme === "light" ? "active" : ""}
            >
                Light
            </button>
            <button
                onClick={() => changeTheme("light")}
                className={theme === "dark" ? "active" : ""}
            >
                Dark
            </button>
        </div>
    );
}
