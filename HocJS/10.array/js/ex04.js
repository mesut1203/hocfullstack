// 1.forEach
// const myArr = ["User1", "User2", "user3", "user 4"];
// myArr.forEach(function (value, index) {
//     console.log(value, index);
// });

// 2.map
// Duyệt giống forEach
// Trả về mảng mới có số lượng phần tử giống mảng cũ
// giá trị từng phần tử mảng mới là giá trị trả về của callback
// const newArr = myArr.map(function (value, index) {
//     console.log(value, index);
//     return `${index + 1} - ${value}`;
// });

// console.log(newArr);

// 3.filter
//  duyệt giống forEach
// Trả về mảng mới chứa các phần tử của mảng ban đầu nếu callback trả về truthy
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = numbers.filter(function (value, index) {
//     return value % 2 === 0;
// });
// console.log(newArr);

// 4.Find
// -duyệt giống forEach
// - Trả về phần tử đầu tiên tìm được
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.find(function (value) {
//     return value % 2 === 0;
// });
// console.log(result);

// 5.findLast
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findLast(function (value) {
//     return value % 2 === 0;
// });
// console.log(result);

// 6.findIndex
// - giống find nhưng khác là trả index
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findIndex(function (value) {
//     return value % 2 === 0;
// });
// console.log(result);

// 7.findLastIndex
// - giống find nhưng khác là trả index cuối
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findLastIndex(function (value) {
//     return value % 2 === 0;
// });
// console.log(result);

// bài tập:
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Tính tổng số chẵn trong mảng( dùng hàm bên trên)
// let total = 0;
// number.forEach((value) => {
//     if (value % 2 === 0) {
//         total += value;
//     }
// });
// console.log(total);

// 2. tìm các số chẵn trong mảng trả về mảng mới. Sau đó tăng từng sô chẵn thêm 2 đơn vị

// const newArr = number
//     .filter(function (value) {
//         return value % 2 === 0;
//     })
//     .map(function (value) {
//         return value + 2;
//     });
// console.log(newArr);

// const result = newArr.map(function (value) {
//     // console.log(value);
//     return value + 2;
// });
// console.log(result);

// 3. Xóa các phần tử chẵn trong mảng
// const result = number.filter((value) => {
//     return value % 2 !== 0;
// });
// console.log(result);

// 8.every
// trả về true, false
// true nếu tất cả các phần tử trả về truthy
// const number = [5, 10, 15, 20, 25, 30];

// const result = number.every((value) => {
//     return value % 2 !== 0;
// });
// console.log(result);

// 9. some
// chỉ cần ít nhất 1 phần tử đúng
// const result = number.some((value) => {
//     return value % 2 !== 0;
// });
// console.log(result);

// 10.reduce
/*
const result = myArr.reduce(function(prev, current, index) {
    // logic

}, initialValue);
*/
// console.log(number);
// const result = number.reduce((prev, current, index) => {
//     console.log(`prev:${prev}`, `current:${current}`, `index:${index}`);
// }, 0);
// console.log(result);

// const total = number.reduce((prev, current) => {
//     return prev + current;
// }, 0);
// console.log(total);

// 4

// const number = [1, 3, 8, 4, -1];
// const result = number.reduce((prev, current) => {
//     if (prev < current) {
//         return current;
//     }
//     return prev;
// });
// console.log(result);

const arr1 = [1, 2, 5, 7];
const arr2 = [3, 2, 7];
const result = arr1.reduce((prev, current) => {
    // console.log(current);
    // kiểm tra current trong arr2 không
    if (arr2.includes(current)) {
        prev.push(current);
    }
    return prev;
}, []);
console.log(result);

// tìm phần tử giao giữa 2 mảng


// Lọc trùng mảng
const myArr = [`user1`, `user2`, `user3`, `user1`];
// login chung:
// Tạo mảng mới
// Duyệt qua từng phần tử trong mảng cũ
// Thêm phần tử mảng mới ( Trước khi thêm kiểm tra )