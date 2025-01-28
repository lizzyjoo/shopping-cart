import CartIcon from "../assets/CartIcon.jsx";
import Logo from "../assets/Logo.jsx";
import "../assets/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
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
        <button id="cart">
          <CartIcon className="cartIcon" />
        </button>
      </div>
    </div>
  );
}
