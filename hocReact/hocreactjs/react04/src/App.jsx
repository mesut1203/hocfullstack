import React, { useState } from "react";
import { useRef } from "react";
import { ChevronsLeft } from "lucide-react";
import { Menu } from "lucide-react";
import "./App.css";

export default function App() {
    const [isHideSideBar, setSideBar] = useState(false);
    const lastWidthRef = useRef();
    const sidebarRef = useRef();
    const handleMouseDown = (e) => {
        e.stopPropagation();
        document.addEventListener("mousemove", handleResize);
        document.addEventListener("mouseup", handleMouseUp);
        document.body.style.userSelect = "none";
        // Bỏ transition
        sidebarRef.current.style.transition = "none";
    };

    const handleResize = (e) => {
        let clientX = e.clientX;
        if (clientX < 150) {
            clientX = 150;
        }
        if (clientX > 400) {
            clientX = 400;
        }
        sidebarRef.current.style.width = `${clientX}px`;
        lastWidthRef.current = clientX;
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleResize);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.userSelect = "auto";
        // Khôi phục transition
        sidebarRef.current.style.transition = null;
    };

    const handleHideSidebar = () => {
        sidebarRef.current.style.width = 0;
        sidebarRef.current.style.paddingInline = 0;
        setSideBar(true);
    };

    const handleResetSidebar = () => {
        if (lastWidthRef.current) {
            sidebarRef.current.style.width = `${lastWidthRef.current}px`;
        } else {
            sidebarRef.current.style.width = null;
        }
        sidebarRef.current.style.paddingInline = null;
        setSideBar(false);
    };

    return (
        <div>
            <div className="main">
                <div className="sidebar" ref={sidebarRef}>
                    <div
                        className="re-sidebar"
                        onMouseDown={handleMouseDown}
                    ></div>
                    <ChevronsLeft
                        className="icon"
                        onClick={handleHideSidebar}
                    />
                    <h3>Sidebar</h3>
                </div>
                <div className="content">
                    <div className="page-title">
                        <Menu
                            onClick={handleResetSidebar}
                            className={`icon ${isHideSideBar ? "show" : ""}`}
                        />
                    </div>
                    <h3>Content</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident tempora laborum maxime? Eum incidunt
                        cupiditate alias at dolores. Pariatur ab nesciunt odit
                        quia labore aperiam similique quae, cumque repudiandae
                        voluptatem.
                    </p>
                </div>
            </div>
        </div>
    );
}

/*
Refs: 

- Là object có giá trị {current: value}

- Tham chiếu đến giá trị cuối cùng cập nhật --> Khi component re-render không bị reset dữ liệu
- Tham chiếu đến phần tử DOM --> Thao tác với DOM

Multiple Refs

*/
