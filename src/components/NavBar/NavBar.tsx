
import { Cart } from "../Cart/Cart";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";


export function NavBar(){


    return(
        <section className="w-full px-4 py-8 border flex justify-between">
            <a href="/login">login</a>     
            <a href="/register">register</a>     


            <Cart/>
        </section>
    )
}