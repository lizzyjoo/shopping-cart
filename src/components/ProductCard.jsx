import React from "react";
import "./card.css";
import PropTypes from "prop-types";

export default function ProductCards({
  name,
  description,
  price,
  region,
  weight,
  roast_level,
  flavor_profile,
  image_url,
}) {
  const formattedFlavors = Array.isArray(flavor_profile)
    ? flavor_profile.join(" · ")
    : flavor_profile;

  return (
    <div className="productCardWrapper">
      <div className="productOutline">
        <img src={image_url} alt={name} className="product-image" />
      </div>
      <div className="productInfo">
        <p className="productName">{name}</p>

        <p className="productFlavor">{formattedFlavors}</p>
        <p className="productRegion">{region}</p>

        <div className="productRoast">{roast_level}</div>
        <p className="Price">{price}</p>
      </div>
    </div>
  );
}

ProductCards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flavor_profile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
