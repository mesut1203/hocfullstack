// Object array

// const { use } = require("react");

// Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các thuộc tính, phần tử va trả về các biến riêng biệt

// const user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     age: 33,
//     address: "Hà Nội",
//     position: "Teacher",
// };
// // let name = user.name;
// // let email = user.email;
// let { name: myName, email, age = 32, ...rest } = user;
// console.log(myName, email, age);
// console.log(age);
// console.log(rest);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội", "Teacher"];
// // const [myName, email, , address, position] = users;
// // console.log(myName, email, address, position);
// const { myName, email, ...rest } = users;
// console.log(myName, email);
// console.log(rest);

// Spread: Rải các key , phần tử trong object, array ra ngoài
// const job = {
//     position: "Teacher",
//     salary: "2000",
// };

// const info = {
//     address: "Hà Nội",
//     country: "Vietnam",
// };

// const user = {
//     name: "Đình Khải",
//     email: "abc@gmail.com",
//     ...job,
//     ...info,
// };
// console.log(user);

// const users = ["Khải", "abc@gmail.com", "Mentor"];
// const jobs = ["Khải", "abc@gmail.com", ...users];
// console.log(jobs);

// Lưu ý: Spread
// - CHỉ dải được 1 cấp
// - Trước khi rải phải đảm bảo ở ngoài là array hoặc object

const users = Object.freeze(["User 1", "User 2", "User 3"]);
// users.push("User 4");
// console.log(users);
const newUser = [...users, "User 4"];
console.log(newUser);
