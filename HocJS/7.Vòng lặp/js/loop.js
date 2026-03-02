/*
Vòng lặp

- cú pháp cho phép ctrinh chạy lặp đi lặp lại theo số lần nhất định( phụ thuộc điều kiện lặp)
-2 loại vòng lặp
+ số lần xdinh trước (lưu vào 1 biến): for
+ không xác định trước( phụ thuộc đk tính toán): While, do while

*/

// vòng lặp for
/*
for(giatrikhoitao;dieukien;buocnhay) {
    console.log(i);
}
*/

// for (let i = 1; i <= 5; i) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         for (let k = 1; k <= 5; k++) {
//             console.log(`i=${i}`, `j=${j}`, `k=${k}`);
//         }
//     }
// }

// từ khóa break: thoát vòng lặp khi vòng lặp chưa chạy xong

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 8 || i === 5) {
//         break;
//     }
// }
// for (let i = 1; i <= 10; i++) {
//     if (i === 8 || i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// từ khóa continue: bỏ qua bước lặp

// 1. tính tổng số chẵn từ 1 đến 10
// let n = 10;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         // console.log(`i=${i}`);
//         total = total + i;
//     }
// }
// console.log(total);

// tính n!
// let n = 10;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     result = result * i;
// }
// console.log(result);

// 3. tính giá trị
// let n = 5;
// let Factorial = 1;
// let sum = 0;
// for (i = 1; i <= n; i++) {
//     Factorial = Factorial * i;

//     // console.log(Factorial);

//     sum = sum + Factorial;
// }
// console.log(sum);

// kiểm tra số nguyên tố.Đk số nguyên, >1, chỉ chia hết cho 1 và chính nó
// let n = 5;
// let check = true;
// if (n % 1 === 0 && n > 1) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             check = false;
//             break;
//         }
//     }
// } else {
//     check = false;
// }

// if (check) {
//     console.log("số nguyên tố");
// } else {
//     console.log("Không phải số nguyên tố");
// }

