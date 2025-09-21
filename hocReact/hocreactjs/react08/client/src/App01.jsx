import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
    const [socket, setSocket] = useState();
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState("");
    const [typing, setTyping] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000");
        setSocket(ws);

        ws.onopen = () => {
            console.log("Đã kết nối tới server");
        };
        ws.onclose = () => {
            console.log("Đóng kết nối server");
        };
        return () => {
            ws.close(); //Đóng kết nối khi component unmount
        };
    }, []);

    useEffect(() => {
        if (!socket) {
            return;
        }
        socket.onmessage = ({ data }) => {
            const { type, payload } = JSON.parse(data);

            if (type === "new-message") {
                setMessageList(payload);
            }

            if (type === "typing") {
                setTyping(payload);
            }

            if (type === "online-count") {
                setOnlineCount(payload);
            }
        };
    }, [socket]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message) {
            return;
        }
        console.log(message);

        const data = {
            type: "send-message",
            payload: message,
        };
        socket.send(JSON.stringify(data));
        setMessage("");

        socket.send(JSON.stringify({ type: "typing", payload: false }));
    };

    const handleTyping = (e) => {
        setMessage(e.target.value);

        if (!isTyping) {
            setIsTyping(true);
            socket.send(JSON.stringify({ type: "typing", payload: true }));
        }

        clearTimeout(window.typingTimeout);
        window.typingTimeout = setTimeout(() => {
            setIsTyping(false);
            socket.send(JSON.stringify({ type: "typing", payload: false }));
        }, 1000);
    };

    return (
        <div>
            <h1>Số người online: {onlineCount}</h1>
            <div
                style={{
                    height: "300px",
                    overflow: "auto",
                    border: "1px solid red",
                }}
            >
                {messageList.map((message, index) => {
                    return <p key={index}>{message}</p>;
                })}
            </div>

            {typing && <p>Dang nhap</p>}
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Message"
                    // onChange={(e) => setMessage(e.target.value)}
                    onChange={handleTyping}
                    value={message}
                />
                <button>send</button>
            </form>
        </div>
    );
}
