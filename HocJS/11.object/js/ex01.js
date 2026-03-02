// 1.Object Literal ( Đối tượng nguyên bản)
// 2. Function Constructor (Hàm tạo)
// 3. Class

// Khởi tạo đối tượng
// const myObj = {};
const myObj = {
    // key1: value1;
    // key2:value 2;
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    status: false,
    age: 32,
    shipping_address: "Hafd= Nội",
    shippingAddress: "Hcm",
};

// Thêm key mới vào object
// myObj.address = "hà nội";
// myObj["address"] = "Hà Nôi";

// Cập nhật lại giá trị của 1 key trong object
// myObj.email = "contact@unic.com";

// Xóa key
// delete myObj.age;

// Truy cập
// const value = myObj.email;
// console.log(value);

console.log(myObj);

// Duyệt tất cả key trong object
// for (let key in myObj) {
//     const value = myObj[key];
//     console.log(key, value);
// }

// console.log(Object.keys(myObj));

// Object.keys(myObj).forEach((key) => {
//     const value = myObj[key];
//     console.log(key, value);
// });

const error = {
    email: "Vui lòng nhập địa chỉ email",
};

// Viết chương trình kiểm tra có dữ liệu không
// let keyStatus = true;
// for (let key in error) {
//     keyStatus = false;
//     break;
// }
// if (keyStatus) {
//     console.log(`error không có dữ liệu`);
// } else {
//     console.log(`có`);
// }

// cách 2
// if (Object.keys(error).length) {
//     console.log("Có");
// } else {
//     console.log("Không");
// }

// const data = {
//     name: "Hoàng An",
//     email: "abc@gmail.com",
//     status: null,
//     age: null,
// };
// // Viết chương trình xóa key có giá trị null trong object

// for (let key in data) {
//     const value = data[key];
//     if (value === null) {
//         delete data[key];
//     }
// }

// console.log(data);

// Object.values(): Trả về mảng chứa value
// console.log(Object.values(myObj));

// object.entries(): Trả về 1 mảng 2 chiều chứa cả key value
// console.log(Object.entries(myObj));

// Object.fromEntries(): chuyển từ mảng 2 chiều (entries) thành object cặp key value
// const data = [
//     ["name", "Hoàng An"],
//     ["email", "hoangan.web@gmail.com"],
// ];
// const obj = Object.fromEntries(data);
// console.log(obj);

// Object.assign(): Gộp các object thành một object

// const obj1 = {
//     name: "Hoàng an",
//     email: "abc",
// };

// const obj2 = {
//     age: 32,
//     address: "HN",
// };

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

const query = {
    keyword: "Hoàng An",
    status: "active",
    category: 1,
};
console.log(query);

let queryString = "";
// chuyển object trên thành dạng query string: keyword=Hoàng+An&status=active&category=1
for (let key in query) {
    const value = query[key];
    console.log(key, value);
    queryString = `keyword = ${keyword}`;
    console.log(queryString);
}
