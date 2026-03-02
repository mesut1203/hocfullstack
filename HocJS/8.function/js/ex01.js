/*
Cu phap trong lap trinh
Cho phep nhom cac doan chuwong trinh con thuan tien goi lai


Dinh nghia bao ham
function tenham (){
Code
}

function tenham(thamso1, thanm so) {
Code
}

Luu y:
-Nhu bien
-Su dung dong tu

2. Goi ham
tenham()
tenham(doiso)


Tham so con lai()
*/

// function showMessage(msg) {
//     console.log("Xin chao anh em");
//     console.log("msg", msg);
// }
// showMessage("Unicode");

// function sum(a, b) {
//     if (!a || !b) {
//         return "Khong xac dinh";
//     }

//     const total = a + b;
//     return total;
// }
// const result = sum(10, 10);
// console.log(result);

// function somthing(a, b, ...args) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log(args);
// }

// somthing(10, 20, 34, 34, 2343, 34);

/*
Pham vi(scope)
-global--> toan cuc
-function s--. ham
-block --> khoi if, else, switch case, for, while
-module --> modul


*/
// Tao ham getMax, nhan 3 tham so a,b,c
// Tim max cho 3 tham so do va tra ve
// Hien thi ket qua lon nhat o ben ngoai hang

// function getMax(a, b, c) {
//     let max = a;
//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }
//     return max;
// }
// const result = getMax(10, -60, 30);
// console.log(result);

/*
Expression Function --> Ham bieu thuc 


*/

// const getMessage = function (msg) {
//     return "unicode academy" + msg;
// };
// const result = getMessage("Ahihi");
// console.log(result);

// Callback
// const display = function (a, func) {
//     console.log(`a`, a);

//     // // b laa 1 function
//     // console.log(`b`, b);
//     if (typeof func === "function") {
//         func();
//     }
// };
// display(10, 20);
// const showMessage = function () {
//     console.log("sdsd");
// };
// // display(10, showMessage);

// display(10, function () {
//     console.log("sdsd");
// });

// Set Timeout
// setTimeout(callback, timeout,...args): Delay 1 ham callback sau 1 tg nhat dinh
// setTimeout(
//     function (value, status) {
//         console.log("Hoc JS k kho");

//         console.log(value);
//         console.log(status);
//     },
//     2000,
//     "Ünicode",
//     "sucssec"
// );

// tac dung callback
// Xu ly tac vu bat dong bo

// bat dong bo

// Van de callback, long qua nhieu callback --> calback hell


