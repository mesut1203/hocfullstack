//  Lấy thông tin file
// Hiển thị xem trước --> Lưu thông tin file vào bộ nhớ Blob
//  Gửi file lên back-end thông qua API

const imageEl = document.querySelector(`.image`);
const imgPreview = document.querySelector(`.img-preview`);
const img = document.createElement("img");
img.setAttribute("crossorigin", "anonymous");
let preUrl = null;
imageEl.addEventListener("change", () => {
    const file = imageEl.files[0];
    const urlPreview = URL.createObjectURL(file);
    console.log(urlPreview);
    console.log(preUrl);
    URL.revokeObjectURL(preUrl);

    img.src = urlPreview;
    imgPreview.innerText = "";
    imgPreview.append(img);

    preUrl = urlPreview;
    statusEl.textContent = "Ảnh đã chọn";
});

const btn = document.querySelector(".btn");
const statusEl = document.querySelector(".status");

btn.addEventListener("click", async () => {
    // const file = imageEl.files[0];
    const formData = new FormData();
    formData.append("file", imageEl.files[0]);

    // Loading

    statusEl.textContent = "Đang tải ảnh...";

    try {
        const response = await fetch(
            "https://api.escuelajs.co/api/v1/files/upload",
            {
                method: "POST",
                body: formData,
            }
        );
        const data = await response.json();

        console.log(data);

        statusEl.textContent = "Tải ảnh thành công";
        img.src = data.location;
    } catch (error) {
        console.log(error);
        statusEl.textContent = "Tải ảnh thất bại";
    }
});

// ------------------
