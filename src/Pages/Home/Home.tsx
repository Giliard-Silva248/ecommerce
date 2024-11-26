import { Cart } from "../../components/Cart/Cart";
import { ContainerProducts } from "../../components/ContainerProducts/ContainerProducts";

export default function Home() {
    return (
        <section className="h-full  relative cor5">  
            <section className="bg-banner bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[35rem] "></section>
            <ContainerProducts/>
            <Cart/>
        </section>
    );
}
