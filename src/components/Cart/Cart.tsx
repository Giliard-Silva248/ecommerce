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
        <S.Carrinho $toggle={toggle}  className="bg-cor4 py-4 px-1 space-y-4">

            {!toggle ?
            <div  className=" absolute top-btnCard right-4">
                <button onClick={() => setToggle(!toggle)} className="bg-cor4 p-4 rounded-full"><FaCartShopping /></button> 
            </div>
            :
            <>
                <button onClick={() => setToggle(!toggle)} className="hover:text-red-600"><IoCloseSharp /></button> 
                
                <ul className="space-y-1">
                    {cart.map(product => (
                         <li className="flex items-center gap-4 border bg-cor3 p-2">
                         <img
                          src={product.thumbnail} alt={product.title}
                           className="size-16 rounded object-cover border border-cor1 roader"
                         />
                 
                         <div>
                           <h3 className="text-sm text-gray-900">{product.title}</h3>
                 
                           <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                             <div>
                               <dt className="inline">{product.brand}</dt>
                             </div>
                           </dl>
                         </div>
                 
                         <div className="flex flex-1 items-center justify-end gap-2">
                         <button onClick={() => handleRemoveFromCart(product.id)} className="text-gray-600 transition hover:text-red-600"><MdRemoveShoppingCart /></button>
                         </div>
                       </li>
                    ))}
                </ul>
            </>
            }
            
        </S.Carrinho>
    );
}
