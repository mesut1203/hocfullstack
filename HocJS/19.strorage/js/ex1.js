/*
localStorage, sessionStorage

 - Chỉ hoạt động ở client
 - Dung lượng lưu trữ khoảng 4-5mb
 - Chỉ lưu trữ text
 - Phân biệt theo origin = protocol + domain + port
 -Không phân biệt theo path
 -Không thể share data tới subdomain

 localStorage: Thời gian lưu trữ không giới hạn
 - localStorage.getItem()
 - localStorage.setItem(key, value)
 - localStorage.removeItem(key)
 - 

 sessionStorage: Chỉ hoạt động trong phiên trình duyệt ( Tắt trình duyệt tự xóa)



 Cookie: Mẩu tin truyền từ client sang server (Lưu trữ ở client)
 - Dung lượng lưu trữ thấp: vài kB
 - Đọc được cả trên server và client
 - Phân biệt theo path
 - Chia sẻ tới các subdomain
 - Bảo mật: An toàn
 + httpOnly --> Nếu được gắn http only vào cookie --> Chỉ server mới đọc được
 + Secure --> Chỉ hoạt động https
 - Server có thể set cookie bằng cách trả về 1 header có tên Set-Cookie
 - Có thời gian sống rõ ràng:
 +Session Cookie: Sống trong phiên trình duyệt
 +Persistent Cookie: Sống trong thời chỉ định

 Cách set, get, delete cookie ---> Thông qua object: document.cookie

 
*/

// document.cookie = "name=hoangan.web;path=/;max-age=7200";
// document.cookie = "email=hoangan@unicode.vn;path=/;max-age=7200";
// document.cookie = "age=33;path=/;max-age=7200";

// document.cookie =
//     "name=hoangan.web;path=/;path=/expires=" + new Date().toUTCString();

// console.log(document.cookie);

// const getCookie = (key) => {
//     const cookies = document.cookie.split(";");
//     const cookiesMap = Object.fromEntries(
//         cookies.map((cookie) => {
//             return cookie.trim().split("=");
//         })
//     );
//     return cookiesMap[key];
// };
// console.log(getCookie("email"));
