import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080");

export default function App() {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const messageScroll = useRef();
    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });
        socket.on("disconnect", () => {
            console.log("Disconnected from server");
        });
        // socket.on("new-message-1", (data) => {
        //     setMessage(data);
        // });
    }, []);

    // const handleClick = () => {
    //     socket.emit("message-1", "Xin chao message 1");
    // };

    // const handleClick2 = () => {
    //     socket.emit("message-2", "Xin chao message 2");
    // };

    useEffect(() => {
        socket.on("new-message", (data) => {
            setMessageList([...messageList, data]);
        });
        socket.emit("load-message");
        socket.on("message-list", (data) => {
            setMessageList(data);
        });
    }, [messageList]);

    useEffect(() => {
        messageScroll.current.scrollIntoView({ behavior: "smooth" });
    }, [messageList]);

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        socket.emit("send-message", message);
        setMessage("");
    };
    return (
        <div>
            {/* <h1>{message}</h1>
            <button onClick={handleClick}>Clickme</button>
            <button onClick={handleClick2}>Clickme2</button> */}

            <h1>Chatbox</h1>
            <div
                style={{
                    height: "400px",
                    width: "300px",
                    overflow: "auto",
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
                    required
                    onChange={handleChange}
                    value={message}
                />
                <button>Gửi</button>
            </form>
        </div>
    );
}
