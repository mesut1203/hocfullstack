//DOM HTML
const contentEl = document.querySelector(".content");
const btnEl = document.querySelector(".btn");
const content = contentEl.innerHTML;
const spanEl = document.querySelector("h3 span");
btnEl.addEventListener("click", function () { 
    // innerHTML
    console.log(contentEl.innerHTML);

    // innerText
    // console.log(contentEl.innerText);
    // textContent
    // console.log(contentEl.textContent);
    // outerHTML
    // console.log(contentEl.outerHTML);

    if (contentEl.innerHTML) {
        contentEl.innerHTML = ``;
        this.innerHTML = `hiện`;
    } else {
        contentEl.innerHTML = content;
        this.innerHTML = `ẩn`;
    }
    // contentEl.innerText = `<i>Học lập trình không khó</i>`;
    // contentEl.outerHTML = `<i>Học lập trình không khó</i>`;

    // Lấy ra giá trị đếm ban đầu
    let count = spanEl.innerText;
    console.log(count);
    count++;
    spanEl.innerText = count;
});
