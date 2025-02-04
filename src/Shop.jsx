import { useState, useEffect } from "react";
import Menu from "./components/Nav";
import Header from "./components/LogoHeader";
import "./components/card.css";
import "./components/nav.css";
import "./shop.css";
import "./assets/FilterIcon.css";
import FilterIcon from "./assets/Filter";
import ProductCard from "./components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [sortType, setSortType] = useState("Featured");

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

  const handleSort = (type) => {
    setSortType(type);
  };

  const getSortedProducts = (products, sortType) => {
    switch (sortType) {
      case "ALPHABETICALLY, A-Z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "ALPHABETICALLY, Z-A":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "PRICE, LOW TO HIGH":
        return [...products].sort((a, b) => a.price - b.price);
      case "PRICE, HIGH TO LOW":
        return [...products].sort((a, b) => b.price - a.price);
      default: // "Featured"
        return products;
    }
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  if (error) {
    return <div>Error Loading products</div>;
  }

  return (
    <div className="shop-container">
      <Header />
      <Menu
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        cartTotal={calculateTotal()}
      />
      <div className="shop-main">
        <div className="shopOptions">
          <div className="shopLeft">
            <div className="shopTitle">ALL COFFEE</div>
            <p className="productCount">{products.length} products</p>
            <button className="filterBtn">
              <FilterIcon />
              FILTERS
            </button>
          </div>
          <div className="shopRight">
            <div className="sort-dropdown">
              <button className="sortBtn">SORT BY: {sortType}</button>
              <div className="sort-options">
                <button onClick={() => handleSort("Featured")}>Featured</button>
                <button onClick={() => handleSort("ALPHABETICALLY, A-Z")}>
                  ALPHABETICALLY, A-Z
                </button>
                <button onClick={() => handleSort("ALPHABETICALLY, Z-A")}>
                  ALPHABETICALLY, Z-A
                </button>
                <button onClick={() => handleSort("PRICE, LOW TO HIGH")}>
                  PRICE, LOW TO HIGH
                </button>
                <button onClick={() => handleSort("PRICE, HIGH TO LOW")}>
                  PRICE, HIGH TO LOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productGrid">
          {getSortedProducts(products, sortType).map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
