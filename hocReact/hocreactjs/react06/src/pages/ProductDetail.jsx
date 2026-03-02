import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function ProductDetail() {
    const [productsDetail, setProductDetail] = useState({});
    const [changeProduct, setChangeProduct] = useState("");
    

    const { id } = useParams();
    useEffect(() => {
        const getDetailProduct = async () => {
            const response = await fetch(
                `https://dummyjson.com/products/${id}`
            );
            const data = await response.json();
            setProductDetail(data);
            setChangeProduct(data.thumbnail);
        };
        getDetailProduct();
    }, [id]);

    return (
        <div>
            <div>
                <img src={changeProduct} alt="" width={200} />
            </div>
            <div>
                {productsDetail.images &&
                    productsDetail.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt=""
                            width={50}
                            onClick={() => setChangeProduct(image)}
                        />
                    ))}
            </div>
            <h1>{productsDetail.title}</h1>
            <h3>${productsDetail.price}</h3>
        </div>
    );
}
// khi click vào ảnh nhỏ sẽ đổi ảnh sản phẩm useState Ref Effect
