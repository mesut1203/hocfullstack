//  Thuật toán đệ quy
/*
- Chỉ áp dụng với hàm
- gọi lại chính hàm định nghĩa để có thao tác lặp lại
- Lưu ý:Thiết lập điều kiện dừng--> Lặp vô hạn
- Web: dùng giải quyết bài toán đa cấp 

Ưu điểm: dễ setup
Nhược điểm: chạy chậm(khổ cho ng dùng )
*/
// const showNumber = (n) => {
//     console.log(n);
//     if (n > 1) {
//         showNumber(n - 1);
//     }
// };
// showNumber(10);

// Hiển thị số fibonacci
// const fibonacci = (n) => {
//     // n là vị trí số cần tìm

//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log(fibonacci(5)); cần tìm fibonacci thứ 5

/*
fibonacci(5) = fibonacci(4) + fibonacci(3)
             = fibonacci (3) + fibonacci(2) + 1 +1
             = fibonacci    



*/

//  Bài tập: Tính tổng các số nguyên từ n đến 1 bằng cách dùng đệ quy

// const getTotal = (n) => {
//     if (n === 1) {
//         return 1;
//     }
//     return n + getTotal(n - 1);
// };
// console.log(getTotal(10));

// Bài tập: Tính tổng các số chẵn n đến 1 bằng cách dùng đệ quy

const getTotal = (n) => {
    console.log(n);
    if (n === 0) {
        return 0;
    }
    if (n % 2 !== 0) {
        n--;
    }
    return n + getTotal(n - 2);
};
console.log(getTotal(1));
