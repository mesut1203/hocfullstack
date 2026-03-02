import React, { useState } from "react";
import { use } from "react";

export const AppContext = React.createContext();

export default function ContextProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    return (
        <AppContext.Provider
            value={{
                auth: {
                    isAuthenticated,
                    user,
                    isLoading,
                    setAuthenticated,
                    setUser,
                    setLoading,
                },
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
