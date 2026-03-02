// function constructor: Hàm tạo dùng để định nghĩa cấu trúc của 1 đối tượng( Bảng thiết kế)
// Trong constructor
/*
Thuộc tính non-static, Phương thức non-static --> Phụ thuộc vào instance (Phải khởi tạo từ khóa new)
Thuộc tính static, phương thưc --> Không bị phụ thuộc bởi instance, truy cập trực tiếp qua constructor


Từ khóa this trong pthuc non-static chính là instance
từ khóa this trong pthuc static chính là constructor

Lưu ý: Phương thức và thuộc tính được tạo ra bằng propotype cũng là non-static

*/
// const User = function (name, email) {
//     // Thuộc tính
//     this.name = name;
//     this.email = email;
//     this.text = "Hà Nội";
//     // Phương thức
//     this.getName = function () {
//         return this.name;
//     };
//     this.getEmail = function () {
//         return this.email;
//     };
// };
// PascalCase

// User.message = "Hello anh em";
// User.getMessage = function () {
//     // return "Chào ";
//     const instance = new this();
//     return instance.text;
// };

// console.log(User.message);
// console.log(User.getMessage());

// //  Khởi tạo instance từ constructor
// const user1 = new User("User1", "ab@gmail.com");
// console.log(user1);

// const user2 = new User("User2", "ab@gmail.com");
// console.log(user2);

// Làm thế nào để kiểm tra 1 instance thuộc constructor nào
// const user1 = new User("User1", "ab@gmail.com");
// if (user1 instanceof User) {
//     console.log("User được tạo từ User");
// }

// const users = ["User 1", "User 2"];
// if (users instanceof Array) {
//     console.log("Ok");
// }

// lấy tên constructor của 1 instance
// const user1 = new User("User1", "ab@gmail.com");
// console.log(user1.constructor.name);
