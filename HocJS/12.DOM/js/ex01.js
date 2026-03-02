/*
DOM = Document Object Model = Mô hình hóa HTML dưới dạng đối tượng

- Dễ dàng thay đổi giao diện trang web
- Dễ dàng xử lý tương tác từ người dùng lên các thẻ html
- Trong DOM có obj thể hiện tên là document

*/
console.dir(document);

// Ví dụ: Cần thay đổi tiêu đề trang web
// document.title = "hjsadhs";
// document.body.innerHTML = `<h1>Thử update lại</h1>`;
// document.body.children[0].innerHTML = `Hoàng An`;

// Chọn phần tử HTML
// 1. Chọn phần tử html theo id --> document.getElementByID("id");
// const titleEl = document.getElementById("title");
// console.dir(titleEl);

// 2. CHọn html theo class --> document.getElementsByClassName("class") --> Trả về 1 danh sách
// const titleList = document.getElementsByClassName("title");
// console.log(titleList);
// titleList[1].innerHTML = `Ahihi`;

// 3. Chọn HTML theo tagname --> document.getElementsByTagName("tagname") --> Trả về 1 danh sách
// const pList = document.getElementsByTagName("p");
// console.log(pList);

// 4. CHọn phần tử html; đầu tiên dựa vào css selector --> document.querySelector('selector')
// const titleEl = document.querySelector("#title");
// console.dir(titleEl);

// 5. Chọn tất cả phần tử html dựa vào css selector --> document.querySelectorAll('selector')
// const titleList = document.querySelectorAll("#title");
// console.log(titleList);

// const h2El = document.querySelector(".content .title");
// console.dir(h2El);
