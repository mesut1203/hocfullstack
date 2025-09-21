const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8000 });

const getClientId = () => Date.now() + Math.random() * 1000;
const messageList = [];

wss.on("connection", (ws) => {
    console.log("Đã kết nối websocket");
    ws.clientId = getClientId();

    // Khi có client mới: gửi lại số người online cho tất cả
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: "online-count",
                payload: wss.clients.size
            }));
        }
    });

    ws.on("message", (msg) => {
        const { type, payload } = JSON.parse(msg);

        if (type === "send-message") {
            messageList.push(payload);

            // Gửi danh sách tin nhắn mới cho tất cả
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: "new-message",
                        payload: messageList
                    }));
                }
            });
        }

        if (type === "typing") {
            // Thông báo cho những người khác (trừ người đang gõ)
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: "typing",
                        payload
                    }));
                }
            });
        }
    });

    ws.on("close", () => {
        console.log("Đóng kết nối websocket");
        // Khi 1 client rời đi, gửi lại số người online
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: "online-count",
                    payload: wss.clients.size
                }));
            }
        });
    });
});
