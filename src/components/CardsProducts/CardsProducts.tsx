import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, addToCart } from "../../redux/products-data/DataProducts";
import { AppDispatch } from "../../redux/store/store";
import { Product } from "../../redux/reducer";

interface CardsProductsProps {
    products: Product[];
}

export function CardsProducts({ products }: CardsProductsProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true); 
            await dispatch(fetchProducts());
            setIsLoading(false); 
        };
        loadProducts();
    }, [dispatch]);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
            {!isLoading && (
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product: Product) => (
                        <li key={product.id} className="border shadow w-full">
                            <div className="group block overflow-hidden space-y-6">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="h-[350px] w-full object-cover sm:h-72 transition duration-500 group-hover:scale-105"
                                />
                                <div className="border border-gray-100 bg-white p-6">
                                    <p className="text-gray-700">
                                        ${product.price}
                                        <span className="text-gray-400"> - %{product.discountPercentage}</span>
                                    </p>
                                    <h3 className="mt-1.5 text-lg font-medium text-gray-900 whitespace-nowrap line-clamp-3">
                                        {product.title}
                                    </h3>
                                    <p className="mt-1.5 line-clamp-3 text-gray-700">{product.description}</p>
                                    <div className="mt-4 flex gap-4">
                                        <button
                                            className="block w-full rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition hover:scale-105"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
