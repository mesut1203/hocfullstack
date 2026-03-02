// Vòng lặp while
/*
-lặp số lần k xác định trước
-dựa vào điều kiệnđúng để chạy

while (dk) {
    câu lệnh
    câu lệnh để thay đổi điều kiện
}

*/

// Lưu ý: các từ khóa break, continue như for

// cho trước 1 số nguyên n, lấy số nguyên đó chia cho 2 đến khi k chia được nữa và hiển thị ra số lần chia cho 2
// let n = 1000;
// let count = 0;
// // đếm

// while (n % 2 === 0) {
//     count++;
//     n = n / 2;
// }

// console.log(count);

// do while
/*
chỉ khác lần chạy đầu tiên : chạy nội dung vòng lặp trước sau đó mới kiểm tra điều kiện

=> luôn chạy ít nhất 1 lần
*/

// let n = 100;
// do {
//     console.log(n);
// } while (n < 1);

// cho trước số nguyên n, đảo ngược số nguyên đó (không được xử lý chuỗi)
// let n = 12032004;
// let result = 0;
// while (n > 0) {
//     let temp = n % 10;
//     result = result * 10 + temp;
//     n = (n - temp) / 10;
// }
// console.log(result);
