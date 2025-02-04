import { useState } from "react";
import "./card.css";
import PropTypes from "prop-types";

// update needed:
// 1. implement page for each product

export default function ProductCards({
  name,
  description,
  price,
  region,
  weight,
  roast_level,
  flavor_profile,
  image_url,
  onAddToCart,
}) {
  const [showButton, setShowButton] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const formattedFlavors = Array.isArray(flavor_profile)
    ? flavor_profile.join(" · ")
    : flavor_profile;

  const getRoastLevelDisplay = (level) => {
    const filledCircles = "●".repeat(level);
    const emptyCircles = "○".repeat(5 - level);
    return filledCircles + emptyCircles;
  };
  return (
    <div className="productCardWrapper">
      <div
        onMouseEnter={() => {
          setShowButton(true);
          setShowDescription(true);
        }}
        onMouseLeave={() => {
          setShowButton(false);
          setShowDescription(false);
        }}
        className="productOutline"
      >
        <img src={image_url} alt={name} className="product-image" />
        {showDescription && (
          <div className="product-description-overlay">
            <div className="description-content">
              <h3>Product Details</h3>
              <p>{description}</p>
              <p>
                <strong>Weight:</strong> {weight}g
              </p>
            </div>
          </div>
        )}
        {showButton && (
          <button className="cart-button" onClick={onAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p className="productFlavor">{formattedFlavors}</p>
        <p className="productRegion">{region}</p>
        <div className="productRoast">
          Roast Level:{" "}
          <span id="roastIcon">{getRoastLevelDisplay(roast_level)}</span>
        </div>
        <p className="Price">${price}</p>
      </div>
    </div>
  );
}

ProductCards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  image_url: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  roast_level: PropTypes.number.isRequired,
  flavor_profile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
