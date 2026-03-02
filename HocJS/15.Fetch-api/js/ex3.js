// Authentication: Xác thực danh tính
/*
-Đăng nhập ---> Server kiểm tra tt (email, password)
-Trả về token
- Front-end lưu token ( Bộ nhớ trình duyệt : localStorage, sessionStorage, cookie)
*/

// Authorization: Ủy quyền
/*
- Khi cần lấy dữ liệu trên Server, tuy nhiên dữ liệu bị private 
- Front-end sẽ gửi token lấy được ở bước Authentication --> Server kiểm tra xem có hợp lệ không>
* Hợp lệ: Trả về dữ liệu cần
* Không hợp lệ: ---> Trả về thông báo lỗi

Token tạo bằng cách nào?
- JWT ( JSON Web Token)
- Thuật toán khác 

Làm sao để bảo vệ token
-Hạ thời gian sống token xuống thấp --> Ảnh hưởng đến trải nghiệm
- Giải pháp tiếp theo: Sinh ra token mới : refreshToken --> Dùng để cấp lại accessToken mới
*/

const root = document.querySelector("#root");

const getProfile = async () => {
    const response = await fetchWrapper(
        `https://api.escuelajs.co/api/v1/auth/profile`
    );

    // if (!response.ok) {
    //     const newToken = await refreshToken();
    //     if (newToken) {
    //         saveToken(newToken);
    //         getProfile();
    //     } else {
    //         localStorage.removeItem("accessToken");
    //         localStorage.removeItem("refreshToken");
    //         render();
    //     }
    //     return;
    // }
    const data = await response.json();
    if (data && data.name) {
        const namProfile = document.querySelector(".name-profile");
        namProfile.innerText = data.name;
    }
};

const render = () => {
    const loginForm = `
    <form id="login-form" action="">
            <div class="">
                <label for="">Email</label>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div class="">
                <label for="">Password</label>
                <input type="password" name="password" placeholder="password" />
            </div>
            <button>Login</button>
        </form>`;
    const welcome = `
    <h1> Welcome to HTML</h1>
    <span>Hello:<span class ="name-profile"></span></span>
    <button class ="logout-btn">Logout</button>
    `;

    const { accessToken } = getToken();
    if (accessToken) {
        root.innerHTML = welcome;
        getProfile();
        const logoutBtn = document.querySelector(".logout-btn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            render();
        });
    } else {
        root.innerHTML = loginForm;
        const form = document.querySelector("#login-form");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const email = formData.get("email");
                const password = formData.get("password");
                handleLogin(email, password);
            });
        }
    }
};

render();

const handleLogin = async (email, password) => {
    const response = await fetchWrapper(
        `https://api.escuelajs.co/api/v1/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }
    );
    if (!response.ok) {
        alert("dff");
        return;
    }

    const data = await response.json();
    saveToken(data);
    render();
};

// Fetch Wrapper

console.log(fetchWrapper);

getProfile();
getProfile();
