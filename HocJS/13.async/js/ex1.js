/*
Đồng bộ là gì?
- Chạy các lệnh tuần tự
- Lệnh sau phải chờ lệnh trước hoàn toàn mói có thể tiếp tục

Bất đồng bộ?
- Chạy tuần tự các lẹnh
- Lệnh sau không đợi lệnh trước hoàn thành

Trong JS tồn tại cả 2


*/

// Ví dụ đồng bộ
// alert("Xin chào anh em"); // Đồng bộ
// console.log("Ok chưa");

// // Ví dụ bất đồng bộ
// setTimeout(() => {
//     console.log("Xin chào anh em");
// }, 2000);
// console.log("Ok chưa");

/*
Bất đồng bộ
-setTimeout
-setInterval
-fetch
-DOM Event

Xử lý bất đồng bộ

-Biến từ bất đồng bộ thành đồng bộ
-Ví dụ: gọi API -> Chờ API phản hồi --> Cập nhật DOM
-3 cách xử lý:
+ Callback
+Promise
+Async/ Await
*/

// const getUsers = (callback) => {
//     setTimeout(() => {
//         const users = ["User 1", "User 2", "User 3", "User 4"];
//         // console.log(users);
//         if (typeof callback === "function") {
//             callback(users);
//         }
//     }, 2000);
// };

// const getProduct = (callback) => {
//     setTimeout(() => {
//         const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
//         // console.log(users);
//         if (typeof callback === "function") {
//             callback(products);
//         }
//     }, 1000);
// };

// getUsers((users) => {
//     // Cập nhật DOM
//     const html = users.map((user) => `<h2>${user}</h2>`).join("");
//     document.body.innerHTML = html;

//     getProduct((products) => {
//         const html = products.map((product) => `<h2>${product}</h2>`).join("");
//         document.body.innerHTML += html;
//     });
// });

// Callback Hell --> Khó bảo trì

// ES6 --> Promise
// -Callback + Chaining
// Chaining: obj.method1().method2().method();
// trạng thái promise:
// -pending: Chờ xử lý
// - fulfilled: Đã xử lý thành công
// - rejected: Đã xử lý thất bại

// Bước 1: Tạo object Promise
const userPromise = new Promise((resolve, reject) => {
    // resolve là 1 hàm
    // resolve sẽ được gọi khi mong muốn kết quả trả về là thành công
    setTimeout(() => {
        const users = ["User 1", "User 2", "User 3", "User 4"];
        // resolve(users); // Mong muốn kết quả trả về thành công --> Đưa users vào Promise thông qua hàm resolve

        reject("Có lỗi User"); //Giả sử quá trình xử lý bị lỗi
    }, 2000);
});

const productPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
        // resolve(products);
        reject("Lỗi product");
    }, 1000);
});

// Bước 2: Gọi object Promise để lấy kết quả
userPromise
    .then((users) => {
        const html = users.map((user) => `<h2>${user}</h2>`).join("");
        document.body.innerHTML += html;
        console.log(users);
        return productPromise;
    })
    .catch((error) => {
        document.body.innerHTML += `<h2>${error}</h2>`;
        return productPromise;
    })
    .then((products) => {
        // console.log(product);
        const html = products.map((product) => `<h2>${product}</h2>`).join("");
        document.body.innerHTML += html;
    })

    .catch((error) => {
        document.body.innerHTML += `<h2>${error}</h2>`;
    })
    .finally(() => {
        console.log("Finally");
    });
// Hàm then cũng là hàm promise, có quyên .then thêm 1 lần nữa
