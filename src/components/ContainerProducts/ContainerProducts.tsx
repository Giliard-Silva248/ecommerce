import {  useSelector } from "react-redux";
import { CardsProducts } from "../CardsProducts/CardsProducts";
import { RootState } from "../../redux/store/store";
import { Product } from "../../redux/reducer";
import { useState } from "react";

export function ContainerProducts() {
 
  const products = useSelector((state: RootState) => state.products?.products || []) as Product[];

  const [sortOption, setSortOption] = useState<string>("");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    const [key, order] = sortOption.split(", ");
    if (key === "Title") {
      if (order === "ASC") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    } else if (key === "Price") {
      if (order === "ASC") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }
    return 0;
  });

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>
        <div className="mt-8 sm:flex sm:items-center sm:justify-between">
    
          <div className="hidden sm:block">
            <label htmlFor="SortBy" className="sr-only">SortBy</label>
            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm" onChange={handleSortChange}>
              <option value="">Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>
        </div>
        <CardsProducts products={sortedProducts} />
      </div>
    </section>
  );
}
