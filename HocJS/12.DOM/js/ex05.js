// const ulActive = document.querySelectorAll("ul li");
// console.log(ulActive);

// ulActive.forEach(function (li) {
//     li.addEventListener("click", function () {
//         const activeItem = document.querySelector("ul li.active");
//         // li.classList.toggle("active");
//         // console.log(li);
//         li.classList.toggle("active");
//         if (activeItem) {
//             activeItem.classList.remove("active");
//         } else {
//         }
//     });
// });

const inputEl = document.querySelector(".todo-form input");
const buttonEl = document.querySelector(".todo-form button");
const todoListEl = document.querySelector(".todo-list");
const todoList = [];

// add todo
buttonEl.addEventListener("click", function () {
    const value = inputEl.value;
    console.log(value);
    if (value) {
        const todo = {
            title: value,
            completed: false,
        };
        todoList.push(value);
        // console.log(todoList);
        renderTodoList();

        inputEl.value = "";
    }
});
const renderTodoList = function () {
    const html = todoList
        .map(function (item) {
            return `<li><input type="checkbox"/>${item.title} <span class = "remove">x</span></li>`;
        })
        .join("");
    // console.log(html);
    todoListEl.innerHTML = html;

    // chọn tất cả thẻ span trong li
    const removerList = document.querySelectorAll(".todo-list .remove");
    // console.log(removerList);
    removerList.forEach(function (item, index) {
        item.addEventListener("click", function () {
            console.log(todoList);

            // console.log(item);
            // Xác định index item vừa click vào
            console.log(index);

            // Xóa phần tử theo index trong mảng todoList
            if (index > -1) {
                todoList.splice(index, 1);
            }
            // Gọi lại hàm renderTodoList để cập nhật giao diện
            renderTodoList();
        });
    });

    const liList = document.querySelectorAll(".todo-list li");
    liList.forEach(function (li) {
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });
    });
};
/*
[
{title: "Job 1", completed: false},
{title: "Job 2", completed: false},
{title: "Job 3", completed: false},
{title: "Job 4", completed: false},

]



*/
