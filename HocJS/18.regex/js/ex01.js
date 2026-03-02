// Biểu thức chính quy (Regular Expression)

//  - Sử dụng các ký hiệu để xử lý chuỗi nâng cao
//  - 3 tác dụng chính:
//  + So khớp: kIểm tra chuỗi khớp biểu thức
//  + Cắt chuỗi
//  + Thay thế

//  Cấu trúc: /cackyhieu/cauhinh

// Ví dụ
// const pattern = /\d+/;
// const str = "abc123";
// console.log(pattern.test(str));

// Web để test biểu thức chính quy:  https://regex101.com/

// * Các ký hiệu cơ bản

/*
- chuoibatky --> Kiểm tra chuỗi nằm trong chuỗi cha
- ^  ----> Khớp đầu chuỗi
- $ -----> Khớp cuối chuỗi
- [A-Z] ---> Khớp chữ hoa
- [a-z] ---> Khớp chữ thường
- [0-9] ---> Khớp số

- [charlist] --> Đưa vào ký tự muốn kiểm tra. Ví dụ: [-_]
Lưu ý: CÓ thể kết hợp các biểu thức trong cặp ngoặc vuông tuy nhiên điều kiện kết hợp sẽ là hoặc
Nếu các biểu thức không nằm trong cặp ngoặc vuông ----> sẽ kết hợp AND và đúng theo thứ tự
Các biểu thức MẶC ĐỊNH có độ dài là 1

- Các kí hiệu độ dài (Viết sau biểu thức)
- {value} : Độ dài cố định
- {min, max} : Độ dài từ min đến max
- {min} : Độ dài >= min

Các ký hiệu viết tắt của độ dài 
- {0,} ---> *
- {1,} ---> +
- {0,1} ---> ?

PHỦ ĐỊNH :  ^ (Phải viết trong biểu thức)

HOẶC : |  (Thường kết hợp ngoặc tròn để nhóm)

Khi gặp biểu thức đặc biệt trong Regex: [ ] . + ? * --> Cần thêm ký tự escape vào phía trước để bypass

Ví dụ:Kiểm tra trong chuỗi có ngoặc vuông hay không
\[

Ký hiệu đại diện cho tất cả các kí tự: . (Dấu chấm)

Các ký hiệu viết tắt khác:
\w --> Tương tự [A-Za-z0-9_]
\W --> Phủ định của \w
\d --> [0-9]
\D --> Phủ định của \d
\s --> Khoảng trắng
\S ---> Phủ định \s


*/
// const partent = /[A-Z]@[a-z]/;
// const str = "A@b";
// console.log(partent.test(str));

// Kiểm tra chuỗi có 3 chữ hoa ở đầu chuỗi, sau đến @ rồi >= 4 số ở cuối chuỗi

// const pattern = /^[A-Z]@[0-9]{0,}$/;
// const str = "HOA@12345";
// console.log(pattern.test(str));

// Viết biểu thức chính quy kiểm tra 1 biến hợp lệ
//  -Không được bắt đầu bằng số
//  -Chấp chân chữ cái (hoa, thường) , số, gạch dưới, ký hiệu $
//  -Độ dài tối thiểu là 1

// const string = /^[A-Za-z_$][A-Za-z0-9_$]{0,}$/;
// const str = "_";
// console.log(string.test(str));

// /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;

// Bài tập: Kiểm tra tên miền hợp lệ
//  Cấu tạo: ten.mien
// 1. Tên:
/* 
- Có ít nhất 1 ký tự
- Chấp nhận: Chữ hoa, thường, dấu chấm, số, gạch ngang hoặc dưới
- Phải bắt đầu bằng chữ cái hoặc số
- Không được kết thúc bằng gạch ngang, dưới và dấu chấm

// 2. Miền
-Chỉ chấp nhận chữ thường hoặc hoa
- Độ dài từ 2 kí tự trở lên

*/

// const domain = "unicode.vn";
// const str = /^[a-zA-Z0-9]([a-zA-Z0-9-_.]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;
// console.log(str.test(domain));

// Cắt chuỗi
// let content = "Xin chào anh em 01111 abc 022222";
// const pattern = / \d+/g;
// const result = content.match(pattern);
// console.log(result);

// Capturing Group: Kỹ thuật sử dụng cặp ngoặc tròn để chụp lại một phần biểu thức chính quy
// LƯU Ý: KHÔNG ÁP DỤNG GLOBAL
// NON-CAPTURING GROUP: Kỹ thuật loại bỏ kết quả trong cặp ngoặc tròn --> Thêm ?: ở trong ngoặc tròn

// const str = "0335390018";
// const pattern = /^(?:0|\+84)(\d{9})$/;
// const result = str.match(pattern);
// console.log(result);

// Greedy --> Tình trạng tham lam khi dùng ký tự đại diện ( dùng dấu chấm .)
// Khắc phục: thêm dấu ? vào sau độ dài

// /<img[^>]*src=["']([^"']+)["'][^>]*>/g

let html = `
<img alt="Ahifi" src="https://gg.com/a.png" height =200" />
<img alt="Ahifi" src="https://gg.com/b.png" width =200" />
<img alt="Ahifi" src="https://gg.com/c.png" />
`;

// lấy tất cả link ảnh trong html lưu vào mảng
const pattern = /<img.*src="(.+?)".*\/*/g;
const images = html.match(pattern);
const imageUrl = images.map((image) => {
    const pattern = /<img.*src="(.+?)".*\/*/;
    const result = image.match(pattern);
    return result[1];
});
console.log(imageUrl);
