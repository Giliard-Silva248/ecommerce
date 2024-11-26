import { useDispatch, useSelector } from "react-redux";
import { CardsProducts } from "../CardsProducts/CardsProducts";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Product } from "../../redux/reducer";
import { useState, useEffect } from "react";
import { fetchProducts, more } from "../../redux/products-data/DataProducts";

export function ContainerProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products?.products || []) as Product[];

  useEffect(() => {
      dispatch(fetchProducts());
  }, [dispatch]);

  const [sortOption, setSortOption] = useState<string>("");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleMore = () => {
    dispatch(more());
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
            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm bg-cor2" onChange={handleSortChange}>
              <option value="">Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>
        </div>
        <CardsProducts products={sortedProducts} />
        <div className="flex flex-col items-center">
          <button onClick={handleMore} className="block w-64 rounded bg-gray-900 my-5 px-4 py-2 text-sm font-medium text-white transition hover:scale-105">More Products</button>
        </div>
      </div>
    </section>
  );
}
