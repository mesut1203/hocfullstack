// // Event OBJ: 1 đối tượng chứa các thông tin sự kiện
// // e.target: Element đang tác động sự kiện (click, mouse,..)
// //this: element đang lắng nghe sự kiện
// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");

// buttonEl.addEventListener("mousedown", function (e) {
//     // e  là event obj
//     console.log(e.target);
//     console.log(this);
// });

// inputEl.addEventListener("keydown", function (e) {
//     console.log(e);
// });

// //e.preventDefault(): Ngăn hành động mặc định thông thường html

// /*
// - Thẻ a khi click sẽ chuyển hướng tới url trong href
// - Thẻ form khi submit sẽ tải lại trang

// */
// // const aEl = document.querySelector("a");
// // aEl.addEventListener("click", function (e) {
// //     e.preventDefault();
// //     const href = this.href;
// //     console.log(href);
// // });

// // e.stopPropagation()

/*
Chặn hành động nổi bọt của sự kiện trong html ra ngoài cha

-Lưu ý: Cả thẻ cha và con đều cùng sự kiện


*/
// const boxEl = document.querySelector(".box");
// const buttonEl = document.querySelector("button");
// boxEl.addEventListener("click", function (e) {
//     console.log("Box clicked");
// });

// buttonEl.addEventListener("click", function (e) {
//     e.stopPropagation();

//     console.log("Button clicked");
// });
const menuEl = document.querySelector(".menu");

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    menuEl.style.display = "block";
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);
    menuEl.style.left = `${x}px`;
    menuEl.style.top = `${y}px`;
});

document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Escape") {
        menuEl.style.display = "none";
    }
});

// document.addEventListener("click", function (e) {
//     if (!menuEl.contains(e.target)) {
//         menuEl.style.display = "none";
//     }
// });

// DOM Navigation
