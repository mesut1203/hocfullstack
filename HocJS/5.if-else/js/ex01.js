//  Câu lệnh rẽ nhánh if else
/*
1. câu lệnh if thiếu
if() {
}

2. 
if() {

}else {
}

3.
if() {

}else if() {

}else {
}

4.
if() {
    if() {
    }else
}else{
}
*/

// let number = 8;
// let total = 0;
// if (number >= 10) {
//     total = total + 10;
// } else {
//     total = total + 5;
// }

// console.log(total);

// let number = 30;

// if (number < 0) {
//     console.log("số âm");
// } else if (number < 5) {
//     console.log("số nhỏ");
// } else if (number < 10) {
//     console.log("số trung bình");
// } else {
//     console.log("số lớn");
// }

// let salary = 4000;
// let income;
// let tax;
// if (salary > 0) {
//     if (salary < 5000) {
//         income = salary - (salary * 0) / 100;
//     } else if (salary <= 10000) {
//         income = salary - (salary * 3) / 100;
//     } else {
//         income = salary - (salary * 5) / 100;
//     }

//     console.log(income);
// } else {
//     console.log("Dữ liệu không hợp lệ");
// }

//  tính tiền taxi
let distance = 200;
let price;
if (distance <= 1) {
    price = 15000;
} else if (distance > 1 && distance <= 5) {
    price = 15000 + (distance - 1) * 13500;
} else if (distance > 5) {
    price = 15000 + 4 * 13500 + (distance - 5) * 11000;
}
console.log(price);
