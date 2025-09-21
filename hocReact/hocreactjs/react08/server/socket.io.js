const { Socket } = require("dgram");
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpSever = createServer();
const io = new Server(httpSever, {
    cors: {
        origin: "*",
    },
});

const messageList = [];

io.on("connection", (socket) => {
    console.log("Đã kết nối socket.io: ", socket.id);

    // Lang nghe cac event
    socket.on("message-1", (data) => {
        console.log(data);
        io.emit("message", message);
    });

    socket.on("load-message", () => {
        io.emit("message-list", messageList);
    });

    socket.on("message-2", (data) => {
        console.log(data);
    });

    socket.on("send-message", (data) => {
        messageList.push(data);
        io.emit("new-message", data);
    });

    socket.on("disconnect", () => {
        console.log("Ngắt kết nối socket.io: ", socket.id);
    });
});

httpSever.listen(8080);

// emit --> Gui event
// on --> Lang nghe
