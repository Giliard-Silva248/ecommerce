import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products-data/DataProducts";
import { RootState, AppDispatch } from "../../redux/store/store";

export function CardsProducts() {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {products.map(product => (
                <ul key={product.id}>
                    <li>
                        <h3>{product.title}</h3>
                    </li>
                </ul>
            ))}
        </>
    );
}
