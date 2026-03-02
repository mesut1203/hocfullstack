import { useNavigate } from "react-router-dom";

export const useUser = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        navigate("/login");
    };
    return { logout };
};
