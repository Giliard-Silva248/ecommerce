import { Cart } from "../Cart/Cart";
import { ContainerProducts } from "../ContainerProducts/ContainerProducts";

export function Home(){
    return(
        <section className="h-full border border-red-800 relative">  
            <h1>Home</h1>
            <ContainerProducts/>
            <Cart/>
        </section>
    )
}