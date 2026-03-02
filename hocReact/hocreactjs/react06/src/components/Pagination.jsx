import React from "react";
import { data, useSearchParams } from "react-router-dom";
// Nhận được total và page

export default function ({ total, currentPage, limit }) {
    const [params, setParam] = useSearchParams();

    const pageSize = Math.ceil(total / limit);
    const ScrollTop = () => {
        window.scrollTo({ top: "0px" });
    };

    console.log(pageSize);

    // console.log(total);
    // console.log(currentPage);
    // console.log(limit);

    return (
        <>
            {Array(pageSize)
                .fill()
                .map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            onClick={() => {
                                ScrollTop();
                                setParam({ page });
                            }}
                            className={currentPage === page ? "active" : ""}
                        >
                            {page}
                        </button>
                    );
                })}
        </>
    );
}

////---
