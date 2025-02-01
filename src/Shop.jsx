import { useState, useEffect } from "react";
import Menu from "./components/Nav";
import "./components/card.css";
import "./components/NavBar.css";
import "./shop.css";
import ProductCard from "./components/ProductCard";

// manage all products via useState, product info fetched once upon mounting
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fake-coffee-api.vercel.app/api");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  if (error) {
    return <div>Error Looading products</div>;
  }

  return (
    <div className="shop-container">
      <Menu />
      <div className="shop-main">
        <div className="shopOptions">
          <div className="shopTitle">ALL COFFEE</div>
          <p className="productCount">{products.length} products</p>
          <button className="filterBtn">FILTERS</button>
          <button className="sortBtn">SORT BY: </button>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              region={product.region}
              weight={product.weight}
              roast_level={product.roast_level}
              flavor_profile={product.flavor_profile}
              image_url={product.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
