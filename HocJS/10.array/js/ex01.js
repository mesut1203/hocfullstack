/*
mảng thể hiện 1 danh sách các giá trị (Bất kì kiểu dữ liệu)
- Mỗi giá trị trong mảng gọi là 1 ptu
-Đi kèm với mỗi gtri là 1 chỉ số (index) ---> tăng tuần tự từ 0


*/

//Khai báo mảng
// const myArray = [];
// Khai báo mảng rỗng
// console.log(myArray);

// const myArray2 = ["An", 1, 3, false];
// Khai báo mảng có gtri ban đầu
// console.log(myArray2);

// Kiểm tra biến có phải mảng không?
// console.log(Array.isArray(myArray));

// Thêm dữ liệu vào mảng
const myArray = [];
myArray[0] = "An";
myArray[1] = "Khải";
myArray[myArray.length] = 1;
console.log(myArray);

// Truy cập vào  phần tử mảng (Xác định được index )
// console.log(myArray[1]);

// Cập nhật giá trị của mảng(Xác định được index)
myArray[1] = "Khải 2";
console.log(myArray);

// Duyệt qua tất cả phần tử mảng
// for (let i = 0; i < myArray.length; i++) {
//     const value = myArray[i];
//     console.log(value);
// }

// for (let i in myArray) {
//     // giá trị index trong vòng lặp sẽ là chuỗi
//     const value = myArray[i];
//     // console.log(value);
//     console.log(i, typeof i, value);
// }

for (let value of myArray) {
    console.log(value);
}
// Trả về value

// Xóa phần tử mảng
// 1. Xác định index cần xóa
// 2. Duyệt qua từng ptu trong mảng
// 3. Thêm các phần tử trong mảng vào 1 mảng mới(Loại trừ phần tử được xóa)
// const users = ["User1", "User2", "User3"];
// const newUsers = [];
// for (let i = 0; i < users.length; i++) {
//     if (i === 1) {
//         continue;
//     }
//     const value = users[i];

//     newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

// Bài tập 1: thêm 1 phần tử vào đầu mảng User
// const users = ["User1", "User2", "User3", "User4"];
// const newArray = [];
// newArray[0] = "user 0";
// for (let i = 0; i < users.length; i++) {
//     const value = users[i];
//     newArray[newArray.length] = value;
// }
// console.log(newArray);

// Bài tập 2: Tìm phần tử có giá trị null và đổi chỗ phần tử cuối cùng mảng
// const myArr = ["An", 10, false, null, "Unicode", "Javascript"];
// console.log(myArr);
// // B1: tìm index có giá trị null
// let indexNull;
// for (let i = 0; i < myArr.length; i++) {
//     const value = myArr[i];
//     if (value === null) {
//         indexNull = i;
//         console.log(i);
//     }
// }

// // nếu indexnull có giá trị >=0 --> tiến hành đổi chỗ phần tử cuối
// if (indexNull >= 0) {
//     const lastElement = myArr[myArr.length - 1];
//     myArr[indexNull] = lastElement;
//     myArr[myArr.length - 1] = null;
// }
// console.log(myArr);

// Thuật toán sắp xếp nổi bọt
// const myArr = [5, 2, -1, 8, 3];

// phải sắp xép thứ tự tăng dần
// Kỹ thuật: So sánh từng phần tử với phần tử phía sau nó, nếu phần tử nào ko thỏa mãn thì đổi chỗ

/*
Lần 1: 
- So sảnh 5 với 2
- SO sánh 5 với -1
5 và 8
5 và 3

Lần 2: 
2 và -1
2 và 8
2 và 3

...



*/

// for (let i = 0; i < myArr.length - 1; i++) {
//     for (let j = i + 1; j < myArr.length; j++) {
//         if (myArr[i] > myArr[j]) {
//             // Đổi chỗ
//             const tmp = myArr[i];
//             // gán biến trung gian
//             myArr[i] = myArr[j];
//             myArr[j] = tmp;
//         }
//     }
// }
// console.log(myArr);

// Tìm giá trị lớn nhất của mảng
// const myArr = [5, 2, -1, 8, 3];
// let newArr = myArr[0];
// for (let i = 1; i < myArr.length; i++) {
//     if (newArr < myArr[[i]]) {
//         newArr = myArr[i];
//     }
// }
// console.log(newArr);
