import { useState } from "react";
import { useEffect } from "react";

export const useScrollTop = (value) => {
    const [isScroll, setIsScroll] = useState(false);
    const handleScroll = () => {
        const position = window.scrollY;
        if (position >= value) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    const handleScrollTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return [isScroll, handleScrollTop];
};
