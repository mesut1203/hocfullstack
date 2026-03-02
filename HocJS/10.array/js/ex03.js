// Các hàm xử lý
console.log(Array.prototype);

const myArr = ["Item 1", "Item2", "Item3", "Item 4"];

// 1.length
// console.log(myArr.length);
// myArr.length = 3;
// console.log(Arr);
// Khi tìm 3 phần tử đầu

// 2. concat(...array): Nối nhiều mảng thành 1 mảng
// const array1 = [1, 2, 3];
// const array2 = ["A", "B", "C"];
// const newArr = myArr.concat(array1, array2);
// console.log(newArr);

// 3. IndexOf(value): Kiểm tra xem value có trong mảng hay không? Nếu có trả về index đầu tiên tìm được, không có trả về -1
// console.log(myArr.indexOf("Item2"));

// 4.lastIndexOf(value); Kiểm tra xem value có trong mảng hay không? Nếu có trả về index đầu tiên tìm được, không có trả về -1

// 5. includes(value): kiểm tra xem value có mảng k. có về true
// console.log(myArr.includes("Item2"));

// 6.Slice(start,end): Cắt mảng từ Start đến end-1 và trả về mảng mới
// console.log(myArr.slice(1, 3));
// console.log(myArr.slice(1));
// console.log(myArr.slice(-2));

// 7.join(separtor): Nối các ptu mảng thành chuỗi
// console.log(myArr.join("-"));

// 8. fill(value): Thay thế các giá trị phần tử trong mảng thành value(Trả về mảng mới sau khi thay và thay luôn mảng ban đầu)
// const newArr = myArr.fill("Khải");
// console.log(myArr);

// 9. push(): Thêm các phần tử cuối mảng (thay đổi mảng ban đầu, trả về số lượng sau khi thêm)
// const count = myArr.push("A", "B", "C", "D");
// console.log(count);

// 10. unshift(): Thêm các phần tử vào đầu mảng( Thay đổi mảng ban đầu, trả về số lượng phần tử sau khi thêm)
// const count = myArr.unshift("A", "B", "C", "D");
// console.log(count);
// console.log(myArr);

// 11. pop(): XÓa phần tử cuối mảng(Trả về giá trị đã xóa và thay đổi mảng ban đầu)
// const value = myArr.pop();
// console.log(value);
// console.log(myArr);

// 12. shift():XÓa phần tử đầu mảng(Trả về giá trị đã xóa và thay đổi mảng ban đầu)
// const value = myArr.shift();
// console.log(value);
// console.log(myArr);

// 13. reverse(): đảo ngược( trả về mảng mới sau khi đảo ngược)
// const value = myArr.reverse();
// console.log(value);
// console.log(myArr);

// 14. Sort();
// const myArr = ["Tùng", "Khải", "An", "Vinh"];
// myArr.sort();
// // console.log(myArr);

// // Nâng cao hàm sort()
// myArr.sort((a, b) => {
//     // console.log();
//     //  Nếu hàm trả về số âm thì tiến hành đổi chỗ
//     if (b > a) return -1;
// });
// console.log(myArr);

// 15. splice(start, count): XÓa count phần tử start
// myArr.splice(1, 1);
// console.log(myArr);

// Bài tập: Sắp xếp mảng sau tăng dần theo tên
// const customer = [
//     "Tạ Hoàng An",
//     "Nguyễn Văn Dũng",
//     "Nguyễn Tuấn Anh",
//     "Phạm Văn Tuấn",
// ];

// const getFirstname = (fullname) => {
//     return fullname.split(" ").slice(-1)[0];
// };
// console.log(getFirstname("Tạ Hoàng An"));
// customer.sort((a, b) => {
//     const firstNameA = getFirstname(a);
//     const firstNameB = getFirstname(b);

//     if (firstNameA < firstNameB) return -1;
// });
// console.log(customer);

//
const arr = [[1], [2], [[3], 4], 5, 6];
console.log(arr);

const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     if (!Array.isArray(value)) {
//         newArr.push(value);
//     } else {
//         // value là 1 mảng
//         // duyệt value --> sau đó kiểm tra các phần tử của value
//         // Nếu không phải là mảng -- push vào newArr
//         // Nếu là mảng lặp lại bước duyệt( đi sâu thêm 1 cấp nữa)
//         for (let j = 0; j < value.length; j++) {
//             const item = value[j];
//             if (!Array.isArray(item)) {
//                 newArr.push(item);
//             } else {
//                 for (let k = 0; k < item.length; k++) {
//                     const product = item[k];
//                     if (!Array.isArray(product)) {
//                         newArr.push(product);
//                     }
//                 }
//             }
//         }
//     }
// }

const flatArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (!Array.isArray(value)) {
            newArr.push(value);
        } else {
            flatArray(value);
        }
    }
};
flatArray(arr);
console.log(newArr);
