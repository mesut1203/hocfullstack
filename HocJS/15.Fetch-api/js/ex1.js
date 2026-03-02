//
/*
Cấu trúc API:
+ URL
+ Method: GET, POST, PATCH, DELETE
+ Body: Dữ liệu gửi lên server
+ Headers: Thông tin đi kèm gửi lên server

*/
// fetch(url, options)

// const { use } = require("react");

const serverApi = `http://localhost:3000`;
// fetch(`${serverApi}/users`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
const LIMIT = 3;
let currentPage = 1;
let order = "asc";
let keyword = "";

const getUsers = async () => {
    let url = `${serverApi}/users?_limit=${LIMIT}&_page=${currentPage}&_sort=id&_order=${order}`;
    if (keyword) {
        url += `&q=${keyword}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    const total = response.headers.get("x-total-count");
    // console.log(total);

    renderUsers(data);
    renderPagination(total);
};

const handleSortUsers = () => {
    const lastBtn = document.querySelector(".last-btn");
    const oldBtn = document.querySelector(".old-btn");
    lastBtn.addEventListener("click", () => {
        order = "desc";
        getUsers();
    });
    oldBtn.addEventListener("click", () => {
        order = "asc";
        getUsers();
    });
};
handleSortUsers();

const renderPagination = (total) => {
    console.log(total);
    // Tính tổng số trang
    const maxPage = Math.ceil(total / LIMIT);
    const pagination = document.querySelector(".pagination");
    let html = "";
    if (currentPage > 1) {
        html += "<button class ='prev'>Prev</button>";
    }

    for (let i = 1; i <= maxPage; i++) {
        html += `<button data-page ="${i}" class="${
            i === currentPage ? "active" : ""
        } ">${i}</button>`;
    }
    if (currentPage < maxPage) {
        html += "<button class='next'>Next</button>";
    }

    pagination.innerHTML = html;

    const buttonList = pagination.querySelectorAll("button");
    buttonList.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("prev")) {
                currentPage--;
                getUsers();
                return;
            }
            if (btn.classList.contains("next")) {
                currentPage++;
                getUsers();
                return;
            }

            const page = btn.dataset.page;
            // console.log(page);
            currentPage = +page;

            getUsers();
        });
    });
};

const renderUsers = (users) => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = users
        .map((user, index) => {
            return `<tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td >
                        <button class="update-btn" data-id=${
                            user.id
                        }>Sửa</button>
                    </td>
                    <td>
                        <button class="delete-btn" data-id="${
                            user.id
                        }">Xóa</button>
                    </td>
                </tr>`;
        })
        .join("");
    const usersUpdate = document.querySelectorAll(".update-btn");
    usersUpdate.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            console.log(id);
            getUser(id);
        });
    });
    const deleteBtnList = document.querySelectorAll(".delete-btn");
    deleteBtnList.forEach((btn) => {
        btn.addEventListener("click", async () => {
            if (confirm("Bạn có chắc chắn xóa ?")) {
                const id = btn.dataset.id;
                const deleteStatus = await deleteUser(id);
                if (deleteStatus) {
                    getUsers(); //làm mới table
                }
            }
        });
    });
};

getUsers();

const getUser = async (id) => {
    const response = await fetch(`${serverApi}/users/${id}`);
    const data = await response.json();
    renderDataToForm(data);
};

const renderDataToForm = (data) => {
    const form = document.querySelector("form");
    const nameInput = form.querySelector(".name");
    const emailInput = form.querySelector(".email");
    const addressInput = form.querySelector(".address");
    const h1 = form.querySelector("h1");
    const btn = form.querySelector("button");
    form.dataset.id = data.id;

    h1.innerText = `Cập nhật người dùng`;
    btn.innerText = `Cập nhật`;

    if (nameInput) {
        nameInput.value = data.name;
    }
    if (emailInput) {
        emailInput.value = data.email;
    }
    if (addressInput) {
        addressInput.value = data.address;
    }
};

const submitForm = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nameInput = form.querySelector(".name");
        const emailInput = form.querySelector(".email");
        const addressInput = form.querySelector(".address");
        const h1 = form.querySelector("h1");
        const p = form.querySelector("p");
        const btn = form.querySelector("button");
        const name = nameInput.value;
        const email = emailInput.value;
        const address = addressInput.value;
        const id = form.dataset.id;

        if (id) {
            // console.log(name, email, address);
            // gọi api update
            // - id của user cần update
            // - data cần update
            const updateStatus = await updateUser(id, {
                name,
                email,
                address,
            });
            if (updateStatus) {
                // Cập nhật thành công
                getUsers(); //làm mới table
                form.reset(); //reset dữ liệu
                h1.innerText = "Thêm người dùng";
                btn.innerText = "Thêm";
                delete form.dataset.id;
            }
        } else {
            // Gọi API kiểm tra email
            const checkEmail = await checkEmailExist(email);
            if (checkEmail) {
                // Thông báo lỗi
                // console.log("Email đã tồn tại");
                p.innerHTML = `Email đã tồn tại`;
            } else {
                // Gọi API Thêm
                // console.log("Thêm");
                const addStatus = await addUser({
                    name,
                    email,
                    address,
                });
                if (addStatus) {
                    getUsers();
                    form.reset();
                }
            }
        }
    });
};
submitForm();

const checkEmailExist = async (email) => {
    const response = await fetch(`${serverApi}/users?email=${email}`);
    const data = await response.json();
    // Nếu mảng có phần tử ==> Email đã tồn tại
    return data.length > 0;
};
const addUser = async (data) => {
    const response = await fetch(`${serverApi}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.ok;
};

const updateUser = async (id, data) => {
    const response = await fetch(`${serverApi}/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.ok;
};

const deleteUser = async (id) => {
    const response = await fetch(`${serverApi}/users/${id}`, {
        method: "DELETE",
    });
    return response.ok;
};

// Kỹ thuật debounce
// - Dựa vào thời gian nghi
// - Thường từ 300 -> 500ms

const debounce = (callback, timeout = 500) => {
    // delay callback
    let id;
    return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => {
            callback(...args);
        }, timeout);
    };
};

const searchUsers = () => {
    const searchInput = document.querySelector(".search");
    searchInput.addEventListener(
        "keyup",
        debounce(() => {
            keyword = searchInput.value;
            currentPage = 1;
            getUsers();
        })
    );
};
searchUsers();
