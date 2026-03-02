import React, { useEffect, useState } from "react";
import { data, Link, useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "../utils/utils";
import Pagination from "../components/Pagination";
const LIMIT = 10;

export default function Products() {
    const [products, setProduct] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    console.log(location);

    const currenPageUrl = searchParam.get("page" || 1);
    const skip = (currentPage - 1) * LIMIT;
    const handleSearch = debounce((e) => {
        const value = e.target.value;
        setSearchParam({
            keyword: value,
        });
    });

    // useEffect(() => {
    //     const getProducts = async () => {
    //         const response = await fetch("https://dummyjson.com/products");
    //         const data = await response.json();
    //         setProduct(data.products);
    //     };
    //     getProducts();
    // }, []);

    useEffect(() => {
        const searchProduct = async () => {
            // tính skip
            let url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

            if (searchParam.get("keyword")) {
                url = `https://dummyjson.com/products/search?q=${searchParam.get(
                    "keyword"
                )}`;
            }
            const response = await fetch(url);

            const data = await response.json();
            setTotal(data.total);
            setProduct(data.products);
            setLoading(false);
        };

        searchProduct();
    }, [searchParam.get("keyword"), currentPage]);

    useEffect(() => {
        setCurrentPage(+currenPageUrl);
    }, [currenPageUrl]);
    return (
        <div>
            <h1>Products</h1>
            {searchParam.get("keyword") && (
                <h2>Bạn đang tìm : {searchParam.get("keyword")}</h2>
            )}
            <div>
                <input
                    type="search"
                    placeholder="Nhập từ khóa..."
                    onChange={handleSearch}
                />
            </div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {products.map((product) => (
                        <div key={product.id}>
                            <Link to={`/san-pham/${product.id}`}>
                                <img
                                    src={product.thumbnail}
                                    width={200}
                                    alt=""
                                />
                            </Link>
                            <h2>
                                <Link to={`/san-pham/${product.id}`}>
                                    {product.title}
                                </Link>
                            </h2>
                            <p>Price: {product.price}</p>
                        </div>
                    ))}
                    <Pagination
                        total={total}
                        currentPage={currentPage}
                        limit={LIMIT}
                    />
                </>
            )}
        </div>
    );
}

//-----------------------------
