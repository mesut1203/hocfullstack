import React, { useContext, useEffect } from "react";
import { AppContext } from "./ContextProvider";
import { getProfile } from "../utils/utils";

export default function AuthProvider({ children }) {
    const { auth } = useContext(AppContext);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                auth.setLoading(true);
                const user = await getProfile();
                if (!user) {
                    throw new Error("User not found");
                }

                auth.setUser(user);
                auth.setAuthenticated(true);
            } catch {
                auth.setUser({});
                auth.setAuthenticated(false);
            } finally {
                auth.setLoading(false);
            }
        };
        fetchUserData();
        console.log("auth provider");
    }, []);
    return children;
}
