// attribute
/*
DOM build sẵn các thuộc tính tương ứng HTML

element.ten_thuoc_tính




*/
// const aEl = document.querySelector("a");
// console.log(aEl.href);
// console.log(aEl.id);
// console.log(aEl.title);
// console.log(aEl.target);
// console.log(aEl.className); //class phải lại className

// aEl.href = "https://unicode.vn";

// Lấy giá trị input
// const inputEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const clickImg = document.querySelector(".img-preview");
// buttonEl.addEventListener("click", function () {
//     const value = inputEl.value;
//     // console.log(value);
//     // inputEl.value = ""; // Xóa dữ liệu input
//     // inputEl.placeholder = "Ahihi"; //Thêm placeholder
//     if (value) {
//         //Khởi tạo thẻ img
//         const imgHTML = `<img src= ${value}>`;
//         // Đưa thẻ img vào .img-preview
//         clickImg.innerHTML = imgHTML;
//     }
// });

//  Nhập vào link ảnh vào input --> Hiển thị ảnh dưới ô input

// Data attribute

/*
Thuộc tính do lập trình viên tự tạo để giải quyết 1 bài toán js css
Được w3c hợp lê
cú pháp: data-*

Có 2 cách truy cập vào data attribute từ js
C1: dùng hàm getAttribute và setAttribute

C2: dùng object dataset( được DOM build sẵn)


*/
const h3El = document.querySelector("h3");
// const count = h3El.getAttribute("data-count");
// console.log(count);

// h3El.setAttribute("data-count", 20); //Thay đổi data count
// h3El.setAttribute("data-name", "Unicode");

// cách 2
console.log(h3El.dataset);
const count = h3El.dataset.count;
console.log(count);
h3El.dataset.count = 20;
h3El.dataset.name = "Unicode";

//Naming convention
/*
Nếu bên HTML có data attribute: data-animation-duration
--> Chuyển qua dataset: dataset.animationDuration
*/
console.log(h3El.dataset.animationDuration);
h3El.dataset.animationDuration = "ease-in-out"; //data-animation-timming-function

//classList
/*
Object được DOM build sẵn để quản lý class trong 1 Element

*/
console.log(h3El.className);

console.log(h3El.classList);

//Các phuowngv thức classList

/*
1.add(): Thêm class mới element
*/
h3El.classList.add("title3");

//2. remove():XÓa
h3El.classList.remove("title-2");

//3.replace(): Thay thế
h3El.classList.replace("title3", "active");

//4.toggle(): Kiểm tra nếu ko tồn tại class thì thêm mới, tồn tại sẽ xóa
h3El.classList.toggle("open"); //thêm
h3El.classList.toggle("open"); //xóa

//5. contains(): Kiểm tra class tồn tại element
console.log(h3El.classList.contains("active"));

//Xóa phần tử HTML:element.remove()
// h3El.remove();

//Xóa thuộc tính: element.removeAttribute(tenthuoctinh)
h3El.removeAttribute("data-count");

//  if (item.classList.contains("active")) {
//                 item.classList.remove("active");
//             } else {
//                 // Gỡ bỏ class active ở tất cả các mục khác
//                 items.forEach(el => el.classList.remove("active"));

//                 // Thêm class active cho item hiện tại
//                 item.classList.add("active");
//             }

