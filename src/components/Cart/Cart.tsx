import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { removeAllFromCart, removeFromCart } from "../../redux/products-data/DataProducts";
import { useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdRemoveShoppingCart, MdOutlineRemoveCircle } from "react-icons/md";

import * as S from './style';

interface Product {
    id: number;
    price: number;
    quantity: number;
    thumbnail: string;
    title: string;
    brand: string;
}

export function Cart() {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.products?.cart || []) as Product[];

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    const handleRemoveAllFromCart = (productId: number) => {
        dispatch(removeAllFromCart(productId));
    };

    const total = cart.reduce((totalCart:any, product:any) => {
        return totalCart + product.price * product.quantity;
    }, 0);
    return (
        <S.Carrinho $toggle={toggle} className={`${toggle ? 'bg-cor4 scrollbar scrollbar-thumb  scrollbar-thumb-hover scrollbar-bg scrollbar-firefox h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] overflow-y-scroll ' : 'bg-transparent'} py-4 px-1 space-y-4 z-20`}>
            {!toggle ? (
                <div className="rounded-full">
                    <button onClick={() => setToggle(!toggle)} className="bg-cor4 p-4 rounded-full">
                        <FaCartShopping />
                    </button>
                </div>
            ) : (
                <>
                    <button onClick={() => setToggle(!toggle)} className="hover:text-red-600">
                        <IoCloseSharp />
                    </button>

                    <section>
                        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div className="mx-auto max-w-3xl">
                                <div className="mt-8">
                                    <ul className="space-y-4">
                                        {cart.map(product => (
                                            <li key={product.id} className="flex items-center gap-4">
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    className="h-16 w-16 rounded object-cover bg-cor1"
                                                />
                                                <div>
                                                    <h3 className="text-sm text-gray-900">{product.title}</h3>
                                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                        <div>
                                                            <dt className="inline">{product.brand}</dt>
                                                            <span className="ml-2">x{product.quantity}</span>
                                                        </div>
                                                    </dl>
                                                </div>
                                                <div className="flex flex-1 items-center justify-end gap-2">
                                                    <label htmlFor="Line1Qty" className="sr-only"> {product.quantity} </label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={product.quantity}
                                                        id="Line1Qty"
                                                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                    />
                                                    <div className="flex gap-4 items-center justify-center py-4">
                                                        <button onClick={() => handleRemoveFromCart(product.id)} className="text-gray-600 transition hover:text-red-600">
                                                            <MdOutlineRemoveCircle />
                                                        </button>
                                                        <button onClick={() => handleRemoveAllFromCart(product.id)} className="text-gray-600 transition hover:text-red-600">
                                                            <MdRemoveShoppingCart />
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                        <div className="w-screen max-w-lg space-y-4">
                                            <dl className="space-y-0.5 text-sm text-gray-700">
                                                <div className="flex justify-between !text-base font-medium">
                                                    <dt>Total</dt>
                                                    <dd>${total.toFixed(2)}</dd>
                                                </div>
                                            </dl>
                                            <div className="flex justify-end">
                                                <a
                                                    href="#"
                                                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </S.Carrinho>
    );
}
