document.getElementById("youtubeInput").addEventListener("input", function () {
    const input = this.value.trim();
    const videoId = getYouTubeVideoId(input);

    if (videoId) {
        const iframe = `
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/${videoId}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        `;
        document.querySelector(".video").innerHTML = iframe;
    } else {
        document.querySelector(".video").innerHTML = ""; // Xóa iframe nếu không hợp lệ
    }
});

// B2: Regex lấy ID YouTube
function getYouTubeVideoId(url) {
    const regex =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
