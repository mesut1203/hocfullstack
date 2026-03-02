import React from "react";

export const debounce = (callback, timeout = 500) => {
    let id;
    return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => {
            callback(...args);
        }, timeout);
    };
};

export const getProfile = async () => {
    if (localStorage.getItem("access_token")) {
        const access_token = localStorage.getItem("access_token");
        const response = await fetch(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        return response.json();
    }
};
