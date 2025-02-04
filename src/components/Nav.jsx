import { useState } from "react";
import CartIcon from "../assets/CartIcon.jsx";
import CartSideBar from "./CartSidebar.jsx";
import "./nav.css";
import "../assets/CartCircle.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

        <div className="cartDiv">
          <button id="cart" onClick={toggleCart}>
            <div className="cart-icon-container">
              <CartIcon className="cartIcon" />
              <p className="itemCount">{cartItemCount}</p>
            </div>
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

Nav.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
};
