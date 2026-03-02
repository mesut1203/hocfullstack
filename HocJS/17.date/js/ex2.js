<div id="countdown"></div>


  const expireDate = new Date("2025-07-03T09:30:45"); // Định dạng ISO cho chắc chắn

  function updateCountdown() {
    const now = new Date();
    const diff = expireDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = "Đã hết hạn!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
      `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
  }

  updateCountdown(); // Gọi lần đầu
  const timer = setInterval(updateCountdown, 1000); // Cập nhật mỗi giây

