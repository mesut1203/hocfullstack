// Date là obj có sẵn js dùng xử lý thời gian
// --Date lấy thời gian máy tính ng dùng
//- Nếu chạy trên server, Date lấy thời gian ở Server

// console.log(Date.prototype);

// const today = new Date(); //Lấy thời gian hiện tại
// console.log(today);

// Các phương thức
// console.log(today.getDay()); //Trả về thứ
// console.log(today.getDate()); //Trả về ngày
// console.log(today.getMonth()); //Trả về tháng
// console.log(today.getDay()); //Trả về thứ
// console.log(today.getHours()); //Trả về giờ
// console.log(today.getMinutes()); //Trả về phút
// console.log(today.getSeconds()); //Trả về giây
// console.log(today.getMilliseconds()); //Trả về mill giây

// console.log(today.getTime()); //Trả về timestamp (mill giây): Số giây từ 1970

//

// Tạo đối tượng thời gian từ 1 thời điểm bất kì
// Lưu ý: Có thể đưa timestamp vào đối tượng Date
// const targetDate = "2025-07-02 09:30:45";
// const date = new Date(targetDate);
// console.log(date);

// Bài tập chuyển đổi định dạng
// const targetDate = "2025-07-02 09:30:45";
// // Output: Ngày 02 tháng 07 năm 2025, 09 giờ 30 phút 45 giây
// const date = new Date(targetDate);
// const output = `Ngày ${date.getDate()} tháng ${
//     date.getMonth() + 1
// } năm ${date.getFullYear()}, ${date.getHours()} giờ ${date.getMinutes()} phút ${date.getSeconds()} giây `;
// console.log(output);

const expireDate = "2025-07-03 09:30:45";
// Viết giúp tôi  count down từ giờ đến hôm ấy còn bao lâu
const handleCountdown = () => {
    const today = new Date();
    const subDate = new Date(expireDate);
    let diff = subDate.getTime() - today.getTime();

    let distance = diff / 1000;

    const days = Math.floor(distance / 86400);
    distance -= days * 86400;

    const hours = Math.floor(distance / 3600);
    distance -= hours * 3600;

    const minutes = Math.floor(distance / 60);
    distance -= minutes * 60;

    const seconds = Math.floor(distance);
    console.log(seconds);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".mins").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
};
setInterval(handleCountdown, 1000);
