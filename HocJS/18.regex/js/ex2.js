//  Thay thế
//  Dùng hàm replace(pattern, newValue)
// Thay tất cả các số thành 3 dấu *
// let str = "Xin chào ae 03299 abc 734637";
// const parttern = /\d+/g;
// str = str.replace(parttern, "!!!!");
// console.log(str);

//  Đối xứng chuỗi
// let str = "Xin chào anh em https://google.com abc https://unicode.vn";
// const pattern = / ((http|https):\/\/\w+\.[a-z]{2,})/g;
// str = str.replace(pattern, `<a href="$1" target="_blank">$1</a>`);
// document.body.innerHTML = str;

/*
https://www.youtube.com/watch?v=KvsEppLBHvU
<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KvsEppLBHvU?"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>


*/

// b1: Lấy url youtube từ thẻ input
// b2: Viết regex để lấy id youtube
// b3: tạo mã iframe với id ytb lấy đc ở trên
// b4: Cập nhật mã iframe vào class video

// làm nhập link ytb sẽ hiện ra video ở dưới

/*
Các dạng phổ biến

https://youtube.com/watch?v=KvsEppLBHvU
https://youtu.be/_KvsEppLBHvU
https://youtu.be/_KvsEppLBHvU?...
https://youtube.com/watch?v=_KvsEppLBHvU&bh






(?<=v=)[\w-]+
*/

const input = document.querySelector("input");
const video = document.querySelector(".video");
input.addEventListener("input", function () {
    const url = input.value;
    const pattern =
        /(?:http|https):\/\/(?:www\.|)(?:youtube\.com\/watch\?v=([\w-]+)|youtu\.be\/([\w-]+))/;
    const match = url.match(pattern);
    if (match[1]) {
        const videoId = match[1];
        const iframe = `<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${videoId}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
`;
        video.innerHTML = iframe;
    }
});
