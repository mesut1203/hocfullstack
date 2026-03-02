// export const something = (a: number, b: number): number => {
//     console.log(a);
//     console.log(b);
//     const total: number = a + b;
//     console.log(total);
//     return total;
// };

//any: Chấp nhận các kiểu dữ liệu
// unknown: Chưa biết trước kiểu dữ liệu là gì, yêu cầu kiểm tra trước khi sử dụng

//string, number, boolean, null, undefined, symbol

// void: hàm không trả về gì

export const something2 = (): void => {
    // const myArr: number[] = [1, 2, 3, 4, 5];
    // myArr.push("a");
    // console.log(myArr);
    // const myArr: string[] = ["a", "b", "c"];
    // console.log(myArr);
    // const myArr: [string, number, boolean] = ["An", 20, false];
    // console.log(myArr);
    // const user: {
    //     name: string;
    //     email: string;
    //     status: boolean;
    //     age?: number;
    //     active: boolean | string;
    //     info: {
    //         address: string;
    //     };
    // } = {
    //     name: "An",
    //     email: "abc@gmail.com",
    //     status: false,
    //     age: 33,
    //     active: false,
    //     info: {
    //         address: "HN",
    //     },
    // };
    // console.log(user);
    // Bài tập
    // const users: {
    //     id: number;
    //     name: string;
    // }[] = [
    //     {
    //         id: 1,
    //         name: "An",
    //     },
    //     {
    //         id: 2,
    //         name: "Khải",
    //     },
    //     {
    //         id: 3,
    //         name: "Đình",
    //     },
    // ];
    // console.log(users);
    // type User = {
    //     name: string;
    //     age: number;
    //     status: boolean;
    // };
    // type Employee = {
    //     address: string;
    //     details: User;
    // };
    // const employee: Employee = {
    //     address: "HN",
    //     details: {
    //         name: "An",
    //         age: 20,
    //         status: false,
    //     },
    // const users: User = {
    //     name: "An",
    //     email: "abc@gmail.com",
    //     status: false,
    // };
    // console.log(users);
    // const customer: User = {
    //     name: "An",
    //     email: "abc@gmail.com",
    //     status: false,
    // };
    // };

    // interface User {
    //     name: string;
    //     age: number;
    //     status: boolean;
    // }
    // interface Auth extends User {
    //     role: string;
    //     login: () => void;
    // }
    // const auth: Auth = {
    //     name: "An",
    //     age: 20,
    //     status: false,
    //     role: "admin",
    //     login: () => {
    //         console.log("User logged in");
    //     },
    // };

    // let x: unknown = "100";
    // if (typeof x === "string") {
    //     console.log(x.toUpperCase());
    // }

    // type User = {
    //     name: string;
    //     age: number;
    //     status: boolean;
    // };
    // type Customer = {
    //     address: string;
    // };

    // const a: User & Customer = {
    //     name: "An",
    //     age: 20,
    //     status: false,
    //     address: "HN",
    // };

    //Generic: Truyển kiểu dữ liệu khi gọi hàm
    // type User<T> = {
    //     name: string;
    //     age: number;
    //     details: T;
    // };

    // const user1: Use1<{
    //     address: string;
    // }> = {
    //     name: "An",
    //     age: 20,
    //     details: {
    //         address: "HN",
    //     },
    // };
    // console.log(user1);
};
//type: Kiểu do lập trình viên tự định nghĩa bằng cách kết hợp kiểu khác
//interface: Giống type nhưng có thể kế thừa interface khác
