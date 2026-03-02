// const { createElement } = require("react");

// const root = document.querySelector("#root");
// const h1 = document.createElement("h1");
// h1.innerHTML = "Title 01";
// root.append(h1);

// const h2 = document.createElement("h2");
// h2.innerHTML = "Title 02";
// root.append(h2);

// const h3 = document.createElement("h3");
// h3.innerHTML = "Title 03";
// root.prepend(h3);

// // insertBefore(newNode, oldNode)
// // Chen h3 truoc h2
// // root.insertBefore(h3, h2);

// const p = document.createElement("p");
// p.innerHTML = "Paragraph";
// root.append(p);

// // coi như kbiet sau h2 là thẻ p
// // Giải pháp: Dùng nextElementSibling để tìm phần tử phía sau
// // Dùng insertBefore chèn vào trước phần tử phía sau đó
// const nextH2El = h2.nextElementSibling;
// // console.log(nextH2El);
// if (nextH2El) {
//     root.insertBefore(h3, nextH2El);
// }

// textNode: Node đặc biệt không thuộc HTML, tuy nhiên có thể tự thay đổi được
// const h1 = document.createElement("h1");
// h1.innerText = `Count: `;
// root.append(h1);
// // const span = document.createElement("span");
// // span.innerText = 0;
// // h1.append(span);
// const textNode = document.createTextNode(0);
// // console.dir(textNode);
// h1.append(textNode);

// const button = document.createElement("button");
// button.innerText = "+";
// root.append(button);
// button.addEventListener("click", function () {
//     // logic tăng
//     // span.innerText++;
//     textNode.data++;
// });

const ul = document.querySelector("ul");
const liList = document.querySelectorAll("ul li");
liList.forEach((li) => {
    const up = li.querySelector(".up");
    const down = li.querySelector(".down");

    up.addEventListener("click", () => {
        const prevEl = li.previousElementSibling;
        // console.log(prevEl);
        if (!prevEl) {
            return;
        }

        // insertBefore
        ul.insertBefore(li, prevEl);
    });

    down.addEventListener("click", () => {
        const nextEl = li.nextElementSibling;
        if (!nextEl) return;

        ul.insertBefore(nextEl, li);
    });
});
