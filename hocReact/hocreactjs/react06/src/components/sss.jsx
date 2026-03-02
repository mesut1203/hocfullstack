import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const [productsDetail, setProductDetail] = useState({});
    const [mainImage, setMainImage] = useState(""); // ảnh chính hiển thị
    const { id } = useParams();

    useEffect(() => {
        const getDetailProduct = async () => {
            const response = await fetch(
                `https://dummyjson.com/products/${id}`
            );
            const data = await response.json();
            setProductDetail(data);
            setMainImage(data.thumbnail); // set ảnh chính ban đầu
        };
        getDetailProduct();
    }, [id]);

    return (
        <div>
            <div>
                <img src={mainImage} alt="" width={200} />
            </div>
            <div style={{ marginTop: "10px" }}>
                {productsDetail.images &&
                    productsDetail.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt=""
                            width={50}
                            style={{
                                cursor: "pointer",
                                border: mainImage === image ? "2px solid blue" : "1px solid gray",
                                marginRight: "5px"
                            }}
                            onClick={() => setMainImage(image)} // đổi ảnh chính
                        />
                    ))}
            </div>
            <h1>{productsDetail.title}</h1>
            <h3>${productsDetail.price}</h3>
        </div>
    );
}
