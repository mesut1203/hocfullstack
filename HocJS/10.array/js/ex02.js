// mảng đa chiều (nested array)

const myArr = [
    ["User1", "user1@gmail.com"],
    ["User2", "user2@gmail.com"],
    ["User3", "user3@gmail.com"],
];

// Thêm phần tử mới cho mảng cha
myArr[myArr.length] = ["User 4", "user4@gmail.com"];

// Thêm phần tử mới mảng con
// -xác định index của mảng cha
// -Truy cập vào mảng con thông qua index mảng cha
// -Thêm vào mảng con
const findArr = myArr[2];
findArr[findArr.length] = 32;
console.log(myArr);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
const size = 3;
// Chunk array ---> [[1,2,3], [4,5,6],[7,8,9],[20]]

const newArr = [[]];
// lấy số lượng phần tử của mảng con cuối cùng
for (let i = 0; i < number.length; i++) {
    const lastChillArr = newArr[newArr.length - 1];
    const childrenArrLength = lastChillArr.length;
    if (childrenArrLength < size) {
        lastChillArr[lastChillArr.length] = number[i];
    } else {
        newArr[newArr.length] = [number[i]];
    }
}
console.log(newArr);

/*







*/
