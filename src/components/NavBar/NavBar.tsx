import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
       
    };


    return (
        <section className="px-4 w-full h-20 flex justify-between items-center shadow bg-cor3 text-cor5">
            <a href="/" className="w-full md:w-auto hover:opacity-70 transition-all ease-in-out duration-300">MyShop.com</a>

           
                <div className="md:hidden ">
                    <button onClick={toggleMenu} className="text-cor5 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
        

                <nav className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 fixed top-0 right-0 w-64 h-full z-10 bg-cor3 transition-transform transform fixed md:static flex flex-col justify-start md:flex-row md:w-auto gap-6  items-center  px-1 `}>
                    {
                        isMenuOpen ?
                        <div className="md:hidden  w-full px-4 my-4 text-end">
                        <button onClick={toggleMenu} className="hover:text-red-600 focus:outline-none ">
                        <IoCloseSharp className='text-3xl'/>
                        </button>
                        </div>
                        :
                        <></>
                    }

                    <nav aria-label="Breadcrumb" className="flex">
                    <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                        <li className="flex items-center">
                        <a
                            href="/"
                            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                            </svg>

                            <span className="ms-1.5 text-xs font-medium"> Home </span>
                        </a>
                        </li>

                        <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                        >
                        </span>

                        <a
                            href="/login"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                            Login
                        </a>
                        </li>
                    </ol>
                    </nav>
                </nav>
                   
       
            
        </section>
    );
}
