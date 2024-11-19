import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { removeFromCart } from "../../redux/products-data/DataProducts";
import { useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md"

import * as S from './style'

export function Cart() {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.products.cart);


    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
    };


    return (
        <S.carrinho $toggle={toggle} className="">

            {!toggle ?
            <div>
                <button onClick={() => setToggle(!toggle)}><FaCartShopping /></button> 
            </div>
            :
            <>
                <button onClick={() => setToggle(!toggle)}><IoCloseSharp /></button> 
                <h1>Carrinho</h1>
                <ul>
                    {cart.map(product => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <button onClick={() => handleRemoveFromCart(product.id)}><MdRemoveShoppingCart /></button>
                        </li>
                    ))}
                </ul>
            </>
            }
            
        </S.carrinho>
    );
}
