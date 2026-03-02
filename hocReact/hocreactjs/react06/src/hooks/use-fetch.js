// Mục tiêu
// - Nhận vào url
// - Trả về state
// - Bến components chỉ cần sử dụng state đó

import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, [url]);
    return data;
};
