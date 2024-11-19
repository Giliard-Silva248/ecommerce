import { useState } from 'react';
import { Cart } from "../Cart/Cart";
import { IoCloseSharp } from "react-icons/io5";
export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
       
    };


    return (
        <section className="w-full px-4 py-6 border flex justify-between items-center shadow">
            <h1>MyShop.com</h1>
            {
                !isMenuOpen
                ?
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                :
                <div>
                    <div className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform md:static md:flex md:w-auto md:gap-6 items-center py-4 px-1`}>
                    <button onClick={() => setIsMenuOpen(isMenuOpen)} className=''><IoCloseSharp /></button> 
                        <a href="/" className="block py-2 md:py-0 border-b-2 border-cor4">Inicio</a>
                        <a href="/login" className="block py-2 md:py-0 border-b-2 border-cor4">Entrar</a>
                        <a href="/register" className="block py-2 md:py-0 border-b-2 border-cor4">Cadastre-se</a>
                        <Cart/>
                    </div>
                </div>
            }
        </section>
    );
}
