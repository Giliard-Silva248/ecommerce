import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { removeAllFromCart, removeFromCart } from "../../redux/products-data/DataProducts";
import { useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdRemoveShoppingCart, MdOutlineRemoveCircle  } from "react-icons/md";

import * as S from './style';

export function Cart() {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.products?.cart || []);

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    const handleRemoveAllFromCart = (productId: number) => {
        dispatch(removeAllFromCart(productId));
    };

  //   const total = cart.filter((totalCart: number, product: any) => {
  //     return totalCart + (product.price * product.quantity);
  // });
  
    return (
        <S.Carrinho $toggle={toggle} className={`${toggle ? 'bg-cor4' : 'bg-transparent'} py-4 px-1 space-y-4 z-20 overflow-auto`}>
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

                          
                                  <li className="flex items-center gap-4">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                      className="size-16 rounded object-cover bg-cor1"
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
                                            <MdOutlineRemoveCircle  />
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
                                      <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd>£250</dd>
                                      </div>

                                      <div className="flex justify-between">
                                        <dt>VAT</dt>
                                        <dd>£25</dd>
                                      </div>

                                      <div className="flex justify-between">
                                        <dt>Discount</dt>
                                        <dd>-£20</dd>
                                      </div>

                                      <div className="flex justify-between !text-base font-medium">
                                        <dt>Total</dt>
                                        <dd></dd>
                                      </div>
                                    </dl>

                                    <div className="flex justify-end">
                                      <span
                                        className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="-ms-1 me-1.5 size-4"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                          />
                                        </svg>

                                        <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                      </span>
                                    </div>

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
