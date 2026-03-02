/*
Event: hành động người dùng tác động Html: click, mouseover,dbclick, submit,..
- Trong DOM có sẵn các sự kiên
- Viêc dev là lắng nghe sự kiện để thuwccj hiện logic thwucj hiện bài toán

Cú pháp lắng nghe sự kiện:
element.on{tensukien} = function () {
    //Logic cần xử lý
}
*/
const btnEl = document.querySelector(".btn");

// const handleClick = function () {
//     console.log("Vừa click buttonn");
// };
// btnEl.addEventListener("click", handleClick);

// btnEl.addEventListener("mouseover", handleClick);

// // btnEl.onclick = function () {
// //     console.log("click me");
// // };
// // btnEl.onmouseover = function () {
// //     console.log("User vừa trỏ chuột vào");
// // };

// // const inputEl = document.querySelector(".field");
// // inputEl.onfocus = function () {
// //     console.log("focus input");
// // };

// // inputEl.onblur = function () {
// //     console.log("blur");
// // };
// // inputEl.oninput = function () {
// //     console.log("Nhập input");
// // };

// btnEl.addEventListener("click", function () {
//     console.log("click button");
// });

// btnEl.addEventListener("click", function () {
//     console.log("click button 2");
// });

// Từ khóa this trong event: CHính là element đang lắng nghe events
// btnEl.addEventListener("click", function (e) {
//     // e = event object: Thông tin, thông số sự kiện
//     // console.dir(this) //btnEl
//     this.innerHTML = `Clicked`;
//     console.log(e);
// });

// lắng nghe sự kiện trong 1 danh sách
const liList = document.querySelectorAll("ul li");
liList.forEach(function (li) {
    // console.dir(li);
    li.addEventListener("click", function () {
        // console.log(this);
        this.innerHTML = "CLicked";
    });
});


