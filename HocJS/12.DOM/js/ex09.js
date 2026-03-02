// DOM Nodes
/*
-Dùng JS tạo ra 1 thẻ h1 và đưa vào DOM
-Cú pháp: document.createElement('tagname')


*/
// B1: Tạo Node(Object)
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// console.log(h1);

// // B2. Thêm Node vào cây DOM (Dựa vào thẻ HTML có sẵn)
// const rootEl = document.querySelector("#root");
// rootEl.append(h1);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//     h1.innerText = "Xin chào JS";
//     const h2 = document.createElement("h2");
//     h2.innerText = "HỌc ĐoM không khó";
//     rootEl.append(h2);
// });

// Cách cũ:
// const btn = document.querySelector(".btn");
// const h1 = document.createElement("h1");

// const rootEl = document.querySelector("#root");
// rootEl.innerHTML = "<h1>Hello World </h1>";
// btn.addEventListener("click", function () {
//     rootEl.innerHTML += `<h2>Học DOM không hó</h2>`;
//     const h1El = document.querySelector("h1");
//     h1El.innerText = "Xin chào JS";
// });
