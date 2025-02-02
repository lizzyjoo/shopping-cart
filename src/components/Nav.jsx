import { useState, useEffect } from "react";
import CartIcon from "../assets/CartIcon.jsx";
import CartSideBar from "./CartSidebar.jsx";
import Logo from "../assets/Logo.jsx";
import "../assets/nav.css";
import { Link } from "react-router-dom";

export default function Nav({
  cartItems = [], // Default empty array
  onRemoveItem = () => {},
  onUpdateQuantity = () => {},
  cartTotal = 0,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const cartItemCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  return (
    <>
      <div className="menuBar">
        <div className="optionsDiv">
          <Link to="/">
            <button id="home">Home</button>
          </Link>

          <Link to="/shop">
            <button id="shop">Shop</button>
          </Link>
        </div>
        <div className="logoDiv">
          <Logo className="logo" />
        </div>
        <div className="cartDiv">
          <button id="cart" onClick={toggleCart}>
            <CartIcon className="cartIcon" />
            <p>{cartItemCount}</p>
          </button>
        </div>
      </div>
      <CartSideBar
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        onRemoveItem={onRemoveItem}
        onUpdateQuantity={onUpdateQuantity}
        cartTotal={cartTotal}
      />
    </>
  );
}
