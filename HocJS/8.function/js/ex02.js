// Arrow function: Phiên bản mới của func truyền thống(expression, declration func)

// Rút gọn cú pháp
// Không thay thế function truyền thống (sẽ có trg hợp ko thể dùng arrow function)

// declaration func

// arrow

// const showMessage = (msg) => {
//     console.log("ok");
//     console.log(msg);
// };
// showMessage("Unicode");

// Rút gọn của arrow (có return)

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// Lưu ý:
// Không thay thế func truyền thống
// trong các trường hợp cần lấy ngữ cảnh func (context) --> dùng func truyền thống

// IIFE: Hàm tự gọi, hàm dùng 1 lần

// (function (msg) {
//     console.log("o");
//     console.log(msg);
// })("unicode");

// ((msg) => {
//     console.log("ádas");
//     console.log(msg);
// })("Unicopde");

const display = () => {
    let total = 0;
    let a = 10;
    let b = 20;
    return (total = a + b), total;
};
console.log(display());
