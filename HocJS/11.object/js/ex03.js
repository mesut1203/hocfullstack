// prototype: OBJ có sẵn trong JS để giải quyết bài toán kế thừa
// khi tao obj ngoặc nhọn {} ---> Hàm bọc có tên Object
//Instance--> Constructor (Array, String, Number) ---> Object Constructor ( cụ tổ)

// Object.prototype.message = "Học JS rất khó";

// const a = {
//     name: "Hoàng An",
//     email: "abc@gma.com",
// };

// const b = {
//     age: 32,
//     address: "Hà Nội",
// };

// console.log(a);
// console.log(b);

// console.log(a.message);
// console.log(b.message);

// console.log(String.prototype);

// const fullname = "Hoàng An";
// console.log(fullname.message);

// Từ khóa this (context)

// const user = {
//     name: "Hoàng An",
//     email: "abc@gmail.com",
//     getInfo: function () {
//         // console.log(this.email);
//         return {
//             age: 32,
//             getAge: function () {
//                 console.log(this.age);
//             },
//             getEmail: () => {
//                 console.log(this.email);
//             },
//         };
//     },
// };
// user.getInfo().getAge();
// user.getInfo().getEmail();

// const showMessage = function () {
//     console.log(this);
// };
// showMessage();

// const users = ["User 1", "User 2", "User 3"];
// Array.prototype.latest = function () {
//     console.log(this);
//     // This chính là instance mà gọi phương thức prototype (đảm bảo là prototype)
// };
// users.latest();

// bind, call, apply ---> 3 phương thức của function (Bới vì function cũng là object)
const a = {
    name: "Hoàng An",
    getInfo: function () {
        console.log(this);
    },
    setEmail: function (value) {
        this.email = value;
    },

    something: function (param1, param2, param3) {
        console.log(this);
        console.log(param1, param2, param3);
    },
};
const b = {
    email: "abc@gmail.com",
};

// bind: Thay đổi context (this) của hàm
// a.getInfo.bind("A")();

// call
// - Thay đổi context của hàm
// - gọi hàm và truyền tham số (Nếu có)
// a.setEmail.call(b, "abc@gmail.com");
// console.log(b);

// apply:
// - Gọi hàm và truyền tham số dưới dạng mảng

const args = ["Value 1", "Value 2", "Value 3"];
a.something.apply(b, args);
