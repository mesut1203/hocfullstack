import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080");

export default function App() {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const messageScroll = useRef(null);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });
        socket.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        // nhận toàn bộ tin nhắn
        socket.on("message-list", (data) => {
            setMessageList(data);
        });

        // nhận tin nhắn mới
        socket.on("new-message", (data) => {
            setMessageList((prev) => [...prev, data]); // functional update
        });

        socket.emit("load-message");

        // cleanup
        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("message-list");
            socket.off("new-message");
        };
    }, []);

    // auto scroll xuống cuối mỗi khi có tin nhắn mới
    useEffect(() => {
        if (messageScroll.current) {
            messageScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messageList]);

    const handleChange = (e) => setMessage(e.target.value);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        socket.emit("send-message", message);
        setMessage("");
    };

    return (
        <div>
            <h1>Chat box</h1>
            <div
                style={{
                    height: "400px",
                    width: "300px",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                }}
            >
                {messageList.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <div ref={messageScroll} />
            </div>

            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Tin nhắn..."
                    onChange={handleChange}
                    value={message}
                    required
                />
                <button>Gửi</button>
            </form>
        </div>
    );
}
