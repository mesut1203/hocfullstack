// So sánh object(So sánh địa chỉ)
// 1. Shallow compare
// 2. Deep compare
// const a = {
//     name: "Hoàng An",
//     age: 32,
//     meta: {
//         value: "Unicode",
//     },
// };
// const b = {
//     name: "Hoàng An",
//     age: 32,
//     meta: {
//         value: "Unicode",
//     },
// };

// // Các bước thực hiện
// // 1. So sánh số lượng key của 2 object xem có bằng nhau không ---> Nếu không bằng nhau thì cả 2 obj khác nhau
// // 2. SO sánh từng giá trị của key trong object thứ nhất với giá trị từng key trong object thứ 2

// // B2: So sánh obj con dùng đệ quy
// const isObject = (obj) => {
//     // Kiểm tra 1 biến có phải obj không?
//     // -typeof = object
//     // -Không phải mảng
//     //-Khoong phải null
//     return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// };

// const compareObject = (obj1, obj2) => {
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for (let key in obj1) {
//         const value1 = obj1[key];
//         // console.log(value1);
//         const value2 = obj2[key];
//         if (isObject(value1) && isObject(value2)) {
//             return compareObject(value1, value2);
//         }

//         if (value1 !== value2) {
//             return false;
//         }
//     }
//     // if (compareObject(obj1, obj2)) {
//     //     console.log("2 obj giống nhau");
//     // } else {
//     //     console.log("2 obj khác nhau");
//     // }
//     return true;
// };

// const check = compareObject(a, b);
// console.log(check);

// Copy object: Copy obj cũ sang 1 địa chỉ mới
// 2. Shallow copy
// 2. Deep copy

const a = {
    name: "Hoàng An",
    email: "abc@gmail.com",
    meta: {
        value: "Javascript",
    },
};
// const b = a;
// const b = { ...a }; //spread operator(shallow copy)
// const b = Object.assign({}, a); //shallow copy

const json = JSON.stringify(a);
const b = JSON.parse(json);
b.name = "Hoàng An Unicode";
b.meta.value = "ReactJS";

console.log(a);
console.log(b);

// tham chiếu thì gán trực tiếp địa chỉ giống địa chỉ cũ.
