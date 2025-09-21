const WebSocket = require("ws");
const wss = new WebSocket.Server({
    port: 8000,
});

const getClientId = () => {
    return new Date().getTime() + Math.random() * 1000;
};

const messageList = [];

wss.on("connection", (ws) => {
    console.log("Da ket noi websocket");
    const clientId = getClientId();
    ws.clientId = clientId;

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    type: "online-count",
                    payload: wss.clients.size,
                })
            );
        }
    });

    // Các thông điệp nhận và gửi giữa server client
    ws.on("message", (message) => {
        const { type, payload } = JSON.parse(message);
        if (type === "send-message") {
            // Thêm
            messageList.push(payload);
            const data = {
                type: "new-message",
                payload: messageList,
            };

            // wss.clients.forEach((client) => {
            //     if (client.readyState === 1) {
            //         client.send(JSON.stringify(data));
            //     }
            // });

            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        }

        if (type === "typing") {
            const data = {
                type: "typing",
                payload,
            };

            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        }
    });

    ws.on("close", () => {
        console.log("Đóng kết nối websocket");

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(
                    JSON.stringify({
                        type: "online-count",
                        payload: wss.clients.size,
                    })
                );
            }
        });
    });
});
