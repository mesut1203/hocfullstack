import "../assets/style.css";
import Attribute from "./Attribute";

export default function Product({ product }) {
    // console.log(product);

    return (
        <div
            key={product.id}
            className={`product ${product.isActive ? "active" : ""} `}
        >
            <h2>{product.name}</h2>
            <p>Price: {product.price.toLocaleString()}</p>
            {/* <Attribute attributes={product.attribute} /> */}
            {product.attribute && product.attribute.length > 0 && (
                <Attribute attributes={product.attribute} />
            )}

            <button>Add to Cart</button>
        </div>
    );
}

//  Nếu sản phẩm nào có attribute --> Hiển thị components Attribute vào trước button "Add to Cart"

//  Bên component Attribute : Hiển thị danh sách attribute tương ứng
