const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return {
        accessToken,
        refreshToken,
    };
};
const saveToken = (token) => {
    localStorage.setItem("accessToken", token.access_token);
    localStorage.setItem("refreshToken", token.refresh_token);
};

const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

const refreshToken = async () => {
    const { refreshToken } = getToken();
    if (refreshToken) {
        const response = await fetch(
            `https://api.escuelajs.co/api/v1/auth/refresh-token`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refreshToken }),
            }
        );

        // Kiểm tra response.ok trả true false
        // Nếu false trả về đăng xuất
        if (!response.ok) {
            return false;
        }
        const newToken = await response.json();
        return newToken;
    }
};

let isRetry = null;

const fetchWrapper = async (url, option = {}) => {
    const { accessToken } = getToken();
    if (accessToken) {
        option.headers = {
            ...(option.headers = {
                Authorization: `Bearer ${accessToken}`,
            }),
        };
    }
    const response = await fetch(url, option);

    if (response.status === 401) {
        // Xu ly refresh
        if (!isRetry) {
            isRetry = refreshToken();
        }
        const newToken = await isRetry;
        if (!newToken) {
            // Logout
            removeToken();
            window.location.reload(); //Reload trang
        } else {
            //  Luu vao localStorage
            saveToken(newToken);
            return fetchWrapper(url, option);
        }
    }

    return response;
};
