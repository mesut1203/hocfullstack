// Ép kiểu
// 1. ép từ số sang chuỗi
// let age = 32;
// // age = age + " ";
// age = age.toString();
// console.log(age, typeof age);

// let check = true;
// check = check.toString();
// console.log(check, typeof check);

// kiểu dữ liệu nào đều chuyển về string hết

// 2. ép từ các kiểu khác sang number
// let a = "10";
// // a = +a;
// a = Number(a);
// console.log(a, typeof a);

// Lưu ý: Giá trị nào không chuyển sang số sẽ chuyển NaU

// 3. Ép cắc kiểu dữ liệu sang Boolean
let a = "";
a = Boolean(a);
console.log(a, typeof a);
/*
các gtri sau false "",0 , null, false, NaN, false
*/