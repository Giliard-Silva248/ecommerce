import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../../redux/products-data/DataProducts";
import { RootState, AppDispatch } from "../../redux/store/store";
import { Product } from "../../redux/reducer";

import { FaCartPlus } from "react-icons/fa6";

export function CardsProducts() {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            {products.map((product: Product) => (
                <ul key={product.id}>
                    <li>
                        <h3>{product.title}</h3>
                        <button className="border-2 border-red-800" onClick={() => handleAddToCart(product)}><FaCartPlus /></button>
                    </li>
                </ul>
            ))}
        </>
    );
}
