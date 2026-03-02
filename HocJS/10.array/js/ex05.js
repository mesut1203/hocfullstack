/*
``Nguyên thủy
-Tham chiếu:array, function, object

Khi khởi tạo 1 biến mang dữ liệu tham chiếu --> Tạo địa chỉ trong bộ nhớ --> Khi so sánh thì sẽ so sánh địa chỉ


*/

// const arr1 = [];
// const arr2 = [];
// if(arr1 ===arr2) {
//     console.log("2 mảng giống nhau");

// }else {
//     console.log("2 mảng khac nhau");

// }

// Sao chép mảng
// const arr1 = ["An", "hoangan@email.com"];
// const arr2 = arr1;

// cách sao chép sang địa chỉ mới
// Sao chép nông (shallow copy)
// 1. Dùng các phương thức mảng mà trả về mảng mới (slice,map, filter,...)

// const arr2 = arr1.slice(0);
// const arr2 = arr1.map((item) => item)
// const arr2 = arr1.filter(() => true);

// 2. dùng toán tử spread
// const arr2 = [...arr1];

// 3. Sao chép sâu (deep copy)
// 3.1 Viết hàm đệ quy để sao chép nông từng cấp
// 3.2 chuyển thành định dạng json rồi ngược lại

// const json = JSON.stringify(arr1); //JSON là kiểu chuỗi dùng để đặc tả dữ liệu phức tạp
// const arr2 = JSON.parse(json);
// arr2[0] = "Hoảng An";
// console.log(arr2);
// console.log(arr1);

// So sánh 2 mảng
// 1. So sánh nông (shallow compare)
// Ý tưởng: Duyệt qua từng phần tử của mảng thứ nhất, so sánh với từng phần tử của mảng thứ 2. Nếu bằng nhau hết kết luận 2 mảng giống nhau
const arr1 = [1, "An", true, ["Khải"]];
const arr2 = [1, "An", true, ["Khải"]];

const compareArray = (arr1, arr2) => {
    // Kiểm tra độ dài 2 mảng
    if (arr1.length !== arr2.length) {
        return false;
    }
    // So sánh từng phần tử mảng 1 với từng phần tử mảng 2
    return arr1.every((item, index) => {
        if (Array.isArray(item)) {
            return compareArray(item, arr2[index]);
        }
        console.log(item, arr2[index]);

        return item === arr2[index];
    });
};
if (compareArray(arr1, arr2)) {
    console.log("2 mảng giống nhau");
} else {
    console.log("2 mảng khác nhau");
}
