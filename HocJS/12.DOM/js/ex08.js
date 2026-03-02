// DOM Navigation

/*
- Lựa chọn các element dựa vào 1 ele đã cho trước
-cha ->element.parentElement
-con -> element.children
-trái --> element.previousElementSibling
-phải --> element.nextElementSibling


*/

// const ulList = document.querySelector("ul");
// const buttonList = document.querySelectorAll("ul li button");
// buttonList.forEach(function (button) {
//     button.addEventListener("click", function () {
//         // console.log(button);
//         const li = button.parentElement;
//         // console.log(li);
//         if (li) {
//             li.style.border = "1px solid red";
//         }
//     });
// });

// const liList = document.querySelectorAll(".menu li");
// liList.forEach(function (li) {
//     li.addEventListener("click", function () {
//         console.log(li);
//         const ulChildren = li.children[0];
//         // console.log(ulChildren);
//         const liChildren = ulChildren.children;
//         console.log(liChildren);
//         for (let i = 0; i < liChildren.length; i++) {
//             liChildren[i].style.border = "1px solid red";
//         }
//     });
// });

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
nextBtn.addEventListener("click", function () {
    const activeItem = document.querySelector(".products .active");
    // console.log(activeItem);
    const nextItem = activeItem.nextElementSibling;
    if (nextItem) {
        nextItem.classList.add("active");
        activeItem.classList.remove("active");
    } else {
        // Thêm class active vào phần tử đầu tiên
        const firstItem = document.querySelector(".products h2:first-child");
        firstItem.classList.add("active");

        // Xóa class active phần tử cuối
        const lastItem = document.querySelector(".products h2:last-child ");
        lastItem.classList.remove("active");
    }
});

prevBtn.addEventListener("click", function () {
    const activePrev = document.querySelector(".products .active");
    const prevItem = activePrev.previousElementSibling;
    if (prevItem) {
        prevItem.classList.add("active");
        activePrev.classList.remove("active");
    } else {
        const lastPrev = document.querySelector(".products h2:last-child");
        lastPrev.classList.add("active");

        const firstPrev = document.querySelector(".products h2:first-child");
        firstPrev.classList.remove("active");
    }
});
