import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
       
    };


    return (
        <section className="px-4 w-full h-20 flex justify-between items-center shadow bg-cor3 text-cor5">
            <a href="/" className="w-full md:w-auto">MyShop.com</a>

           
                <div className="md:hidden ">
                    <button onClick={toggleMenu} className="text-cor5 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
        

                <div className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 fixed top-0 right-0 w-64 h-full z-10 bg-cor3 transition-transform transform fixed md:static flex flex-col justify-start md:flex-row md:w-auto gap-6  md:items-center  px-1 `}>
                    {
                        isMenuOpen ?
                        <div className="md:hidden ">
                        <button onClick={toggleMenu} className="hover:text-red-600 focus:outline-none ">
                        <IoCloseSharp />
                        </button>
                        </div>
                        :
                        <></>
                    }

                    <a href="/" className=" border-b-2 border-cor4 w-full md:w-auto">Inicio</a>
                    <a href="/login" className=" border-b-2 border-cor4 w-full md:w-auto">Entrar</a>
                    <a href="/register" className=" border-b-2 border-cor4 w-full md:w-auto">Cadastre-se</a>
                </div>
                   
       
            
        </section>
    );
}
